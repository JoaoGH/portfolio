import React from "react";
import {IoMdMail} from "react-icons/io";
import {ABOUT_ME} from "../utils/data.js";
import {ContactInfoCard} from "./ContactInfoCard.jsx";
import {Trans, useTranslation} from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="section-container">
                <div className="max-w-3xl">
                    <h2 className="section-title">
                        {t("contact.title")}
                    </h2>

                    <p className="text-sm sm:text-base text-left leading-relaxed whitespace-pre-line text-slate-600 dark:text-zinc-300 mt-3">
                        <Trans i18nKey="contact.text" components={{1: <br/>}}/>
                    </p>

                    <div className="mt-7 max-w-xl">
                        <ContactInfoCard
                            icon={<IoMdMail className="text-lg"/>}
                            text={ABOUT_ME.email}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
