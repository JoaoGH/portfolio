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
        <div className="flex items-center gap-5 bg-purple-50 dark:bg-gray-900 rounded border border-purple-100 dark:border-purple-900/40 px-4 py-3 mb-5 transition-colors">
            <div className="w-10 h-10 text-white flex items-center justify-center bg-gradient-primary rounded-lg">
                {icon}
            </div>

            <a {...linkProps}>
                <p className="text-secondary dark:text-purple-300 text-xs md:text-sm">
                    {text}
                </p>
            </a>
        </div>
    );
}
