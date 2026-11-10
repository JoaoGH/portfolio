import React from "react";
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

export const SkillCard = ({icon, name, description, progress}) => {
    const rating = (progress / 20);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="h-full flex flex-col bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 rounded-xl p-5 shadow-2xs transition-colors">
            <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 dark:bg-zinc-800/90 rounded-lg">
                    {icon}
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                    <h3 className="font-mono text-sm sm:text-[15px] text-slate-900 dark:text-zinc-100 font-semibold tracking-tight truncate">
                        {name}
                    </h3>
                    <div
                        className="flex items-center gap-1 shrink-0"
                        aria-label={`${rating} out of 5 stars`}
                    >
                        {/* Estrelas cheias */}
                        {[...Array(fullStars)].map((_, i) => (
                            <FaStar key={`full-${i}`} className="text-indigo-500 dark:text-indigo-400 text-xs"/>
                        ))}

                        {/* Meia estrela */}
                        {hasHalfStar && (
                            <FaStarHalfAlt className="text-indigo-500 dark:text-indigo-400 text-xs"/>
                        )}

                        {/* Estrelas vazias */}
                        {[...Array(emptyStars)].map((_, i) => (
                            <FaRegStar key={`empty-${i}`} className="text-slate-300 dark:text-zinc-700 text-xs"/>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 pt-3.5 border-t border-slate-100 dark:border-zinc-800/70 text-[13.5px] sm:text-sm text-slate-600 dark:text-zinc-400 text-left leading-relaxed flex-1">
                {description}
            </p>
        </div>
    );
}
