'use client'

import { useEffect, useState } from 'react';

export default function Clock() {
    const [showTime, setShowTime] = useState('');

    useEffect(() => {
        // Fonction pour mettre à jour l'heure actuelle
        const updateClock = () => {
            const date = new Date();
            const formattedTime =
                `${date.getHours()}:${date.getMinutes()}`;
            setShowTime(formattedTime);
        };

        // Mettre à jour l'heure toutes les secondes
        const intervalId = setInterval(updateClock, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <span>{showTime}</span>
    );
}
