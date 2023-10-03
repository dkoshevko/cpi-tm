'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import '../sass/components/Taskbar.scss';
import TaskbarItem from './TaskbarItem';
import Clock from './Clock';
import StartMenu from './StartMenu';


export default function Taskbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const menu = document.querySelector('.start-menu');
            const taskbar = document.querySelector('.taskbar');
            // Vérifiez si le clic est en dehors du menu et du bouton de démarrage.
            if (
                isMenuOpen &&
                menu && // Assurez-vous que le menu existe
                !menu.contains(event.target) &&
                event.target.className !== 'taskbar--start' &&
                !taskbar.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="taskbar">
            {isMenuOpen && <StartMenu />}
            <div className="taskbar--start" onClick={toggleMenu}>
            <Image 
                src={'/cpi.png'}
                alt='CPI.tm logo'
                width={20}
                height={20}
                />
                <span>menu</span>
            </div>
            <div className="taskbar--items">
                <TaskbarItem />
                <TaskbarItem />
            </div>
            <div className="taskbar--time">
                <Clock />
            </div>
        </div>
    )
}