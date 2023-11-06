'use client';

// Modules
import { useState, useEffect } from 'react';
// Components
import Image from 'next/image';
import Draggable from 'react-draggable';
// Styles
import '../sass/components/Window.scss';


export default function Window({ imagePath, label, customClass, onClose }) {

    // State of full-screen window
    const [isFullScreen, setIsFullScreen] = useState(false);

    // State of top window
    const [isPrimary, setIsPrimary] = useState(true);

    // Make primary
    const handleWindowClick = () => {
        setIsPrimary(true);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isPrimary && !event.target.closest(`.${customClass}`)) {
                setIsPrimary(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    // Make full-screen
    const handleMaximizeClick = () => {
        const windowElement = document.querySelector(`.primary`);
        const maximizeButton = document.querySelector(`.${customClass} .header__button--maximize`);
    
        if (windowElement && maximizeButton) {
            if (isFullScreen) {
                // If not full-screen make default classes
                windowElement.classList.remove('full-screen');
                maximizeButton.classList.remove('header__button--maximized');
                setIsFullScreen(false);
            } else {
                // If full-screen add classes
                windowElement.classList.add('full-screen');
                maximizeButton.classList.add('header__button--maximized');
                setIsFullScreen(true);
            }
        }
    };


    return (
        <Draggable
            defaultPosition={{ x: 80, y: 0 }}
            handle='header'
            cancel='.window--header__buttons'
            onDrag={handleWindowClick}
        >
            <div 
                className={`window ${customClass} ${isPrimary ? 'primary' : 'secondary'}`} 
                onClick={handleWindowClick}
            >
                <div className='window--header-bg'></div>
                <header className='window--header'>
                    <Image
                        src={imagePath}
                        alt={label}
                        width={20}
                        height={20}
                        className='window--header__img'
                    />
                    <span className='window--header__label'>{label}</span>
                    <div className='window--header__buttons'>
                        <button className='header__button header__button--blue header__button--minimize'></button>
                        <button
                            className='header__button header__button--blue header__button--maximize'
                            onClick={handleMaximizeClick}
                        ></button>
                        <button
                            className='header__button header__button--red header__button--close'
                            onClick={onClose}
                        ></button>
                    </div>
                </header>
                <div className='window--content'>{/* content */}</div>
            </div>
        </Draggable>
    );
}
