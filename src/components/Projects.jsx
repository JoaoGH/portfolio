import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {PROJECTS} from "../utils/data.js";
import {ProjectCard} from "./ProjectCard.jsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Trans, useTranslation} from "react-i18next";
import {ProjectDetailsModal} from "./ProjectDetailModal.jsx";

export const Projects = () => {
    const {t} = useTranslation();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const updateScrollState = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        emblaApi.on("select", updateScrollState);
        emblaApi.on("reInit", updateScrollState);
        updateScrollState();

        return () => {
            emblaApi.off("select", updateScrollState);
            emblaApi.off("reInit", updateScrollState);
        };
    }, [emblaApi, updateScrollState]);

    const openProjectDetails = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <div className="max-w-3xl">
                    <h2 className="section-title">
                        {t("projects.title")}
                    </h2>

                    <p className="text-sm sm:text-base text-left leading-relaxed whitespace-pre-line text-slate-600 dark:text-zinc-400 mt-3">
                        <Trans i18nKey="projects.text" components={{1: <br/>}}/>
                    </p>
                </div>

                <div className="mt-8 md:mt-10">
                    {/* Carrossel com "peek" lateral (mostra pedacinho do anterior e do próximo) */}
                    <div className="relative -mx-4 sm:mx-0">
                        <div className="overflow-hidden py-2" ref={emblaRef}>
                            <div className="flex items-stretch">
                                {PROJECTS.map((project, id) => {
                                    const isActive = id === selectedIndex;
                                    return (
                                        <div
                                            key={project.id || id}
                                            className="flex-[0_0_82%] sm:flex-[0_0_46%] lg:flex-[0_0_31%] min-w-0 px-2 sm:px-2.5 flex"
                                        >
                                            <ProjectCard
                                                imgUrl={project.image}
                                                title={project.title}
                                                description={project.description}
                                                tags={project.tags}
                                                isActive={isActive}
                                                onClick={() => openProjectDetails(project)}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Navegação inferior discreta e dessaturada */}
                    <div className="mt-6 flex items-center justify-between sm:justify-center gap-4">
                        <button
                            type="button"
                            className={`cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 hover:text-slate-900 dark:hover:text-white text-xs font-mono font-medium transition-all shadow-2xs ${
                                !canScrollPrev ? "opacity-40 cursor-not-allowed" : "active:scale-[0.98]"
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                            aria-label={t("projects.button.1.hint")}
                        >
                            <IoIosArrowBack className="text-sm"/>
                            <span>{t("projects.button.1.hint")}</span>
                        </button>

                        <div className="flex items-center gap-1.5" role="tablist" aria-label={t("projects.title")}>
                            {PROJECTS.map((project, index) => {
                                const active = index === selectedIndex;
                                return (
                                    <button
                                        key={project.id || index}
                                        type="button"
                                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                        aria-label={`${t(project.title)} (${index + 1}/${PROJECTS.length})`}
                                        aria-current={active ? "true" : undefined}
                                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                            active
                                                ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                                                : "w-1.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600"
                                        }`}
                                    />
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            className={`cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 hover:text-slate-900 dark:hover:text-white text-xs font-mono font-medium transition-all shadow-2xs ${
                                !canScrollNext ? "opacity-40 cursor-not-allowed" : "active:scale-[0.98]"
                            }`}
                            onClick={() => emblaApi && emblaApi.scrollNext()}
                            disabled={!canScrollNext}
                            aria-label={t("projects.button.2.hint")}
                        >
                            <span>{t("projects.button.2.hint")}</span>
                            <IoIosArrowForward className="text-sm"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de Detalhes */}
            {selectedProject && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};
