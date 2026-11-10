import React from "react";
import {ABOUT_ME} from "../utils/data.js";
import {Trans, useTranslation} from "react-i18next";

export const About = () => {
    const {t} = useTranslation();

    return (
        <section id="about" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <h2 className="section-title">
                    {t("about.title")}
                </h2>

                <div className="mt-4 md:mt-5 max-w-4xl">
                    <p className="text-sm sm:text-base text-left leading-relaxed whitespace-pre-line text-slate-600 dark:text-zinc-300">
                        <Trans i18nKey="about.text" components={{1: <br/>}}/>
                    </p>

                    <div className="flex flex-wrap gap-3 mt-7">
                        {ABOUT_ME.links.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    className="cursor-pointer group relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 shadow-2xs transition-all duration-200 hover:-translate-y-0.5"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                >
                                    <item.icon className="text-xl text-slate-700 dark:text-zinc-300 transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"/>
                                    {item.flag && (
                                        <span className="absolute -top-1.5 -right-1.5 px-1 py-0.2 rounded bg-slate-200 dark:bg-zinc-800 font-mono text-[9px] font-semibold text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-zinc-700">
                                            {item.flag}
                                        </span>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
