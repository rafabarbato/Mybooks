import { Icon } from "@iconify/react";
import { useState } from "react";

const BookDetails = () => {
  const [showMore, setShowMore] = useState(false);

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
              <h1 className="text-3xl font-bold text-brand-purple-600">
                O poder do hábito
              </h1>
              <div className="flex items-center">
                {" "}
                <strong className="mr-2">Por</strong>{" "}
                <p className="text-gray-600">
                  Arthur Rocha | <strong>Português</strong>
                </p>{" "}
                {/* <div className="divider divider-horizontal"></div> */}{" "}
                <button className="bg-brand-purple-600 py-[3px] px-2 rounded-md ml-3 text-white flex items-center">
                  {" "}
                  <Icon icon="material-symbols:bookmark-outline" />
                  Adicionar aos favoritos
                </button>
              </div>
              <h2 className="font-bold text-xl mt-2">Descrição</h2>
              <article
                className={`space-y-3 mt-2 transition-all ease-in-out duration-1000  ${
                  showMore ? "max-h-[70px]" : "max-h-full"
                } overflow-hidden`}
              >
                <p>
                  Charles Duhigg, repórter investigativo do New York Times,
                  mostra que a chave para o sucesso é entender como os hábitos
                  funcionam - e como podemos transformá-los. Com novo prefácio
                  do autor.
                </p>
                <p>
                  Durante os últimos dois anos, uma jovem transformou quase
                  todos os aspectos de sua vida. Parou de fumar, correu uma
                  maratona e foi promovida. Em um laboratório, neurologistas
                  descobriram que os padrões dentro do cérebro dela mudaram de
                  maneira fundamental.
                </p>
                <p>
                  Publicitários da Procter & Gamble observaram vídeos de pessoas
                  fazendo a cama. Tentavam desesperadamente descobrir como
                  vender um novo produto chamado Febreze, que estava prestes a
                  se tornar um dos maiores fracassos na história da empresa. De
                  repente, um deles detecta um padrão quase imperceptível - e,
                  com uma sutil mudança na campanha publicitária, Febreze começa
                  a vender um bilhão de dólares por anos.
                </p>
                <p>
                  Um diretor executivo pouco conhecido assume uma das maiores
                  empresas norte-americanas. Seu primeiro passo é atacar um
                  único padrão entre os funcionários - a maneira como lidam com
                  a segurança no ambiente de trabalho -, e logo a empresa começa
                  a ter o melhor desempenho no índice Dow Jones.
                </p>
                <p>
                  O que todas essas pessoas tem em comum? Conseguiram ter
                  sucesso focando em padrões que moldam cada aspecto de nossas
                  vidas. Tiveram êxito transformando hábitos. Com perspicácia e
                  habilidade, Charles Duhigg apresenta um novo entendimento da
                  natureza humana e seu potencial para a transformação.
                </p>
              </article>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => handleShowMore()}
              >
                <Icon
                  icon="ep:arrow-down-bold"
                  className={` transition-all text-purple-600 ${
                    showMore ? "rotate-0" : "rotate-180"
                  }`}
                />
                <p className="ml-2 font-bold">Leia mais</p>
              </span>
              <div>
                <h2 className="font-bold text-xl mt-2">Detalhes do Livro</h2>
                <div>
                  <ul className='space-y-1 mt-1'>
                    <li className='flex space-x-1'><strong>Editoria:</strong> <p>Objetiva; 1ª edição (24 setembro 2012)</p></li>
                    <li className='flex space-x-1'><strong>Idioma:</strong> <p>Português</p></li>
                    <li className='flex space-x-1'><strong>Capa comum:</strong> <p>408 páginas</p></li>
                    <li className='flex space-x-1'><strong>ISBN-10:</strong> <p>8539004119</p></li>
                    <li className='flex space-x-1'><strong>ISBN-13:</strong> <p>9788539004119</p></li>
                    <li className='flex space-x-1'><strong>Dimensões:</strong> <p>22.8 x 16 x 2x4 cm</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-2 max-w-[250px]">
          <div>
            <h2 className="text-3xl font-bold">
              Livros Relacionados
            </h2>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]">
              </div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">
                  Carol S. Dweck
                </p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]">
              </div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">
                  Carol S. Dweck
                </p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]">
              </div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">
                  Carol S. Dweck
                </p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]">
              </div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">
                  Carol S. Dweck
                </p>
              </div>
            </div>
            <div className="gap-2 mt-2 flex">
              <div className="aspect-[40/55] bg-gray-400 h-[110px]">
              </div>
              <div className="flex flex-col">
                <p className="font-bold">
                  Mindset: A nova psicologia do sucesso
                </p>
                <p className="text-gray-400">
                  Carol S. Dweck
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetails;
