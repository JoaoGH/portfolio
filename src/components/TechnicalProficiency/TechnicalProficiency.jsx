import React, {useState} from "react";
import {SKILLS, SKILLS_TAB} from "../../utils/data.js";
import {Tabs} from "../Tabs/Tabs.jsx";
import {SkillCard} from "../SkillCard/SkillCard.jsx";
import {motion} from "framer-motion";

export const TechnicalProficiency = () => {
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
        <section id="skills" className="mt-20">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title bg-gradient-primary ">
                        Technical Proficiency
                    </h4>
                    <p className="text-sm text-center mt-4 leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mollis libero.
                        Pellentesque eu lorem nulla.
                        Phasellus maximus, nunc eget malesuada pharetra, sem felis consectetur urna, quis porta lorem nibh a dui.
                        Duis condimentum magna at malesuada pretium.
                        Nunc id neque metus.
                        Vivamus ut nisi pellentesque tortor rhoncus dapibus non in metus.
                        Etiam ut pellentesque ante.
                    </p>
                </div>

                <Tabs
                    tabList={SKILLS_TAB}
                    activeTab={activeTab}
                    onChange={handleTabValueChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
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
        </section>

    );
}
