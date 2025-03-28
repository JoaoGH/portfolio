import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {PROJECTS} from "../../utils/data.js";
import {ProjectCard} from "../ProjectCard/ProjectCard.jsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


export const Projects = () => {
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
                    <h4 className="section-title bg-gradient-primary">Projects</h4>

                    <p className="text-sm text-center md:text-justify mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mollis libero. Pellentesque
                        eu lorem nulla. Phasellus maximus, nunc eget malesuada pharetra, sem felis consectetur urna,
                        quis porta lorem nibh a dui. Duis condimentum magna at malesuada pretium. Nunc id neque metus.
                        Vivamus ut nisi pellentesque tortor rhoncus dapibus non in metus. Etiam ut pellentesque ante.
                        <br/>
                        Sed eu consectetur arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Phasellus placerat quis neque id condimentum. Duis vehicula congue dolor quis vulputate. Nam ut
                        facilisis tellus. Aenean elementum odio eu vestibulum mollis. Phasellus ultricies consequat
                        nibh, ac volutpat justo aliquam at. Maecenas malesuada lacus ante, at tempor tortor placerat
                        sed. Nulla eu lacus arcu. In tempor tellus nec dui lobortis, in varius purus ultricies.
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

