import { useEffect, useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { Icon } from '@iconify/react';
import { useDebounce } from '../../hooks/useDebounce';
export const Navbar = () => {
  const [books, setBooks] = useState('');
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const searchDebounce = useDebounce( books, 1000);

  async function handleSearhBooks() {
    try {
      if (books === '') {
        return;
      }
      setLoading(true)
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchDebounce}`,
      );
     
      const data = await response.json();
      setLoading(false)
      setSearchData(data);
      console.log(data);
    } catch (erro) {
      setLoading(false);
      console.log(erro);
    }
  }

  function limitarCaracteres(titulo, limite) {
    if (titulo.length > limite) {
      titulo = titulo.substring(0, limite) + '...';
    }
    return titulo;
  }
  useEffect(() => {
    handleSearhBooks();
  }, [searchDebounce]);

  return (
    <header className="bg-white shadow-md h-auto w-full py-1 fixed z-40">
      <nav className=" flex main_container justify-between">
        <div className="flex items-center justify-items-start relative">
          <img src="/svg/logo.svg" alt="logo mybooks" className="w-44" />
          <div className='relative'>

{loading ? <span className="loading loading-spinner loading-xs absolute left-3 top-[12px]"></span> : <Icon icon="fluent:search-12-filled" className='absolute left-3 top-[12px] text-base text-gray-400/60'/>}
<input
  type="text"
  value={books}
  className="rounded-3xl  bg-white border h-10 px-8 text-sm"
  onChange={(e) => {
    setBooks(e.target.value);
  }}
/>
</div>
          <ul
            className={`menu bg-base-200 w-full rounded-box absolute top-12 left-44 ${
              books === '' && 'hidden'
            }`}
          >
            {searchData?.items?.map((book) => {
              return (
                <li key={book.id}>
                  <a className="">
                    {' '}
                    <img
                      src={
                        book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : '/img/books/no_cover_thumb.png'
                      }
                      alt={`${book.volumeInfo.title}`}
                      className="h-6 w-4 object-cover"
                    />
                    {limitarCaracteres(book.volumeInfo.title, 32)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <ButtonPrimary text="Cadastrar-se | Login" />
              <Icon
                icon="basil:user-solid"
                className="w-12  h-fit aspect-square border rounded-full  "
              />
        </div>
      </nav>
    </header>
  );
};