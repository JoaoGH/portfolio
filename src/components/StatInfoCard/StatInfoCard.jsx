import React from "react";
import {useTranslation} from "react-i18next";

export const StatInfoCard = ({count, label}) => {
    const { t } = useTranslation();

    return (
        <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[var(--color-tertiary)] to-[#ffffff]
                        rounded-[14px] p-5">
            <h4 className="text-4xl md:text-5xl font-medium text-secondary">{count}</h4>
            <p className="text-sm md:text[16px] font-normal text-black whitespace-pre-line">{t(label)}</p>

        </div>
    );
}
