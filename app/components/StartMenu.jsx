'use client'

// Components
import Image from 'next/image';
// Styles
import '../sass/components/StartMenu.scss';


export default function StartMenu(userName) {
    return (
        <div className='start-menu'>
            <div className='start-menu__header'>
                <div className='start-menu__header--image'></div>
                <span className='start-menu__header--text'>UserName</span>
            </div>
            <div className='start-menu__main'>
                <hr className='start-menu__main--orange'/>
                <div className='start-menu__main--left'>
                </div>
                <div className='start-menu__main--right'></div>
            </div>
            <div className='start-menu__footer'>
                <div className='start-menu__footer--item'>
                    <button>
                        <Image
                            src={'/turn_off.png'} 
                            alt='Turn off button' 
                            width={16} 
                            height={16}
                        />
                    </button>
                    <span>Turn Off Computer</span>
                </div>
            </div>
        </div>
    )
}