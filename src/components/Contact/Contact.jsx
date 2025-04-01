import React from "react";
import {IoMdMail} from "react-icons/io";
import {ABOUT_ME} from "../../utils/data.js";
import {ContactInfoCard} from "../ContactInfoCard/ContactInfoCard.jsx";
import {Trans, useTranslation} from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-background">
            <div className="container mx-auto px-15 py-12 md:py-16">
                <h4 className="section-title bg-gradient-primary text-left">
                    {t("contact.title")}
                </h4>

                <div className="mt-4 md:mt-6">
                    <p className="text-sm text-justify leading-6 whitespace-pre-line">
                        <Trans i18nKey="contact.text" components={{1: <br/>}}/>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                        <ContactInfoCard
                            icon={<IoMdMail/>}
                            text={ABOUT_ME.email}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
