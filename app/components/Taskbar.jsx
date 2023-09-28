import Image from 'next/image';

import '../sass/components/Taskbar.scss';
import TaskbarItem from './TaskbarItem';
import Clock from './Clock';


export default function Taskbar() {
    return (
        <footer className="taskbar">
            <div className="taskbar--start">
            <Image 
                src={'/cpi.png'}
                alt='CPI.tm logo'
                width={20}
                height={20}
                />
                <span>start</span>
            </div>
            <div className="taskbar--items">
                <TaskbarItem />
                <TaskbarItem />
            </div>
            <div className="taskbar--time">
                <Clock />
            </div>
        </footer>
    )
}