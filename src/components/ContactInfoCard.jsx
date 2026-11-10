import React, {useState} from "react";
import {FiCopy, FiCheck} from "react-icons/fi";
import {useTranslation} from "react-i18next";

export const ContactInfoCard = ({icon, text}) => {
    const {t} = useTranslation();
    const [copied, setCopied] = useState(false);

    const isEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const linkProps = isEmail(text)
        ? { href: `mailto:${text}` }
        : { href: text, target: "_blank", rel: "noopener noreferrer" };

    const handleCopy = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            // fallback silencioso caso clipboard não esteja disponível
        }
    };

    return (
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900/90 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 p-3 sm:px-4 sm:py-3.5 shadow-2xs transition-all">
            <a
                {...linkProps}
                className="flex items-center gap-3.5 min-w-0 flex-1 group"
            >
                <div className="w-10 h-10 shrink-0 text-indigo-600 dark:text-indigo-400 flex items-center justify-center bg-slate-100 dark:bg-zinc-800/90 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {icon}
                </div>

                <p className="font-mono text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                    {text}
                </p>
            </a>

            <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? t("contact.copied.label", "Copiado!") : t("contact.copy.label", "Copiar e-mail")}
                title={copied ? t("contact.copied.label", "Copiado!") : t("contact.copy.label", "Copiar e-mail")}
                className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors active:scale-[0.98]"
            >
                {copied ? (
                    <>
                        <FiCheck className="text-emerald-500 text-sm"/>
                        <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400">
                            {t("contact.copied.label", "Copiado!")}
                        </span>
                    </>
                ) : (
                    <>
                        <FiCopy className="text-sm"/>
                        <span className="hidden sm:inline">
                            {t("contact.copy.label", "Copiar e-mail")}
                        </span>
                    </>
                )}
            </button>
        </div>
    );
};
