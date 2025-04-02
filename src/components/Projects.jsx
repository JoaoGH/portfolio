import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {PROJECTS} from "../utils/data.js";
import {ProjectCard} from "./ProjectCard.jsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Trans, useTranslation} from "react-i18next";
import {ProjectDetailsModal} from "./ProjectDetailModal.jsx";

export const Projects = () => {
    const {t} = useTranslation();
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "start"});
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);


    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        emblaApi.on("select", updateScrollButtons);
        updateScrollButtons();
    }, [emblaApi, updateScrollButtons]);

    const openProjectDetails = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="bg-background">
            <div className="container mx-auto px-15 py-12 md:py-16">
                <h4 className="section-title bg-gradient-primary">
                    {t("projects.title")}
                </h4>

                <div className="mt-4 md:mt-6">
                    <p className="text-sm text-justify leading-6 whitespace-pre-line">
                        <Trans i18nKey="projects.text" components={{1: <br/>}}/>
                    </p>

                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex pt-14 pb-8">
                                {PROJECTS.map((project, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                                        >
                                            <ProjectCard
                                                key={project.id}
                                                imgUrl={project.image}
                                                title={project.title}
                                                description={project.description}
                                                tags={project.tags}
                                                onClick={() => openProjectDetails(project)}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            className={`cursor-pointer arrow-btn -left-7 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                            aria-label={t("projects.button.1.hint")}
                        >
                            <IoIosArrowBack/>
                        </button>

                        <button
                            className={`cursor-pointer arrow-btn -right-7 ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={() => emblaApi && emblaApi.scrollNext()}
                            disabled={!canScrollNext}
                            aria-label={t("projects.button.2.hint")}
                        >
                            <IoIosArrowForward/>
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
