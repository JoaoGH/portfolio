import React from "react";
import {ABOUT_ME} from "../utils/data.js";
import {Trans, useTranslation} from "react-i18next";
import {FiArrowUpRight} from "react-icons/fi";

export const About = () => {
    const {t} = useTranslation();

    return (
        <section id="about" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Coluna esquerda: Título e links diretos rotulados */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <h2 className="section-title">
                            {t("about.title")}
                        </h2>

                        <div className="mt-5 p-5 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 shadow-2xs">
                            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
                                Links & Perfis
                            </p>
                            <div className="flex flex-col gap-2">
                                {ABOUT_ME.links.map((item) => {
                                    return (
                                        <a
                                            key={item.id}
                                            className="cursor-pointer group flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-zinc-800/60 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/40 border border-slate-200/70 dark:border-zinc-800 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.label}
                                        >
                                            <span className="flex items-center gap-3 min-w-0">
                                                <item.icon className="text-base text-slate-600 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0"/>
                                                <span className="font-mono text-xs font-medium text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                                                    {item.label}
                                                </span>
                                            </span>
                                            <FiArrowUpRight className="text-sm text-slate-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"/>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita: Narrativa de carreira */}
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xs">
                            <p className="text-sm sm:text-[15px] text-left leading-[1.8] whitespace-pre-line text-slate-600 dark:text-zinc-300">
                                <Trans i18nKey="about.text" components={{1: <br/>}}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
