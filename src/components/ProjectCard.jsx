import React from "react";
import {useTranslation} from "react-i18next";

export const ProjectCard = ({imgUrl, title, description, tags, onClick}) => {
    const { t } = useTranslation();

    return (
        <article
            className="w-full h-full flex flex-col bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group"
            onClick={onClick}
        >
            <div className="relative overflow-hidden bg-slate-100 dark:bg-zinc-800">
                <img
                    src={imgUrl}
                    alt={`Screenshot of the project ${t(title)}`}
                    className="w-full h-56 sm:h-60 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-mono text-base font-semibold tracking-tight line-clamp-2 text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {t(title)}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] leading-relaxed line-clamp-2 text-slate-600 dark:text-zinc-400 mt-2 text-left">
                        {t(description)}
                    </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/70">
                    {tags.map((tag, id) => {
                        return (
                            <span
                                key={id}
                                className="font-mono text-[11px] font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/90 border border-slate-200/70 dark:border-zinc-700/60 px-2.5 py-0.5 rounded-md"
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
