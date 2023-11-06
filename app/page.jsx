'use client'

// Modules
import { useState, useEffect } from 'react';
// Components
import Link from 'next/link';
import Icon from './components/Icon';
import Taskbar from './components/Taskbar';
import TaskbarItem from './components/TaskbarItem';
import Window from './components/Window';
// Styles
import './sass/Desktop.scss';


export default function Desktop() {

    // State of Taskbar Item
    const [primaryWindowKey, setPrimaryWindowKey] = useState(null);

    // Show/Hide windows
    const [windows, setWindows] = useState({
        mentorship: false,
        about: false,
        team: false,
        products: false
    });

    const openWindow = (window) => {
        setWindows({...windows, [window]: true});
        setPrimaryWindowKey(window);
    };
    const closeWindow = (window) => {
        setWindows({...windows, [window]: false});
        if (primaryWindowKey === window) {
            setPrimaryWindowKey(null);
        }
    };

    // Shortcuts props
    const windowConfigs = {
        mentorship: {
            imagePath: '/mentor.png',
            label: 'Mentorship',
            isPrimary: windows.mentorship
        },
        about: {
            imagePath: '/about.png',
            label: 'About',
            isPrimary: windows.about
        },
        team: {
            imagePath: '/team.png',
            label: 'Our Team',
            isPrimary: windows.team
        },
        products: {
            imagePath: '/products.png',
            label: 'Our Products',
            isPrimary: windows.products
        }
    };
    const discordProps = {
        imagePath: '/discord.png',
        label: 'Discord'
    };
    const telegramProps = {
        imagePath: '/insta.png',
        label: 'Instagram'
    };
    const youtubeProps = {
        imagePath: '/youtube.png',
        label: 'YouTube'
    };


    return (
        <main className='desktop'>
            <div className='desktop--icons'>
                {Object.keys(windowConfigs).map(windowKey => (
                    <Icon
                        key={windowKey}
                        imagePath={windowConfigs[windowKey].imagePath}
                        label={windowConfigs[windowKey].label}
                        doubleClick={() => openWindow(windowKey)}
                        customClass={windowKey}
                    />
                ))}
                <Link href='' target='blank'>
                    <Icon {...discordProps} />
                </Link>
                <Link href='' target='blank'>
                    <Icon {...telegramProps} />
                </Link>
                <Link href='' target='blank'>
                    <Icon {...youtubeProps} />
                </Link>
            </div>
            <div className='watermark'></div>
            {Object.keys(windows).map(windowKey => {
                if (windows[windowKey]) {
                    const windowProps = {
                        ...windowConfigs[windowKey],
                        customClass: windowKey,
                        onClose: () => closeWindow(windowKey)
                    }
                    return (
                        <Window 
                            key={windowKey} 
                            {...windowProps} 
                        />
                    )
                }
                return null;
            })}
            <Taskbar>
                {Object.keys(windows).map(windowKey => {
                    if (windows[windowKey]) {
                        const taskbarProps = windowConfigs[windowKey];
                        const isPrimary = windowKey === primaryWindowKey;
                        return (
                            <TaskbarItem 
                                key={windowKey} 
                                {...taskbarProps} 
                                isPrimary={isPrimary}
                                // onClick={clickOnTaskbarItem}
                                // customClass={windows[windowKey] ? 'unfocused' : ''}
                            />
                        )
                    }
                    return null;
                })}
            </Taskbar>
        </main>
    )
}
