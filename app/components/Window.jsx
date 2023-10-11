"use client";

import { useState } from "react";
import Image from "next/image";
import "../sass/components/Window.scss";
import Draggable from "react-draggable";

export default function Window({ imagePath, label }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleCloseClick = () => {
        const windowElement = document.querySelector(".window");
        if (windowElement) {
            windowElement.style.display = "none";
        }
    };

    const handleMaximizeClick = () => {
        const windowElement = document.querySelector('.window');
        const maximizeButton = document.querySelector('.header__button--maximize');
    
        if (windowElement && maximizeButton) {
            if (isFullScreen) {
                // Si l'écran est en mode plein écran, rétablissez la classe et les styles par défaut.
                windowElement.classList.remove('full-screen');
                maximizeButton.classList.remove('header__button--maximized');
                setIsFullScreen(false);
            } else {
                // Si l'écran n'est pas en mode plein écran, ajoutez la classe et les styles de plein écran.
                windowElement.classList.add('full-screen');
                maximizeButton.classList.add('header__button--maximized');
                setIsFullScreen(true);
            }
        }
    };
    


    return (
        <Draggable
            defaultPosition={{ x: 80, y: 0 }}
            handle="header"
            cancel=".window--header__buttons"
        >
            <div className="window">
                <div className="window--header-bg"></div>
                <header className="window--header">
                    <Image
                        src={imagePath}
                        alt={label}
                        width={15}
                        height={15}
                        className="window--header__img"
                    />
                    <span className="window--header__label">{label}</span>
                    <div className="window--header__buttons">
                        <button className="header__button header__button--blue header__button--minimize"></button>
                        <button
                            className="header__button header__button--blue header__button--maximize"
                            onClick={handleMaximizeClick}
                        ></button>
                        <button
                            className="header__button header__button--red header__button--close"
                            onClick={handleCloseClick}
                        ></button>
                    </div>
                </header>
                <div className="window--content">{/* content */}</div>
            </div>
        </Draggable>
    );
}
