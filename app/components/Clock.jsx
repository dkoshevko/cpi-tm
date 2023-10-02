'use client'

import { useEffect, useState } from 'react';

export default function Clock() {
    const [showTime, setShowTime] = useState('');

    useEffect(() => {
        // Fonction pour mettre à jour l'heure actuelle
        const updateClock = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            
            // Utiliser String.padStart() pour ajouter un zéro si nécessaire
            const formattedTime =
                `${hours}:${minutes.toString().padStart(2, '0')}`;
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
