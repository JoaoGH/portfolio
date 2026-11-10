import React, {useEffect, useState, useRef} from "react";
import {MENU_LINKS} from "../utils/data.js";
import {Link} from "react-scroll";
import {FaCode} from "react-icons/fa";
import {LanguageSelector} from "./LanguageSelector.jsx";
import {ThemeToggle} from "./ThemeToggle.jsx";
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
        <header
            className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-800/80 transition-colors"
            ref={navbarRef}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo e Menu */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Link
                            activeClass="active"
                            to="hero"
                            smooth
                            spy
                            offset={-100}
                            className="flex items-center gap-2 rounded-lg cursor-pointer py-1 focus:outline-none"
                            onClick={closeMenu}
                        >
                            <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-center">
                                <FaCode className="text-base text-indigo-600 dark:text-indigo-400"/>
                            </span>
                            <span className="font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-zinc-100 hidden sm:inline">
                                jghartmann.dev
                            </span>
                        </Link>

                        {/* Menu Desktop */}
                        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {MENU_LINKS.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            activeClass="active"
                                            to={item.to}
                                            smooth
                                            spy
                                            offset={item.offset}
                                            aria-label={t(item.label + ".hint")}
                                            className="menu-item px-3 py-2 transition-colors"
                                        >
                                            {t(item.label + ".label")}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Controles do lado direito */}
                    <div className="flex items-center gap-2">
                        {/* Seletor de Idioma e Tema Desktop */}
                        <div className="hidden md:flex items-center gap-1.5">
                            <ThemeToggle />
                            <LanguageSelector/>
                        </div>

                        {/* Botão Mobile */}
                        <div className="flex md:hidden items-center gap-1.5">
                            <ThemeToggle mobile={true} />
                            <LanguageSelector mobile={true}/>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                                aria-label={t("navbar.item.menu.hint")}
                                aria-expanded={isOpen}
                            >
                                <svg className="w-5 h-5"
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
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-white dark:bg-zinc-900 rounded-xl
                                shadow-lg border border-slate-200 dark:border-zinc-800 overflow-hidden`}>
                    <ul className="flex flex-col p-2 min-w-[180px]">
                        {MENU_LINKS.map((item) => (
                            <li key={item.id}>
                                <Link
                                    activeClass="active"
                                    to={item.to}
                                    smooth
                                    spy
                                    offset={item.offset}
                                    aria-label={t(item.label + ".hint")}
                                    className="menu-item block px-3.5 py-2.5 hover:bg-slate-100 dark:hover:bg-zinc-800/80 rounded-lg transition-colors"
                                    onClick={closeMenu}
                                >
                                    {t(item.label + ".label")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
