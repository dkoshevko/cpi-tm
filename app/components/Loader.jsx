import Image from 'next/image';
import '../sass/components/Loader.scss';

export default function Loader() {
    return (
        <div className="loading-screen">
            <div className="loading-screen--wrapper">
                <div className="loading-screen--wrapper__logo">
                <Image 
                    src={'/cpi.png'}
                    alt='CPI.tm'
                    width={200}
                    height={200}
                />
                </div>
                <div className="loading-screen--wrapper__loader">
                    <div className="bars"><span></span></div>
                </div>
            </div>
            <div className="loading-screen--footer">
                <span className="loading-screen--footer__copyright">Copyright &copy; Mircosoft Corporation</span>
                <span className='loading-screen--footer__title'>CPI.tm</span>
            </div>
        </div>
    )
}