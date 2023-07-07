import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooksByAuthor } from './functions/getBooksByAuthor';
import { ImproveQualityOfBookImage } from './functions/ImproveQualityOfBookImage';
const BookDetails = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(true);
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksById(id);

    if (books && books?.volumeInfo?.authors) {
      handleGetBooksByAutho(books?.volumeInfo?.authors[0]);
    }
  }, [id]);

  function handleSaveBook(id) {
    let localStorageFavoritos = localStorage.getItem('favoritos');
    /* if(verifyFavoritesBooksById(id)) return console.log('já existe') */

    if (typeof localStorageFavoritos !== 'undefined') {
      return localStorage.setItem('favoritos', JSON.stringify([id]));
    }

    return localStorage.setItem(
      'favoritos',
      JSON.stringify([...localStorageFavoritos, id]),
    );
  }

  function verifyFavoritesBooksById(id) {
    
    if(typeof localStorage.getItem('favoritos') === 'undefined') return true

    let localStorageFavoritos = JSON.parse(localStorage.getItem('favoritos'));

    return localStorageFavoritos?.some((bookId) => bookId.id === id);
  }

  async function handleGetBooksByAutho(author) {
    try {
      const response = await getBooksByAuthor(author);

      setBooksByAuthor(response);
      console.log(response);
    } catch (erro) {
      console.log(erro);
    }
  }

  async function getBooksById(id) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`,
      );

      const data = await response.json();
      setBooks(data);
      return data;
    } catch (erro) {
      console.log(erro);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <main className=" mt-24 ">
      <div className="lg:max-w-[1200px] px-3 mx-auto grid md:grid-cols-5 lg:grid-cols-7 gap-20">
        <section className="col-span-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li>
                <p>Detalhes do Livro</p>
              </li>
              <li>{books.volumeInfo?.title}</li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-5 gap-5">
            <div className="col-span-5 lg:col-span-2">
              <div className=" w-full lg:aspect-[40/55] bg-gray-400">
                <img
                  className="w-full h-full object-cover"
                  src={
                    books?.volumeInfo?.imageLinks
                      ? ImproveQualityOfBookImage(
                          books.volumeInfo.imageLinks.thumbnail,
                          2,
                        )
                      : '/img/books/no_cover_thumb.png'
                  }
                />
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-3xl font-bold text-brand-purple-600">
                {books.volumeInfo?.title}
              </h1>
              <div className="flex items-center justify-between ">
                {' '}
                <div className="flex">
                  <strong className="mr-1">Por</strong>{' '}
                  <p className="text-gray-400">
                    {books?.volumeInfo?.authors[0]}
                  </p>{' '}
                </div>
                {/* <div className="divider divider-horizontal"></div> */}{' '}
                {verifyFavoritesBooksById(id) ? (
                  <button
                    className="bg-brand-purple-600 py-[3px] px-2 rounded-md ml-3 text-white flex items-center"
                    onClick={() => handleSaveBook(books.id)}
                  >
                    {' '}
                    <Icon icon="material-symbols:bookmark-outline"  color='white'/>
                    Adicionar aos favoritos
                  </button>
                ) : (
                  <button
                    className="bg-brand-purple-600 py-[3px] px-2 rounded-md ml-3 text-white flex items-center"
                    onClick={() => handleSaveBook(books.id)}
                  >
                  
                  <Icon icon="material-symbols:bookmark" color="white" />
                Favorito
                  </button>
                )}
              </div>
              <h2 className="font-bold text-xl mt-2">Descrição</h2>
              <article
                dangerouslySetInnerHTML={{
                  __html: books.volumeInfo?.description,
                }}
                className={`space-y-3 mt-2 text-gray-500 transition-all ease-in-out duration-1000 text-justify  ${
                  showMore ? 'max-h-[70px]' : 'max-h-full'
                } overflow-hidden`}
              ></article>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => handleShowMore()}
              >
                <Icon
                  icon="ep:arrow-down-bold"
                  className={` transition-all text-purple-600 ${
                    showMore ? 'rotate-0' : 'rotate-180'
                  }`}
                />
                <p className="ml-2 font-bold">Leia mais</p>
              </span>
              <div>
                <h2 className="font-bold text-xl mt-2">Detalhes do Livro</h2>
                <div>
                  <ul className="space-y-1 mt-1">
                    {/*  <li className="flex space-x-1">
                      <strong>Editoria:</strong>{' '}
                      <p>Objetiva; 1ª edição (24 setembro 2012)</p>
                    </li> */}
                    <li className="flex space-x-1">
                      <strong>Idioma:</strong>{' '}
                      <p className="text-gray-500">
                        {books.volumeInfo?.language === 'pt'
                          ? 'Português'
                          : books.volumeInfo?.language}
                      </p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>Quantidade de Páginas:</strong>{' '}
                      <p className="text-gray-500">
                        {books.volumeInfo?.pageCount}
                      </p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>ISBN-10:</strong>{' '}
                      <p className="text-gray-500">
                        {books.volumeInfo?.industryIdentifiers[0].identifier}
                      </p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>ISBN-13:</strong>{' '}
                      <p className="text-gray-500">
                        {books.volumeInfo?.industryIdentifiers[1].identifier}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:col-span-2 col-span-5 max-w-full lg:max-w-[250px]">
          <div>
            <h2 className="text-3xl font-bold">Livros Relacionados</h2>
            {books &&
              booksByAuthor?.items?.map((booksByAuthor, index) => {
                if (index >= 5) return;
                return (
                  <div className="gap-2 mt-2 flex" key={index}>
                    <div className={`aspect-[40/55]  h-[110px] flex`}>
                      <img
                        src={
                          booksByAuthor.volumeInfo.imageLinks
                            ? ImproveQualityOfBookImage(
                                booksByAuthor.volumeInfo.imageLinks.thumbnail,
                                1,
                              )
                            : '/img/books/no_cover_thumb.png'
                        }
                        alt={booksByAuthor?.volumeInfo?.title}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold lg:text-base text-xl">
                        {booksByAuthor?.volumeInfo?.title}
                      </p>
                      <p className="text-gray-400">
                        {booksByAuthor?.volumeInfo?.authors}
                      </p>
                    </div>
                  </div>
                );
              })}

            {/*  <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]"></div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">Carol S. Dweck</p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]"></div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">Carol S. Dweck</p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]"></div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">Carol S. Dweck</p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]"></div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">Carol S. Dweck</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetails;
