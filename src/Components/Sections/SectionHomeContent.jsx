import { HeaderTitle } from '../HeaderTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RatingsStar } from '../partials/RatingsStar'
import 'swiper/css';
export const SectionHomeContent = () => {

    //crie uma função que limita os caracteres do titulo 
    
    function limitarCaracteres(titulo, limite) {
        if (titulo.length > limite) {
          titulo = titulo.substring(0, limite) + "...";
        }
        return titulo;
      }
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
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><label htmlFor="my_modal_7" className="btn"><img src="/img/books/a_vida_mentirosa_dos_adultos.png" alt="livros para crianças" className=' w-full h-full' /></label></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base' title="A vida Mentirosa dos Adultos">{limitarCaracteres('A Vida Mentirosa dos Adultos', 14)}</strong><p>William Martins</p><p><RatingsStar count={5}/> </p></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/ultimo_turno.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>{limitarCaracteres('Último Turno', 14)}</strong><p>William Martins</p><p><RatingsStar count={2}/> </p></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/o_poder_do_habito.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>O Poder do Hábito</strong><p>Arthur Rocha</p><p><RatingsStar count={2}/> </p></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/rainhas_da_noite.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A Rainha da noite</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/os_oito_vestidos_dior.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
                        <strong className='text-gray-900 mt-1 text-base'>A vida mentirosa dos adultos</strong></div> </SwiperSlide>
                    <SwiperSlide className='flex flex-col'> <div className='aspect-[55/90] object-contain'><img src="/img/books/nunca_vi_a_chuva.png" alt="livros para crianças" className=' w-full h-full' /></div><div className='flex flex-col'>
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
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">HIDDEN MODAL</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
        </div>
    )
}
