import React from "react";
import {ABOUT_ME} from "../utils/data.js";
import {Trans, useTranslation} from "react-i18next";

export const About = () => {
    const {t} = useTranslation();

    return (
        <section id="about" className="bg-background">
            <div className="container mx-auto px-15 py-12 md:py-16">
                <h4 className="section-title bg-gradient-primary text-left">
                    {t("about.title")}
                </h4>

                <div className="mt-4 md:mt-6">
                    <p className="text-sm text-justify leading-6 whitespace-pre-line">
                        <Trans i18nKey="about.text" components={{1: <br/>}}/>
                    </p>

                    <div className="flex gap-4 mt-6 md:mt-8">
                        <div className="flex gap-4 mt-6">
                            {ABOUT_ME.links.map((item) => {
                                return (
                                    <a
                                        key={item.id}
                                        className="cursor-pointer group"
                                        href={item.link}
                                        target="_blank"
                                        aria-label={item.label}
                                    >
                                        <item.icon className="text-2xl text-secondary transition-transform duration-300
                                            group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px]
                                            group-hover:text-primary"/>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
