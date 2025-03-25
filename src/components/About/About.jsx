import React from "react";
import {ABOUT_ME} from "../../utils/data.js";

export const About = () => {
    const PROFILE_PIC = "https://media.licdn.com/dms/image/v2/C4D03AQFcIIPHoaB9Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662072317810?e=1748476800&v=beta&t=wqj64lTJO0oWFSxyea24sxgLwhxKF6nxx5vx1f06UXc";
    return (
        <section id="about" className="container mx-auto px-8 py-16">
            <h4 className="block lg:hidden w-[200px] section-title bg-gradient-primary text-left mb-16">
                About Me
            </h4>

            <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
                <div className="w-[300px] md:w-[370px] h-[310px] md:h-[380px] bg-purple-600/75 rounded-3xl mx-auto">
                    <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic"/>
                </div>
                <div className="flex-1">
                    <h4 className="hidden lg:block w-[200px] section-title bg-gradient-primary text-left">
                        About Me
                    </h4>
                    <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
                        {ABOUT_ME.sumary}
                    </p>

                    <div className="flex gap-4 mt-6">
                        {ABOUT_ME.links.map((item) => {
                            return (
                                <a key={item.label} className="cursor-pointer group">
                                    <item.icon className="text-2xl text-secondary transition-transform duration-300
                                            group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px]
                                            group-hover:text-primary" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
