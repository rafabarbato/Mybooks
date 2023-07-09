import { Icon } from '@iconify/react'


// eslint-disable-next-line react/prop-types
export const ItemCategorie = ({ text, icon}) => {
    return (
        <li className='flex items-center hover:bg-gray-100 transition-colors p-2 cursor-pointer rounded-sm'>
            {icon}
            <p className='ml-2 text-gray-400'>{text}</p>
        </li>
    )
}
