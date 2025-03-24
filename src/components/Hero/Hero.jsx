import React from "react";
import {STATS} from "../../utils/data.js";
import {StatInfoCard} from "../StatInfoCard/StatInfoCard.jsx";

export const Hero = () => {
    const PROFILE_PIC = "https://media.licdn.com/dms/image/v2/C4D03AQFcIIPHoaB9Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662072317810?e=1748476800&v=beta&t=wqj64lTJO0oWFSxyea24sxgLwhxKF6nxx5vx1f06UXc";

    return (
        <section id="hero" className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <h3 className="text-xl lg:text-2xl font-medium text-black">Hi, my name is João</h3>
                    <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px]
                                    mt-3 bg-gradient-primary bg-clip-text text-transparent">
                        Fullstack Developer</h1>
                    <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
                        Lorem ipsum
                    </p>

                    <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                        <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">View my work</button>
                        <button className="flex-1 md:flex-none action-btn btn-scale-anim bg-gradient-primary">Download Resume</button>
                    </div>
                </div>

                <div className="w-[300px] md:w-[370px] h-[310px] md:h-[380px] bg-purple-600/75 rounded-3xl relative order-1
                                lg:order-2">
                    <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />
                </div>
            </div>

            <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((item) => {
                    return (
                        <StatInfoCard key={item.id} count={item.count} label={item.label}/>
                    );
                })}
            </div>
        </section>
    )
}
