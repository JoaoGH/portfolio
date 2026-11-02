import React from "react";
import {useTranslation} from "react-i18next";

export const StatInfoCard = ({count, label}) => {
    const { t } = useTranslation();

    return (
        <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-stats rounded-[14px] p-5 border border-transparent dark:border-purple-900/30">
            <h4 className="text-4xl md:text-5xl font-medium text-secondary dark:text-purple-300">
                {count}
            </h4>
            <p className="text-[10px] sm:text-sm md:text-[16px] font-normal text-black dark:text-gray-200 whitespace-pre-line">
                {t(label + ".label")}
            </p>
        </div>
    );
}
