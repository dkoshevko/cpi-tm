import Image from 'next/image';

import off from '../../public/turn_off.png';
import '../sass/Login.scss';
import LoginForm from '../components/LoginForm';

export default function Login() {
    return (
        <div className="login">
            <div className="login--top">
                <div className='login--top__gradient'></div>
            </div>
            <div className="login--main">
                <div className='login--main__logo'>
                    <Image 
                        src={'/cpi.png'}
                        alt='CPI.tm'
                        width={140}
                        height={140}
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
                    <button> 
                        <Image src={off} alt='' />
                    </button>
                    <p>Turn off computer</p>
                </div>
                <div className='login--bottom__message'>
                    <p>After you log on, you can add or change accounts</p>
                    <p>Just go to your Control Panel and click User Accounts.</p>
                </div>
            </div>
        </div>
    )
}