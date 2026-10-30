import React from "react";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="bg-[#0f172a] text-xs text-slate-400 p-5 border-t border-slate-800">
            <div className="container mx-auto px-15 flex flex-col md:flex-row items-center justify-between text-sm">
                {/* Direitos e créditos à esquerda */}
                <div className="mb-4 md:mb-0">
                    <p>© {new Date().getFullYear() + " " + t("footer.copyright")}</p>
                </div>

                {/* Info sobre tecnologias e versão à direita */}
                <div className="flex items-center gap-3">
                    <p>{t("footer.using")}</p>
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[10px] border border-slate-700">
                        v{import.meta.env.PACKAGE_VERSION}
                    </span>
                </div>
            </div>
        </footer>
    );
};
