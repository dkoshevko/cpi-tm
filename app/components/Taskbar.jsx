'use client'

// Modules
import React, { useState, useEffect } from 'react';
// Components
import Image from 'next/image';
import StartMenu from './StartMenu';
import Clock from './Clock';
// Styles
import '../sass/components/Taskbar.scss';


export default function Taskbar({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleStartMenuClick = (event) => {
            const menu = document.querySelector('.start-menu');
            const taskbar = document.querySelector('.taskbar');
            const startButton = document.querySelector('.taskbar--start');
            // Verify clicking outside the Start Menu or on the 'menu' button
            if (
                isMenuOpen &&
                menu && // Make sure that menu exists
                !menu.contains(event.target) &&
                !startButton.contains(event.target) &&
                !taskbar.contains(event.target)
            ) {
                setIsMenuOpen(false);
                startButton.classList.remove('active-menu');
            }
        };

        document.addEventListener('click', handleStartMenuClick);

        return () => {
            document.removeEventListener('click', handleStartMenuClick);
        };
    }, [isMenuOpen]);

    const toggleStartMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        const startButton = document.querySelector('.taskbar--start');
        if (startButton) {
            if (!isMenuOpen) {
            // If menu is open, add class 'active-menu'
            startButton.classList.add('active-menu');
            } else {
            // If menu is closed, remove class 'active-menu'
            startButton.classList.remove('active-menu');
            }
        }
    };

    return (
        <div className='taskbar'>
            {isMenuOpen && <StartMenu />}
            <div className='taskbar--start' onClick={toggleStartMenu}>
                <Image
                    src={'/logo.svg'}
                    alt='CPI.tm logo'
                    width={30}
                    height={20}
                />
                <span>menu</span>
            </div>
            <div className='taskbar--items'>
                {children}
            </div>
            <div className='taskbar--time'>
                <Image
                    src={'/sound.png'}
                    alt='Sound icon'
                    width={15}
                    height={15}
                />
                <Image
                    src={'/usb.png'}
                    alt='USB icon'
                    width={15}
                    height={15}
                />
                <Image
                    src={'/antivirus.png'}
                    alt='Antivirus icon'
                    width={15}
                    height={15}
                />
                <Clock />
            </div>
        </div>
    )
}