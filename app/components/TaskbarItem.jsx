// Components
import Image from 'next/image';
// Styles
import '../sass/components/TaskbarItem.scss';


export default function TaskbarItem({imagePath, label}) {
    return(
        <div className='single-item'>
            <Image
                src={imagePath}
                alt={label}
                width={16}
                height={16}/>
            <span>{label}</span>
        </div>
    )
}