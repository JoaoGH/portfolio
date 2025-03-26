import React, {useEffect, useState} from "react";
import {MENU_LINKS} from "../../utils/data.js";
import {Link} from "react-scroll";
import {FaCode} from "react-icons/fa";
import {LanguageSelector} from "../LanguageSelector/LanguageSelector.jsx";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="container mx-auto sticky top-5 z-10">
            <div
                className="flex items-center justify-between rounded-full bg-white/25 border border-purple-200
                            backdrop-blur-[10px] m-5 p-3 md:p-0">

                <Link
                    activeClass="active"
                    to="hero"
                    smooth
                    spy
                    offset={-100}
                    className="ml-6 h-10 text-black flex items-center justify-center rounded-full cursor-pointer">
                    <FaCode/>
                </Link>

                <div className="block md:hidden flex items-center gap-4">
                    <button
                        className="text-[#333] focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h18M4 12h16m-7 6h7"/>}
                        </svg>
                    </button>

                    <LanguageSelector mobile={true}/>
                </div>

                <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
                    {MENU_LINKS.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link
                                    activeClass="active"
                                    to={item.to}
                                    smooth
                                    spy
                                    offset={item.offset}
                                    className="menu-item">
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <LanguageSelector/>
            </div>
        </nav>
    )
}
