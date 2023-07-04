import { ButtonPrimary } from '../Buttons/ButtonPrimary'
import { Icon } from '@iconify/react';
export const Navbar = () => {
    return (
        <header className='bg-white shadow-md h-auto w-full py-1 fixed z-40'>
            <nav className=' flex main_container justify-between'>
                <div className='flex items-center justify-items-start'>
                    <img src="/svg/logo.svg" alt="logo mybooks" className='w-44' />
                    <input type="text" className='rounded-3xl px-4 bg-white border h-10' />
                </div>
                <div className='flex items-center space-x-4'>
                    <ButtonPrimary text='Cadastrar-se | Login' />
                    <Icon icon="basil:user-solid" className='w-12 h-12 border rounded-full  p-1' />
                </div>
            </nav>
        </header>
    )
}
