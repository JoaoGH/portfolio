import React from "react";
import {useTranslation} from "react-i18next";

export const StatInfoCard = ({count, label, icon: Icon}) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 rounded-xl p-3.5 sm:p-4 md:p-5 h-full shadow-2xs transition-colors">
            {Icon ? (
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-100 dark:bg-zinc-800/90 flex items-center justify-center text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Icon aria-hidden="true" />
                </div>
            ) : count ? (
                <div className="h-10 sm:h-11 px-2.5 rounded-lg bg-slate-100 dark:bg-zinc-800/90 flex items-center justify-center shrink-0">
                    <h4 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 tabular-nums">
                        {count}
                    </h4>
                </div>
            ) : null}
            <p className="min-w-0 w-full text-xs sm:text-[13.5px] font-medium leading-snug text-slate-700 dark:text-zinc-200 break-words">
                {t(label + ".label")}
            </p>
        </div>
    );
}
