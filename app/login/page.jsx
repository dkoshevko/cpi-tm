'use client'

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import off from '../../public/turn_off.png';

import '../sass/Login.scss';

import LoginForm from './LoginForm';
import Loader from "../components/Loader";

export default function Login() {
    const [showLoader, setShowLoader] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        // Utiliser setTimeout pour masquer le Loader après 3 secondes
        const loaderTimeoutId = setTimeout(() => {
            setShowLoader(false);
            setShowLogin(true);
        }, 3000); // 3000 millisecondes équivalent à 3 secondes

        // Nettoyer le timeout lorsque le composant est démonté
        return () => {
            clearTimeout(loaderTimeoutId);
        };
    }, []);

    const turnOff = () => {
        alert("Куди зібрався?")
    }

    return (
        <div>
            {showLoader && <Loader />} {/* Afficher le Loader si showLoader est vrai */}
            {showLogin && (
                <div className="login">
                    <div className="login--top">
                        <div className='login--top__gradient'></div>
                    </div>
                    <div className="login--main">
                        <div className='login--main__logo'>
                            <Image 
                                src={'/logo.svg'}
                                alt='CPI.tm'
                                width={170}
                                height={170}
                            />
                            <h1>To begin, click your user name</h1>
                        </div>
                        <div className='login--main__gradient'>
                        </div>
                        <div className='login--main__auth'>
                            <div className='login--main__auth--image'>
                            </div>
                            <div className='login--main__auth--form'>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                    <div className="login--bottom">
                        <div className="login--bottom__gradient">
                        </div>
                        <div className='login--bottom__off'>
                            <button onClick={turnOff}>
                                <Image src={off} alt='' />
                            </button>
                            <span>Turn off computer</span>
                        </div>
                        <div className='login--bottom__message'>
                            <p>After you log on, you can add or change accounts</p>
                            <p>Just go to your Control Panel and click User Accounts.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}