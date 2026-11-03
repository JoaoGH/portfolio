import React from "react";
import {useTranslation} from "react-i18next";

export const StatInfoCard = ({count, label, icon: Icon}) => {
    const { t } = useTranslation();

    return (
        <div className="flex-1 flex items-center gap-3 md:gap-5 bg-gradient-stats rounded-[14px] p-5 dark:border dark:border-purple-900/30">
            {Icon ? (
                <div className="text-3xl sm:text-4xl md:text-5xl text-secondary dark:text-purple-300 shrink-0">
                    <Icon aria-hidden="true" />
                </div>
            ) : count ? (
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-secondary dark:text-purple-300 shrink-0">
                    {count}
                </h4>
            ) : null}
            <p className="text-[10px] sm:text-sm md:text-[16px] font-normal text-black dark:text-gray-200 whitespace-pre-line">
                {t(label + ".label")}
            </p>
        </div>
    );
}
