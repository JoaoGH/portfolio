import React from "react";

export const Tabs = ({tabList, activeTab, onChange}) => {
    const getActiveStyles = (value) => {
        return activeTab === value ? "text-white bg-gradient-primary" : "text-black bg-transparent";
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="bg-[var(--color-tertiary)] rounded-full flex">
                {tabList.map((item) => {
                    return (
                        <button
                            key={item.id}
                            className={`text-xs md:text-[15px] ${getActiveStyles(item.value)} rounded-full px-4 md:px-10 
                                        py-[6px] md:py-3`}
                            onClick={() => onChange(item.value)}
                        >{item.label}</button>
                    );
                })}
            </div>
        </div>
    );
}
