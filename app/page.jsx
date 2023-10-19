'use client'

// Modules
import { useState } from 'react';
// Components
import Link from 'next/link';
import Icon from './components/Icon';
import Taskbar from './components/Taskbar';
import TaskbarItem from './components/TaskbarItem';
import Window from './components/Window';
// Styles
import './sass/Desktop.scss';


export default function Desktop() {
    const [selectedIcon, setSelectedIcon] = useState(false);

    // Shortcuts props
    const mentorshipProps = {
        imagePath: '/folder.png',
        label: 'Mentorship'
    };
    const aboutProps = {
        imagePath: '/folder.png',
        label: 'About'
    };
    const teamProps = {
        imagePath: '/folder.png',
        label: 'Our Team'
    };
    const productProps = {
        imagePath: '/folder.png',
        label: 'Our Products'
    };
    const discordProps = {
        imagePath: '/folder.png',
        label: 'Discord'
    };
    const telegramProps = {
        imagePath: '/folder.png',
        label: 'Telegram'
    };
    const youtubeProps = {
        imagePath: '/folder.png',
        label: 'YouTube'
    };

    const openIcon = (iconProps) => {
        setSelectedIcon(iconProps);
    };
    const closeIcon = () => {
        setSelectedIcon(false);
    };

    return (
        <main className='desktop'>
            <div className='desktop--icons'>
                <Icon 
                    {...mentorshipProps} 
                    doubleClick={() => openIcon(mentorshipProps)}
                />
                <Icon 
                    {...aboutProps}
                    doubleClick={() => openIcon(aboutProps)}
                />
                <Icon 
                    {...teamProps}
                    doubleClick={() => openIcon(teamProps)}
                />
                <Icon 
                    {...productProps}
                    doubleClick={() => openIcon(productProps)}
                />
                <Link href=''>
                    <Icon {...discordProps} />
                </Link>
                <Link href=''>
                    <Icon {...telegramProps} />
                </Link>
                <Link href=''>
                    <Icon {...youtubeProps} />
                </Link>
            </div>
            <div className='watermark'></div>
            <Window {...mentorshipProps} customId='mentorship' />
            <Window {...aboutProps} customId='about' />
            <Window {...teamProps} customId='team' />
            <Window {...productProps} customId='products' />
            {/* {selectedIcon && 
                <Window 
                    {...mentorshipProps} 
                    onClose={() => closeIcon} 
                />
            }
            {selectedIcon && 
                <Window 
                    {...aboutProps}
                    onClose={() => closeIcon} 
                />
            }
            {selectedIcon && 
                <Window 
                    {...teamProps} 
                    onClose={() => closeIcon}
                />
            }
            {selectedIcon && 
                <Window 
                    {...productProps} 
                    onClose={() => closeIcon}
                />
            } */}
            <Taskbar>
                {/* {selectedIcon && <TaskbarItem {...mentorshipProps} />}
                {selectedIcon && <TaskbarItem {...aboutProps} />}
                {selectedIcon && <TaskbarItem {...teamProps} />}
                {selectedIcon && <TaskbarItem {...productProps} />} */}
            </Taskbar>
        </main>
    )
}
