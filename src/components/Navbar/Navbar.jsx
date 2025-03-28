import React, {useEffect, useState, useRef} from "react";
import {MENU_LINKS} from "../../utils/data.js";
import {Link} from "react-scroll";
import {FaCode} from "react-icons/fa";
import {LanguageSelector} from "../LanguageSelector/LanguageSelector.jsx";
import {useTranslation} from "react-i18next";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    // Fechar menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/25 backdrop-blur-md border-b border-purple-200/50"
             ref={navbarRef}>
            <div className="container mx-auto px-4">
                <div className="flex items-center h-16">
                    {/* Logo e Menu */}
                    <div className="flex items-center flex-1">
                        {/* Logo */}
                        <Link
                            activeClass="active"
                            to="hero"
                            smooth
                            spy
                            offset={-100}
                            className="flex items-center justify-center rounded-full cursor-pointer mr-4"
                            onClick={closeMenu}
                        >
                            <FaCode className="text-xl text-purple-600"/>
                        </Link>

                        {/* Menu Desktop */}
                        <ul className="hidden md:flex items-center space-x-4">
                            {MENU_LINKS.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            activeClass="active"
                                            to={item.to}
                                            smooth
                                            spy
                                            offset={item.offset}
                                            className="menu-item px-3 py-2 hover:text-purple-600 transition-colors"
                                        >
                                            {t(item.label)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Controles do lado direito */}
                    <div className="flex items-center gap-2">
                        {/* Seletor de Idioma Desktop */}
                        <div className="hidden md:block">
                            <LanguageSelector/>
                        </div>

                        {/* Botão Mobile */}
                        <div className="flex md:hidden items-center gap-3">
                            <LanguageSelector mobile={true}/>
                            <button
                                onClick={toggleMenu}
                                className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                aria-label="Menu"
                                aria-expanded={isOpen}
                            >
                                <svg className="w-6 h-6"
                                     fill="none"
                                     stroke="currentColor"
                                     viewBox="0 0 24 24"
                                >
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h18M4 12h16m-7 6h7"/>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-2 bg-white rounded-lg ml-12 min-w-3xs
                                shadow-lg border border-purple-200`}>
                    <ul className="flex flex-col p-2 w-auto min-w-[160px]">
                        {MENU_LINKS.map((item) => (
                            <li key={item.id}>
                                <Link
                                    activeClass="active"
                                    to={item.to}
                                    smooth
                                    spy
                                    offset={item.offset}
                                    className="menu-item block px-3 py-2 hover:bg-purple-50 rounded-md transition-colors"
                                    onClick={closeMenu}
                                >
                                    {t(item.label)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
