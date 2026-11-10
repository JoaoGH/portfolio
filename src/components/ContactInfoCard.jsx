import React from "react";

export const ContactInfoCard = ({icon, text}) => {
    const isEmail = (text) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    }

    // Determina o href e target baseado no tipo de conteúdo
    const linkProps = isEmail(text)
        ? { href: `mailto:${text}` }
        : { href: text, target: "_blank", rel: "noopener noreferrer" };

    return (
        <a
            {...linkProps}
            className="flex items-center gap-4 bg-white dark:bg-zinc-900/90 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 px-4 py-3.5 shadow-2xs transition-all group"
        >
            <div className="w-10 h-10 shrink-0 text-indigo-600 dark:text-indigo-400 flex items-center justify-center bg-slate-100 dark:bg-zinc-800/90 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {icon}
            </div>

            <p className="font-mono text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                {text}
            </p>
        </a>
    );
}
