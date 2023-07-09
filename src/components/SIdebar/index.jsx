import { Icon } from '@iconify/react'
import { ItemCategorie } from '../partials/ItemCategorie'

export const SideBar = () => {
    return (
        <aside className=' py-20 px-10  h-screen border fixed z-30 bg-white'>
            <h2 className='text-xl text-gray-800 font-bold mb-3'>Navegação</h2>
            <ul className='flex flex-col items-start'>
            <ItemCategorie icon={<Icon icon="carbon:categories" color="#8471b0" />} text="Mais bem avaliados" />
                <ItemCategorie icon={<Icon icon="carbon:categories" color="#8471b0" />} text="Categorias" />
                <ItemCategorie icon={<Icon icon="fluent-mdl2:world" color="#8471b0"/>} text="Explorar" />


            </ul>
            <div className="divider"></div>
            <h2 className='text-xl text-gray-800 font-bold mb-3'>Meus Livros</h2>
            <ul className=''>
            <ItemCategorie icon={<Icon icon="carbon:categories" color="#8471b0" />} text="Lendo" />
                <ItemCategorie icon={<Icon icon="carbon:categories" color="#8471b0" />} text="Avaliados" />
                <ItemCategorie icon={<Icon icon="carbon:categories" color="#8471b0" />} text="Histórico" />


            </ul>
        </aside>
    )
}
