import { useContext, useEffect, useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { Icon } from '@iconify/react';
import { useDebounce } from '../../hooks/useDebounce';
import { GoogleContext } from '../../Context/GoogleContext';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export const Navbar = () => {

  const [books, setBooks] = useState('');
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const searchDebounce = useDebounce(books, 1000);
  const { googleCredential } = useContext(GoogleContext)
  const [refresh, setRefresh] = useState(false)

  const userInfo = window.localStorage.getItem('userInfo') || '{}'

  function handleLogout(){
    setRefresh(state => !state)
    googleLogout()
    localStorage.setItem('userInfo',JSON.stringify({}))
    toast.success('Deslogado com sucesso!')
    
  }

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

  console.log(googleCredential && googleCredential)

  function limitarCaracteres(titulo, limite) {
    if (titulo.length > limite) {
      titulo = titulo.substring(0, limite) + '...';
    }
    return titulo;
  }
  useEffect(() => {
    setRefresh(state => !state)
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
        { userInfo == '{}' &&   <a href="/login">
            <ButtonPrimary text="Cadastrar-se | Login" />
          </a>}
         { userInfo == '{}' ?  <Icon
            icon="basil:user-solid"
            className="w-12  h-fit aspect-square border rounded-full  "
          /> : <div className='flex items-center'>
            <img className='max-w-[40px] block w-full h-full max-h-[40px] rounded-full aspect-square' src={JSON.parse(localStorage.getItem('userInfo')).picture || 'https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg'} />
           <div className='flex flex-col ml-2'>
           <p className='text-gray-500 '>{JSON.parse(localStorage.getItem('userInfo')).email}</p>
            <small className='hover:underline cursor-pointer' onClick={handleLogout}>Fazer Logout</small>
           </div>
            </div>}
        </div>
      </nav>
    </header>
  );
};
