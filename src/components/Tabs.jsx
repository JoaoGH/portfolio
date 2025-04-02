import React from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export const Tabs = ({tabList, activeTab, onChange}) => {
    const { t } = useTranslation();

    const getActiveStyles = (value) => {
        return activeTab === value
            ? "text-white bg-gradient-primary shadow-sm font-medium"
            : "text-gray-700 bg-gray-200 hover:bg-gray-200";
    };

    return (
        <div className="w-full">
            {/* Mobile: grid duas colunas*/}
            <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-2">
                {tabList.map((item) => (
                    <motion.button
                        key={item.id}
                        className={`w-full text-xs sm:text-sm px-3 py-2 rounded-lg transition-all duration-200
                                    ${getActiveStyles(item.value)}`}
                        onClick={() => onChange(item.value)}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t(item.label + ".label")}
                    </motion.button>
                ))}
            </div>

            {/* Desktop: Tabs com quebra de linha se necessário */}
            <div className="hidden md:flex flex-wrap gap-2 justify-center">
                {tabList.map((item) => {
                    return (
                        <motion.button
                            key={item.id}
                            className={`flex-shrink-0 text-sm px-4 py-2 rounded-lg transition-all duration-200
                                        ${getActiveStyles(item.value)}`}
                            onClick={() => onChange(item.value)}
                            whileHover={{scale: 1.03}}
                        >
                            {t(item.label + ".label")}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};