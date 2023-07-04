import { Icon } from '@iconify/react'


// eslint-disable-next-line react/prop-types
export const ItemCategorie = ({ text }) => {
    return (
        <li className='flex items-center hover:bg-gray-100 transition-colors p-2 cursor-pointer rounded-sm'>
            <Icon icon="carbon:categories" color="#8471b0" />
            <p className='ml-2 text-gray-700'>{text}</p>
        </li>
    )
}
