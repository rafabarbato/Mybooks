import React from 'react'
import { HeaderTitle } from '../HeaderTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const SectionHomeContent = () => {
    return (
        <div className='mt-14 p-5 overflow-y-auto w-full ml-64'>
            <HeaderTitle text='Descubra' />
            <div className='flex  mt-4'>
                <Swiper slidesPerView={6} spaceBetween={12}>
                    <SwiperSlide> <img src="/img/categories/livros_infantis.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_na_categoria_medieval.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_para_relaxar.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_relax.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_infantis.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_infantis.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_na_categoria_medieval.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_para_relaxar.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_relax.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                    <SwiperSlide> <img src="/img/categories/livros_infantis.png" alt="livros para crianças" className='aspect-square w-full h-full' /></SwiperSlide>
                </Swiper>



            </div>
            <div className='divide-x-2 divider'></div>
            <HeaderTitle text='Lançamentos ' />
            <div className='flex mt-4'>

                <Swiper slidesPerView={8} spaceBetween={12}>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>


                </Swiper>
            </div>
            <div className='divide-x-2 divider'></div>
            <HeaderTitle text='Lançamentos ' />
            <div className='flex mt-4'>

                <Swiper slidesPerView={8} spaceBetween={12}>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}
