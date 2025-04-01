import React from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export const Tabs = ({tabList, activeTab, onChange}) => {
    const { t } = useTranslation();
    const getActiveStyles = (value) => {
        return activeTab === value
            ? "text-white bg-gradient-primary"
            : "text-black bg-transparent";
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="bg-[var(--color-accent)] rounded-full flex">
                {tabList.map((item) => {
                    return (
                        <motion.button
                            key={item.id}
                            className={`text-xs md:text-[15px] ${getActiveStyles(item.value)} rounded-full px-4 md:px-10 
                                        py-[6px] md:py-3`}
                            onClick={() => onChange(item.value)}
                            initial={{opacity: 0.8, scale: 1}}
                            animate={{
                                opacity: activeTab === item.value ? 1 : 0.8,
                                scale: activeTab === item.value ? 1.05 : 1}}
                            transition={{duration: 0.2}}
                        >
                            {t(item.label + ".label")}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
