import { HeaderTitle } from '../HeaderTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RatingsStar } from '../partials/RatingsStar';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Icon } from '@iconify/react';
export const SectionHomeContent = () => {
  const [books, setBooks] = useState([]);
  const [booksDataByAuthor, setBooksDataByAuthor] = useState([]);

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

  

  async function getBooksByAuthor(author) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"&printType=books&langRestrict=pt`,
      );

      const data = await response.json();
      return data
    } catch (erro) {
      console.log(erro);
    }
  }

  async function init(){
    setBooks(await getBooksByAuthor("J. K. Rowling"));
    setBooksDataByAuthor(await getBooksByAuthor("Masashi Kishimoto"));
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <div className="mt-14 p-5 overflow-y-auto w-full ml-0 md:ml-64">
      <HeaderTitle text="Categorias" />
      <div className="flex  mt-4">
        <Swiper  spaceBetween={12} breakpoints={{
            100:{
              slidesPerView:2,
              spaceBetween:12
            },
            700:{
              slidesPerView:4,
              spaceBetween:12
            },
            900:{
              slidesPerView:4,
              spaceBetween:12
            },
          1200:{
            slidesPerView:7,
            spaceBetween:12
          }
        }}>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/animes.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/apocalipse.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/mago.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_relax.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_na_categoria_medieval.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_para_relaxar.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_relax.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src="/img/categories/livros_infantis.png"
              alt="livros para crianças"
              className="aspect-square w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="divide-x-2 divider"></div>
      <HeaderTitle text="Lançamentos" />
      <div className="flex mt-4">
        <Swiper slidesPerView={9} spaceBetween={12} breakpoints={{
            100:{
              slidesPerView:2,
              spaceBetween:12
            },
            700:{
              slidesPerView:4,
              spaceBetween:12
            },
            900:{
              slidesPerView:4,
              spaceBetween:12
            },
          1200:{
            slidesPerView:8,
            spaceBetween:12
          }}}>
          {books &&
            books?.items?.map((book) => {
              return (
                <SwiperSlide key={book.id} className="flex flex-col">
                  <div className="aspect-[55/90] object-contain">
                    <a href={`/book/${book.id}`}>
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? ImproveQualityOfBookImage(book.volumeInfo.imageLinks.thumbnail)
                            : '/img/books/no_cover_thumb.png'
                        }
                        alt={`${book.volumeInfo.title}`}
                        className=" w-full h-full"
                      />
                    </a>
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
        <Swiper slidesPerView={9} spaceBetween={12} breakpoints={{
            100:{
              slidesPerView:2,
              spaceBetween:12
            },
            700:{
              slidesPerView:4,
              spaceBetween:12
            },
            900:{
              slidesPerView:4,
              spaceBetween:12
            },
          1200:{
            slidesPerView:8,
            spaceBetween:12
          }}}>
          {booksDataByAuthor &&
            booksDataByAuthor?.items?.map((book) => {
              return (
                <SwiperSlide key={book.id} className="flex flex-col">
                  <div className="aspect-[55/90] object-contain">
                  <a href={`/book/${book.id}`}>
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? ImproveQualityOfBookImage(book.volumeInfo.imageLinks.thumbnail)
                            : '/img/books/no_cover_thumb.png'
                        }
                        alt={`${book.volumeInfo.title}`}
                        className=" w-full h-full"
                      />
                   </a>
                  </div>
                  <div className="flex flex-col">
                    <strong
                      className="text-gray-900 mt-1 text-base"
                      title={book.volumeInfo.title}
                    >
                      {limitarCaracteres(book.volumeInfo.title, 20)}
                    </strong>
                    <p>
                      {book.volumeInfo?.averageRating ? <RatingsStar count={book.volumeInfo.averageRating ? Math.round(book.volumeInfo.averageRating) : 1}    /> : <span className='flex items-center'><Icon icon="iconamoon:unavailable" /><p className='ml-1'> Sem avaliação</p></span> }
                      </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};
