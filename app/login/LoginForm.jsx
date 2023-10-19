'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

import arrow from '../../public/arrow.png';
import '../sass/components/LoginForm.scss';

export default function LoginForm() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/')
    }

    return (
        <form>
            <h2>Administrator</h2>
            <div className="auth-container">
                <div className="auth-container__inputs">
                    <label>
                        <span>Type your email</span>
                        <input 
                            required 
                            type="email" 
                            name="email" 
                            id="auth-email" 
                            />
                    </label>
                    <label>
                        <span>Type your password</span>
                        <input 
                            required
                            type="password" 
                            name="password" 
                            id="auth-password" 
                        />
                    </label>
                </div>
                <button type="submit" className="auth-submit" onClick={handleSubmit}>
                    <Image 
                        src={arrow}
                        alt=''
                    />
                </button>
            </div>
        </form>
    )
}