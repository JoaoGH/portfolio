import React, {useEffect, useState} from "react";
import {MENU_LINKS} from "../../utils/data.js";
import {Link} from "react-scroll";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/640px-Copyleft.svg.png";

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

                <img className="h-7 ml-6 -mb-1"
                     src={LOGO}
                     alt="Logo"/>

                <button className="block md:hidden text-[#333] mr-6 focus:outline-none" onClick={toggleMenu}>
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

                <button className="hidden md:block h-12 text-[15px] font-medium text-white rounded-full px-9
                                    bg-gradient-primary transition-transform duratio-300 ease-in-out hover:scale-105">
                    Contact Me</button>
            </div>
        </nav>
    )
}
