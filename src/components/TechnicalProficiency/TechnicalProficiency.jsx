import React, {useState} from "react";
import {SKILLS, SKILLS_TAB} from "../../utils/data.js";
import {Tabs} from "../Tabs/Tabs.jsx";
import {SkillCard} from "../SkillCard/SkillCard.jsx";
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
        <section id="skills" className="bg-background">
            <div className="container mx-auto px-15 py-12 md:py-16">
                <h4 className="section-title bg-gradient-primary text-left">
                    {t("skills.title")}
                </h4>

                <div className="mt-4 md:mt-6">
                    <p className="text-sm text-justify leading-6 whitespace-pre-line">
                        {t("skills.text")}
                    </p>

                    <div className="mt-6 md:mt-8">
                        <Tabs
                            tabList={SKILLS_TAB}
                            activeTab={activeTab}
                            onChange={handleTabValueChange}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            {tabData.map((skill, index) => {
                                return (
                                    <motion.div
                                        key={skill.id}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.4, delay: index * 0.1}}
                                    >
                                        <SkillCard
                                            icon={<skill.icon className="w-6 h-6 text-primary"/>}
                                            name={skill.name}
                                            description={skill.description}
                                            progress={skill.progress}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
