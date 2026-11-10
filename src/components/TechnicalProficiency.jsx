import React, {useState} from "react";
import {SKILLS, SKILLS_TAB} from "../utils/data.js";
import {Tabs} from "./Tabs.jsx";
import {SkillCard} from "./SkillCard.jsx";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export const TechnicalProficiency = () => {
    const {t} = useTranslation();
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState("all");

    const handleTabValueChange = (value) => {
        if (value === "all") {
            setTabData(SKILLS);
            setActiveTab("all");
            return;
        }

        const updatedList = SKILLS.filter((skill) => skill.type === value);
        setTabData(updatedList);
        setActiveTab(value);
    };

    return (
        <section id="skills" className="border-b border-slate-200/60 dark:border-zinc-900">
            <div className="section-container">
                <div className="max-w-3xl">
                    <h2 className="section-title">
                        {t("skills.title")}
                    </h2>

                    <p className="text-sm sm:text-base text-left leading-relaxed whitespace-pre-line text-slate-600 dark:text-zinc-400 mt-3">
                        {t("skills.text")}
                    </p>
                </div>

                <div className="mt-7 md:mt-8">
                    <Tabs
                        tabList={SKILLS_TAB}
                        activeTab={activeTab}
                        onChange={handleTabValueChange}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 items-stretch">
                        {tabData.map((skill, index) => {
                            return (
                                <motion.div
                                    key={skill.id}
                                    className="h-full"
                                    initial={{opacity: 0, y: 14}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: Math.min(index * 0.04, 0.3)}}
                                >
                                    <SkillCard
                                        icon={<skill.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400"/>}
                                        name={skill.name}
                                        description={t(skill.description)}
                                        progress={skill.progress}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
