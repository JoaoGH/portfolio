import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export const Tabs = ({tabList, activeTab, onChange}) => {
    const {t} = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const shoedTabs = 6;

    const mainTabs = tabList.slice(0, shoedTabs);
    const extraTabs = tabList.slice(shoedTabs);
    const hasExtras = extraTabs.length > 0;

    const getActiveStyles = (value) => {
        return activeTab === value
            ? "text-white bg-gradient-primary shadow-sm font-medium"
            : "text-gray-700 bg-gray-200 hover:bg-gray-200";
    };

    return (
        <div className="w-full space-y-2">
            {/* Mobile: grid duas colunas*/}
            <div className="flex flex-wrap gap-2">
                {mainTabs.map((item) => {
                    return (
                        <motion.button
                            key={item.id}
                            className={`px-4 py-2 text-sm rounded-lg transition-all ${getActiveStyles(item.value)}`}
                            onClick={() => onChange(item.value)}
                            whileHover={{scale: activeTab === item.value ? 1 : 1.05}}
                            whileTap={{scale: 0.98}}
                        >
                            {t(item.label + ".label")}
                        </motion.button>
                    );
                })}

                {hasExtras && (
                    <motion.button
                        className="px-3 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={() => setShowMore(!showMore)}
                        whileHover={{scale: 1.05}}
                    >
                        {showMore ? t('skill.button.showless.text') : `+${extraTabs.length}`}
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {showMore && hasExtras && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-wrap gap-2 pt-2">
                            {extraTabs.map((item) => {
                                return (
                                    <motion.button
                                        key={item.id}
                                        className={`px-4 py-2 text-sm rounded-lg transition-all ${getActiveStyles(item.value)}`}
                                        onClick={() => onChange(item.value)}
                                        whileHover={{scale: activeTab === item.value ? 1 : 1.05}}
                                        whileTap={{scale: 0.98}}
                                    >
                                        {t(item.label + ".label")}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
