import { Icon } from '@iconify/react';
import { useState } from 'react';

const BookDetails = () => {
  const [ showMore, setShowMore ] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <main className=" mt-24 ">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 lg:grid-cols-7">
        <section className="col-span-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Página Inicial</a>
              </li>
              <li>
                <a>Detalhes do Livro</a>
              </li>
              <li>O poder do hábito</li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-5 gap-5">
            <div className="col-span-2">
              <div className="aspect-[40/55] bg-gray-400"></div>
            </div>
            <div className="col-span-3">
              <h1 className="text-3xl font-bold text-purple-800">
                O poder do hábito
              </h1>
              <div className="flex items-center">
                {' '}
                <strong className="mr-2">Por</strong>{' '}
                <p className="text-gray-600">
                  Arthur Rocha | <strong>Português</strong>
                </p>{' '}
                {/* <div className="divider divider-horizontal"></div> */}{' '}
                <button className="bg-purple-800 py-[3px] px-2 rounded-md ml-3 text-white flex items-center">
                  {' '}
                  <Icon icon="material-symbols:bookmark-outline" />
                  Adicionar aos favoritos
                </button>
              </div>
              <h2 className="font-bold text-xl mt-2">Descrição</h2>
              <article className={`space-y-3 mt-2 transition-all ease-in-out duration-1000  ${showMore ? 'max-h-[70px]' : 'max-h-full'} overflow-hidden`}>
                <p>
                  Charles Duhigg, repórter investigativo do New York Times,
                  mostra que a chave para o sucesso é entender como os hábitos
                  funcionam - e como podemos transformá-los.
                </p>
                <p>
                Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões
                </p>
                <p>
                  Charles Duhigg, repórter investigativo do New York Times,
                  mostra que a chave para o sucesso é entender como os hábitos
                  funcionam - e como podemos transformá-los.
                </p>
                <p>
                Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões
                </p>
              </article>
               <span className='flex items-center' onClick={()=> handleShowMore()}>
               <Icon icon="ep:arrow-down-bold"  className={` transition-all text-purple-600 ${showMore ? 'rotate-180' : 'rotate-0'}`}/>
               <p className='ml-2 font-bold'>Leia mais</p>
               </span>
                <div>
                <h2 className="font-bold text-xl mt-2">Detalhes do Livro</h2>
                <div>

                </div>
                </div>
            </div>
          </div>
        </section>
        <section className="col-span-2">...</section>
      </div>
    </main>
  );
};

export default BookDetails;
