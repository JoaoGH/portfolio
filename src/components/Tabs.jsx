import React, {useState} from "react";
// eslint-disable-next-line no-unused-vars
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
            ? "text-white bg-indigo-600 dark:bg-indigo-500 shadow-xs font-medium"
            : "text-slate-600 dark:text-zinc-400 bg-transparent hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-zinc-800/70";
    };

    return (
        <div className="w-full space-y-2">
            {/* Barra segmentada horizontal: desliza suavemente no mobile sem quebrar em várias linhas */}
            <div
                className="flex items-center gap-1.5 overflow-x-auto sm:flex-wrap p-1.5 rounded-xl bg-slate-200/60 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 w-full sm:w-fit"
                role="tablist"
            >
                {mainTabs.map((item) => {
                    const isActive = activeTab === item.value;
                    return (
                        <motion.button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={`shrink-0 px-3.5 py-2 font-mono text-xs sm:text-[13px] rounded-lg transition-all cursor-pointer ${getActiveStyles(item.value)}`}
                            onClick={() => onChange(item.value)}
                            whileTap={{scale: 0.98}}
                        >
                            {t(item.label + ".label")}
                        </motion.button>
                    );
                })}

                {hasExtras && (
                    <motion.button
                        type="button"
                        className="shrink-0 px-3 py-2 font-mono text-xs sm:text-[13px] bg-slate-200/80 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 rounded-lg hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-pointer"
                        onClick={() => setShowMore(!showMore)}
                        whileTap={{scale: 0.98}}
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
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {extraTabs.map((item) => {
                                return (
                                    <motion.button
                                        key={item.id}
                                        type="button"
                                        className={`px-3.5 py-2 font-mono text-xs sm:text-[13px] rounded-lg transition-all cursor-pointer ${getActiveStyles(item.value)}`}
                                        onClick={() => onChange(item.value)}
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
