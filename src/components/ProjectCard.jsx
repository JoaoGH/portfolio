import React from "react";
import {useTranslation} from "react-i18next";

export const ProjectCard = ({imgUrl, title, description, tags, onClick}) => {
    const { t } = useTranslation();

    return (
        <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2" onClick={onClick}>
            <img src={imgUrl} alt="Project Image" className="w-full h-72 md:h-80 object-cover"/>
            <div className="px-4 py-5">
                <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                    {t(title)}
                </h3>
                <h4 className="text-xs line-clamp-2 overflow-hidden text-ellipsis">
                    {t(description)}
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, id) => {
                        return (
                            <span
                                key={id}
                                className="text-xs text-secondary bg-purple-100 px-3 py-1 rounded"
                            >
                                {tags}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
