import { Icon } from '@iconify/react'
import React from 'react'
import { ItemCategorie } from '../partials/ItemCategorie'

export const SideBar = () => {
    return (
        <aside className=' py-20 px-10  h-screen border fixed z-30 bg-white'>
            <h2 className='text-xl text-gray-800 font-bold mb-3'>Navegação</h2>
            <ul className=''>
                <ItemCategorie text="Mais bem avaliados" />
                <ItemCategorie text="Categorias" />
                <ItemCategorie text="Explorar" />
                <ItemCategorie text="Mais bem avaliados" />


            </ul>
            <div className="divider"></div>
            <h2 className='text-xl text-gray-800 font-bold mb-3'>Meus Livros</h2>
            <ul className=''>
                <ItemCategorie text="Lendo" />
                <ItemCategorie text="Avaliados" />
                <ItemCategorie text="Histórico" />


            </ul>
        </aside>
    )
}
