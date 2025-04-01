import React from "react";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="bg-purple-100 text-xs text-secondary text-center p-5">

            {/* Direitos e créditos */}
            <div className="text-sm">
                <p>© {new Date().getFullYear() + " " + t("footer.copyright")}</p>
                <p className="mt-1">{t("footer.using")}</p>
            </div>
        </footer>
    );
};
