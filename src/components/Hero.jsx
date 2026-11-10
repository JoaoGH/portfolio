import React from "react";
import {STATS} from "../utils/data.js";
import {StatInfoCard} from "./StatInfoCard.jsx";
import {useTranslation} from "react-i18next";
import {ParticleText} from "./ParticleText.jsx";
import {getYearsOfExperience} from "../utils/experience.js";
import {Link} from "react-scroll";
import {FiDownload, FiArrowRight} from "react-icons/fi";

export const Hero = () => {
    const {t, i18n} = useTranslation();
    const yearsOfExperience = getYearsOfExperience();

    const handleDownload = () => {
        const link = document.createElement('a');

        const sufix = i18n.language === "en" ? "Resume" : "Curriculum";
        const fileUrl = `/docs/${sufix}.pdf`;

        link.href = fileUrl;
        link.download = `${sufix} - JGHartmann.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    <div className="order-2 lg:order-1 lg:col-span-7 text-left">
                        <p className="font-mono text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-tight">
                            {t("hero.item.1.label")}
                        </p>
                        <h1 className="font-mono text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] mt-2 text-slate-900 dark:text-zinc-50">
                            {t("hero.title")}
                        </h1>
                        <p className="text-sm sm:text-base leading-relaxed mt-4 text-slate-600 dark:text-zinc-400 max-w-[62ch]">
                            {t("hero.item.2.label", { years: yearsOfExperience })}
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7">
                            <button
                                type="button"
                                onClick={handleDownload}
                                aria-label={t("hero.button.2.hint")}
                                className="action-btn btn-scale-anim bg-gradient-primary gap-2"
                            >
                                <FiDownload className="text-base shrink-0"/>
                                <span>{t("hero.button.2.text")}</span>
                            </button>

                            <Link
                                to="projects"
                                smooth
                                offset={-80}
                                aria-label={t("hero.button.1.hint")}
                                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-2xs transition-all cursor-pointer active:scale-[0.99]"
                            >
                                <span>{t("hero.button.1.text")}</span>
                                <FiArrowRight className="text-sm shrink-0"/>
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
                        <ParticleText text="< / >"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 lg:mt-12">
                    {STATS.map((item) => {
                        return (
                            <StatInfoCard
                                key={item.id}
                                count={item.count}
                                icon={item.icon}
                                label={item.label}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
