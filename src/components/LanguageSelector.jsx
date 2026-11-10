import React, {useEffect, useState} from "react";
import {FaChevronDown, FaGlobe} from "react-icons/fa";
import {SUPPORTED_LANGUAGES} from "../utils/data.js";
import {useTranslation} from "react-i18next";

export const LanguageSelector = ({mobile = false}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n} = useTranslation();

    // Obter idioma atual
    const currentLanguage = SUPPORTED_LANGUAGES.find(
        lang => lang.code === i18n.language
    ) || SUPPORTED_LANGUAGES[0];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const closeDropdown = () => {
        setIsOpen(false);
    }

    const changeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
        localStorage.setItem('userLanguage', languageCode);
        closeDropdown();
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.language-selector')) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, [isOpen]);

    return (
        <div className={`language-selector relative ${mobile ? "md:hidden" : "hidden md:block"}`}>
            <button
                onClick={toggleDropdown}
                aria-label={t("navbar.item.language.hint")}
                className={`
                    flex items-center gap-1.5 px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${mobile ? "hover:bg-white/20" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}
                    font-mono text-xs font-medium text-slate-700 dark:text-zinc-200`}
            >
                <FaGlobe className="w-4 h-4 text-slate-700 dark:text-zinc-200"/>
                {!mobile && (
                    <>
                        <span>{currentLanguage.code.toUpperCase()}</span>
                        <FaChevronDown className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}/>
                    </>
                )}
            </button>

            {isOpen && (
                <div className={
                    `absolute right-0 mt-2 w-44 bg-white dark:bg-zinc-900 rounded-xl shadow-lg z-50 
                        border border-slate-200 dark:border-zinc-800 divide-y divide-slate-100 dark:divide-zinc-800 overflow-hidden
                        ${mobile ? "origin-top-right" : "origin-top"}
                        `}
                >
                    {SUPPORTED_LANGUAGES.map((lang) => {
                        return (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={
                                    `flex items-center w-full px-3.5 py-2.5 text-left text-xs font-medium cursor-pointer
                                     hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-colors 
                                     ${i18n.language === lang.code ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-zinc-200"}`}
                            >
                                <span className="mr-2 font-mono uppercase text-[11px] opacity-75">{lang.country_code}</span>
                                <span>{lang.name}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
