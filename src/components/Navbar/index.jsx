import { useContext, useEffect, useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { Icon } from '@iconify/react';
import { useDebounce } from '../../hooks/useDebounce';
import { GoogleContext } from '../../Context/GoogleContext';
import { useJwt } from "react-jwt";
/* import { Link } from 'react-router-dom'; */

export const Navbar = () => {
  const [books, setBooks] = useState('');
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const searchDebounce = useDebounce(books, 1000);
  const { googleCredential } = useContext(GoogleContext)
  const { decodedToken, isExpired } = useJwt(googleCredential);
  async function handleSearhBooks() {
    try {
      if (books === '') {
        return;
      }
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchDebounce}&printType=books&langRestrict=pt`,
      );

      const data = await response.json();
      setLoading(false);
      setSearchData(data);
      console.log(data);
    } catch (erro) {
      setLoading(false);
      console.log(erro);
    }
  }

  console.log(googleCredential && decodedToken)

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
    <header className="bg-white shadow-md min-h-[60px] w-full flex items-center top-0 py-1 fixed z-40 ">
      <nav className=" flex main_container justify-between">
        <div className="flex items-center justify-items-start relative">
          <a href="/">
            <img src="/svg/logo.svg" alt="logo mybooks" className="w-44" />
          </a>
          <div className="relative md:block hidden">
            {loading ? (
              <span className="loading loading-spinner loading-xs absolute left-3 top-[12px]"></span>
            ) : (
              <Icon
                icon="fluent:search-12-filled"
                className="absolute left-3 top-[12px] text-base text-gray-400/60"
              />
            )}
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
                  <a href={`/book/${book.id}`}>
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
        <div className="items-center space-x-4 md:flex hidden">
          <a href="/login">
            <ButtonPrimary text="Cadastrar-se | Login" />
          </a>
          <Icon
            icon="basil:user-solid"
            className="w-12  h-fit aspect-square border rounded-full  "
          />
        </div>
      </nav>
    </header>
  );
};
