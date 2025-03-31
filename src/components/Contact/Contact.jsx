import React from "react";
import {IoMdMail} from "react-icons/io";
import {ABOUT_ME} from "../../utils/data.js";
import {ContactInfoCard} from "../ContactInfoCard/ContactInfoCard.jsx";
import {Trans, useTranslation} from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title bg-gradient-primary">
                        {t("contact.title")}
                    </h4>
                    <p className="text-sm text-center md:text-justify mt-4">
                        <Trans i18nKey="contact.text" components={{ 1: <br /> }} />
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                    <div>
                        <ContactInfoCard
                            icon={<IoMdMail/>}
                            text={ABOUT_ME.email}/>
                    </div>

                    <div>
                        <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
                            {t("contact.form.title")}
                        </h5>
                        <form className="flex flex-col">
                            <input
                                type="text"
                                name="fullname"
                                placeholder={t("contact.form.name.label")}
                                aria-label={t("contact.form.name.hint")}
                                id=""
                                className="input-box"
                                autoComplete="off"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder={t("contact.form.email.label")}
                                aria-label={t("contact.form.email.hint")}
                                id=""
                                className="input-box"
                                autoComplete="off"
                            />
                            <textarea
                                name="message"
                                placeholder={t("contact.form.message.label")}
                                aria-label={t("contact.form.message.hint")}
                                id=""
                                rows={4}
                                className="input-box"
                                autoComplete="off"
                            />

                            <button
                                className="action-btn btn-scale-anim bg-gradient-primary"
                                aria-label={t("contact.form.submit.hint")}
                            >
                                {t("contact.form.submit.hint")}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
