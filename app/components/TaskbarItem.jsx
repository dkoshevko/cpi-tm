import Image from "next/image";

import '../sass/components/TaskbarItem.scss';

export default function TaskbarItem() {
    return(
        <div className='single-item'>
            <Image
                src={'/folder.png'}
                alt='folder' 
                width={16}
                height={16}/>
            <span>Documents</span>
        </div>
    )
}