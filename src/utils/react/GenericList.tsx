import React from "react";

interface IItem {
    id: string;
    text: string;
    onClick: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    iconImg?: any;
}

interface IGenericListProps {
    list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'div', text, onClick, className, iconImg, id, href }) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {iconImg}
                    <span>{text}</span>
                </As>
            ))}

        </>
    )
}
