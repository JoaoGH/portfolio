import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {SKILLS, SKILLS_TAB} from "../utils/data.js";
import {Tabs} from "./Tabs.jsx";
import {SkillCard} from "./SkillCard.jsx";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {useTranslation} from "react-i18next";

const INITIAL_DESKTOP_COUNT = 6;

export const TechnicalProficiency = () => {
    const {t} = useTranslation();
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState("all");
    const [isExpanded, setIsExpanded] = useState(false);

    // Carrossel exclusivo para mobile (evita o paredão vertical de 21 cards no celular)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
        containScroll: "trimSnaps"
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateCarouselState = useCallback(() => {
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

        emblaApi.on("select", updateCarouselState);
        emblaApi.on("reInit", updateCarouselState);
        updateCarouselState();

        return () => {
            emblaApi.off("select", updateCarouselState);
            emblaApi.off("reInit", updateCarouselState);
        };
    }, [emblaApi, updateCarouselState]);

    const handleTabValueChange = (value) => {
        setActiveTab(value);
        setIsExpanded(false);

        if (value === "all") {
            setTabData(SKILLS);
        } else {
            const updatedList = SKILLS.filter((skill) => skill.type === value);
            setTabData(updatedList);
        }

        if (emblaApi) {
            emblaApi.scrollTo(0);
        }
        setSelectedIndex(0);
    };

    const shouldLimitDesktop = activeTab === "all" && !isExpanded && tabData.length > INITIAL_DESKTOP_COUNT;
    const desktopSkills = shouldLimitDesktop ? tabData.slice(0, INITIAL_DESKTOP_COUNT) : tabData;

    return (
        <section id="skills" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <div className="max-w-3xl">
                    <h2 className="section-title">
                        {t("skills.title")}
                    </h2>

                    <p className="text-sm sm:text-base text-left leading-relaxed whitespace-pre-line text-slate-600 dark:text-zinc-400 mt-3">
                        {t("skills.text")}
                    </p>
                </div>

                <div className="mt-7 md:mt-8">
                    <Tabs
                        tabList={SKILLS_TAB}
                        activeTab={activeTab}
                        onChange={handleTabValueChange}
                    />

                    {/* MOBILE (< md): Carrossel horizontal com "peek" lateral do próximo card */}
                    <div className="md:hidden mt-6">
                        <div className="relative -mx-4">
                            <div className="overflow-hidden py-1" ref={emblaRef}>
                                <div className="flex items-stretch">
                                    {tabData.map((skill) => (
                                        <div
                                            key={skill.id}
                                            className="flex-[0_0_84%] min-w-0 px-2 flex"
                                        >
                                            <div className="w-full h-full">
                                                <SkillCard
                                                    icon={<skill.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400"/>}
                                                    name={skill.name}
                                                    description={t(skill.description)}
                                                    progress={skill.progress}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Controles inferiores discretos no mobile */}
                        {tabData.length > 1 && (
                            <div className="mt-4 flex items-center justify-between gap-3">
                                <button
                                    type="button"
                                    className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 text-xs font-mono font-medium transition-all shadow-2xs ${
                                        !canScrollPrev ? "opacity-40 cursor-not-allowed" : "active:scale-[0.98]"
                                    }`}
                                    onClick={() => emblaApi && emblaApi.scrollPrev()}
                                    disabled={!canScrollPrev}
                                    aria-label={t("projects.button.1.hint")}
                                >
                                    <IoIosArrowBack className="text-sm"/>
                                    <span>{t("projects.button.1.hint")}</span>
                                </button>

                                <span className="font-mono text-xs font-medium text-slate-500 dark:text-zinc-400 tabular-nums">
                                    {Math.min(selectedIndex + 1, tabData.length)} / {tabData.length}
                                </span>

                                <button
                                    type="button"
                                    className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 text-xs font-mono font-medium transition-all shadow-2xs ${
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
                        )}
                    </div>

                    {/* DESKTOP (>= md): Grid de 3 colunas com alturas iguais e expansão progressiva na aba "Todas" */}
                    <div className="hidden md:block mt-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                            {desktopSkills.map((skill, index) => {
                                return (
                                    <motion.div
                                        key={skill.id}
                                        className="h-full"
                                        initial={{opacity: 0, y: 14}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.25, delay: Math.min(index * 0.04, 0.24)}}
                                    >
                                        <SkillCard
                                            icon={<skill.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400"/>}
                                            name={skill.name}
                                            description={t(skill.description)}
                                            progress={skill.progress}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {activeTab === "all" && tabData.length > INITIAL_DESKTOP_COUNT && (
                            <div className="mt-7 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 text-slate-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-mono text-xs font-medium shadow-2xs transition-all active:scale-[0.99]"
                                >
                                    {isExpanded ? (
                                        <>
                                            <span>{t("skill.button.showless.text")}</span>
                                            <FiChevronUp className="text-sm"/>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t("skill.button.showall.text")} ({tabData.length})</span>
                                            <FiChevronDown className="text-sm"/>
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
