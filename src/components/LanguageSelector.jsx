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
                    flex items-center gap-2 p-2 rounded-full transition-colors ${mobile ? "hover:bg-white/20" : ""}
                    md:text-[14px] font-medium transition-transform duration-300 ease-in-out hover:scale-105`}>
                <FaGlobe className="mr-2 text-gray-700"/>
                {!mobile && (
                    <>
                        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                        <FaChevronDown className={`ml-2 text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}/>
                    </>
                )}
            </button>

            {isOpen && (
                <div className={
                    `absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 
                        border border-gray-200 divide-y divide-gray-100
                        ${mobile ? "origin-top-right" : "origin-top"}
                        `}
                >
                    {SUPPORTED_LANGUAGES.map((lang) => {
                        return (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={
                                    `flex items-center w-full px-4 py-2 text-left
                                     hover:bg-gray-50 transition-colors 
                                     ${i18n.language === lang.code ? "bg-purple-50 text-purple-600" : "text-gray-700"}`}
                            >
                                <span className="mr-2 text-lg">{lang.country_code}</span>
                                <span>{lang.name}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
