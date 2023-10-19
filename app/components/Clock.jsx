'use client'

// Modules
import { useEffect, useState } from 'react';


export default function Clock() {

    const [showTime, setShowTime] = useState('');

    useEffect(() => {
        // Update time
        const updateClock = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            
            // Use String.padStart() for add a zero if needed
            const formattedTime =
                `${hours}:${minutes.toString().padStart(2, '0')}`;
            setShowTime(formattedTime);
        };

        // Update time every second
        const intervalId = setInterval(updateClock, 1000);

        // Clear interval while component disassembled
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <span style={{margin: '0 5px'}}>{showTime}</span>
    );
}
