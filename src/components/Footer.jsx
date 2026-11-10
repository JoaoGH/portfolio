import React from "react";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="bg-white dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400 py-6 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
                {/* Direitos e créditos à esquerda */}
                <div>
                    <p>© {new Date().getFullYear() + " " + t("footer.copyright")}</p>
                </div>

                {/* Info sobre tecnologias e versão à direita */}
                <div className="flex items-center gap-3">
                    <p>{t("footer.using")}</p>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 font-medium">
                        v{import.meta.env.PACKAGE_VERSION}
                    </span>
                </div>
            </div>
        </footer>
    );
};
