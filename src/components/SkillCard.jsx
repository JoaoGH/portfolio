import React from "react";
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

export const SkillCard = ({icon, name, description, progress}) => {
    const rating = (progress / 20);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-skill rounded-[7px]">
                    {icon}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="text-[13px] text-black font-medium">{name}</p>
                        <div className="flex items-center gap-1">
                            {/* Estrelas cheias */}
                            {[...Array(fullStars)].map((_, i) => (
                                <FaStar key={`full-${i}`} className="text-[var(--color-secondary)] text-xs"/>
                            ))}

                            {/* Meia estrela */}
                            {hasHalfStar && (
                                <FaStarHalfAlt className="text-[var(--color-secondary)] text-xs"/>
                            )}

                            {/* Estrelas vazias */}
                            {[...Array(emptyStars)].map((_, i) => (
                                <FaRegStar key={`empty-${i}`} className="text-[var(--color-secondary)] text-xs"/>
                            ))}
                        </div>
                    </div>
                    <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
                        <div className="bg-primary h-[5px] rounded-md w-full"></div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-600 text-justify leading-5 mt-2">{description}</p>
        </div>
    );
}
