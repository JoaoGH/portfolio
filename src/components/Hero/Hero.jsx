import React from "react";
import {STATS} from "../../utils/data.js";
import {StatInfoCard} from "../StatInfoCard/StatInfoCard.jsx";
import {useTranslation} from "react-i18next";

export const Hero = () => {
    const { t, i18n } = useTranslation();
    const PROFILE_PIC = "https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

    const handleDownload = () => {
        const link = document.createElement('a');

        const english = i18n.language === 'en';
        const fileUrl = `/docs/6-CV${english ? "-English" : ""}.pdf`;
        link.href = fileUrl;
        link.download = "curriculum_vitae_JGHartrmann.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="hero" className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <h3 className="text-xl lg:text-2xl font-medium text-black">{t("hero.item.1.label")}</h3>
                    <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px]
                                    mt-3 bg-gradient-primary bg-clip-text text-transparent">
                        {t("hero.title")}</h1>
                    <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
                        {t("hero.item.2.label")}
                    </p>

                    <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                        <button
                            onClick={handleDownload}
                            aria-label={t("hero.button.2.hint")}
                            className="flex-1 md:flex-none action-btn btn-scale-anim bg-gradient-primary">
                            {t("hero.button.2.text")}
                        </button>
                    </div>
                </div>

                <div className="w-[300px] md:w-[370px] h-[310px] md:h-[380px] bg-purple-600/75 rounded-3xl relative order-1
                                lg:order-2">
                    <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />
                </div>
            </div>

            <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((item) => {
                    return (
                        <StatInfoCard key={item.id} count={item.count} label={item.label}/>
                    );
                })}
            </div>
        </section>
    )
}
