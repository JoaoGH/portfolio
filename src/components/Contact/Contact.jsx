import React from "react";
import {IoMdMail} from "react-icons/io";
import {ABOUT_ME} from "../../utils/data.js";
import {ContactInfoCard} from "../ContactInfoCard/ContactInfoCard.jsx";
import {useTranslation} from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title bg-gradient-primary">
                        {t("default.item.5")}
                    </h4>
                    <p className="text-sm text-center md:text-justify mt-4">
                        {t("default.item.18")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                    <div>
                        <ContactInfoCard icon={<IoMdMail/>} text={ABOUT_ME.email}/>
                    </div>

                    <div>
                        <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
                            Contact Form
                        </h5>
                        <form className="flex flex-col">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                id=""
                                className="input-box"
                                autoComplete="off"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                id=""
                                className="input-box"
                                autoComplete="off"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                id=""
                                rows={4}
                                className="input-box"
                                autoComplete="off"
                            />

                            <button className="action-btn btn-scale-anim bg-gradient-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
