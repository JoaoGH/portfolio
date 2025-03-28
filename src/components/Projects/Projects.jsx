import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {PROJECTS} from "../../utils/data.js";
import {ProjectCard} from "../ProjectCard/ProjectCard.jsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Trans, useTranslation} from "react-i18next";


export const Projects = () => {
    const { t } = useTranslation();
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "start"});
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

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

    return (
        <section id="projects" className="bg-background mt-14">
            <div className="container mx-auto px-8 md:px-10 py-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title bg-gradient-primary">{t("default.item.2")}</h4>

                    <p className="text-sm text-center md:text-justify mt-4">
                        <Trans i18nKey="default.item.15" components={{ 1: <br /> }} />
                    </p>
                </div>

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
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        className={`arrow-btn -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()}
                        disabled={!canScrollPrev}
                    >
                        <IoIosArrowBack/>
                    </button>

                    <button
                        className={`arrow-btn -right-5 ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => emblaApi && emblaApi.scrollNext()}
                        disabled={!canScrollNext}
                    >
                        <IoIosArrowForward/>
                    </button>

                </div>
            </div>
        </section>
    );
}

