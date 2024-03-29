'use client'

// Modules
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Styles
import '../sass/components/Icon.scss';

export default function Icon({ imagePath, label, doubleClick, customClass }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSelected && !event.target.closest(`.${customClass}`)) {
                setIsSelected(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSelected]);

    return (
        <div
            className={`desktop--icons__single ${isSelected ? 'selected' : ''}`}
            onClick={handleClick}
            onDoubleClick={doubleClick}
        >
            <Image
                src={imagePath}
                alt={label}
                width={50}
                height={50}
            />
            <span>{label}</span>
        </div>
    )
}