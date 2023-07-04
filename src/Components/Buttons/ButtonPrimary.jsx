import React from 'react'

export const ButtonPrimary = ({ text }) => {
    return (
        <button className='text-sm hover:bg-purple-700 transition-transform active:scale-95 bg-purple-600 px-5 py-3 rounded-md text-white font-semibold'>
            {text}
        </button>
    )
}
