import { HeaderTitle } from '../HeaderTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RatingsStar } from '../partials/RatingsStar';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Icon } from '@iconify/react';
export const SectionHomeContent = () => {
  const [books, setBooks] = useState([]);

  function limitarCaracteres(titulo, limite) {
    if (titulo.length > limite) {
      titulo = titulo.substring(0, limite) + '...';
    }
    return titulo;
  }

  function ImproveQualityOfBookImage(url){
    let imgZoom = url.replace('zoom=1', 'zoom=3')
  
    return imgZoom
  }

  

  async function getBooks() {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=inauthor:"Masashi+Kishimoto"&printType=books',
      );

      const data = await response.json();
      setBooks(data);
      console.log(data);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="mt-14 p-5 overflow-y-auto w-full ml-64">
      <HeaderTitle text="Descubra" />
      <div className="flex  mt-4">
        <Swiper slidesPerView={6} spaceBetween={12}>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_na_categoria_medieval.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_para_relaxar.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_relax.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_na_categoria_medieval.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_para_relaxar.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_relax.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="divide-x-2 divider"></div>
      <HeaderTitle text="Lançamentos" />
      <div className="flex mt-4">
        <Swiper slidesPerView={9} spaceBetween={12}>
          {books &&
            books?.items?.map((book) => {
              return (
                <SwiperSlide key={book.id} className="flex flex-col">
                  <div className="aspect-[55/90] object-contain">
                    
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? ImproveQualityOfBookImage(book.volumeInfo.imageLinks.thumbnail)
                            : '/img/books/no_cover_thumb.png'
                        }
                        alt={`${book.volumeInfo.title}`}
                        className=" w-full h-full"
                      />
                   
                  </div>
                  <div className="flex flex-col">
                    <strong
                      className="text-gray-900 mt-1 text-base"
                      title={book.volumeInfo.title}
                    >
                      {limitarCaracteres(book.volumeInfo.title, 20)}
                    </strong>
                    {/* <p>
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors
                        : 'Desconhecido'}
                    </p> */}
                    <p>
                      {book.volumeInfo?.averageRating ? <RatingsStar count={book.volumeInfo.averageRating ? Math.round(book.volumeInfo.averageRating) : 1}    /> : <span className='flex items-center'><Icon icon="iconamoon:unavailable" /><p className='ml-1'> Sem avaliação</p></span> }
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="divide-x-2 divider"></div>
      <HeaderTitle text="Recentemente Adicionados" />
      <div className="flex mt-4">
        <Swiper slidesPerView={8} spaceBetween={12}>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={1} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={5} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={2} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={4} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={2} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={3} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={4} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={1} />
              </p>
            </div>{' '}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {' '}
            <div className="aspect-[55/90] object-contain">
              <img
                src="/img/books/a_vida_mentirosa_dos_adultos.png"
                alt="livros para crianças"
                className=" w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <strong className="text-gray-900 mt-1 text-base">
                A vida mentirosa dos adultos
              </strong>
              <p>Rafael Barbato</p>
              <p>
                <RatingsStar count={5} />
              </p>
            </div>{' '}
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">HIDDEN MODAL</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7"></label>
      </div> */}
    </div>
  );
};
