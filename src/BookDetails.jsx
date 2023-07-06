import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(true);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksById(id);
  }, [id]);

  async function getBooksById(id) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
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
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 lg:grid-cols-7 gap-20">
        <section className="col-span-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Página Inicial</a>
              </li>
              <li>
                <a>Detalhes do Livro</a>
              </li>
              <li>{books.volumeInfo?.title}</li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-5 gap-5">
            <div className="col-span-2">
              <div className="aspect-[40/55] bg-gray-400">
                <img className="w-full h-full object-cover"
                  src={(books.volumeInfo?.imageLinks?.thumbnail)}>
                  </img>
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-3xl font-bold text-brand-purple-600">
                {books.volumeInfo?.title}
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
                dangerouslySetInnerHTML={{
                  __html: books.volumeInfo?.description,
                }}
                className={`space-y-3 mt-2 transition-all ease-in-out duration-1000 text-justify  ${
                  showMore ? "max-h-[70px]" : "max-h-full"
                } overflow-hidden`}
              ></article>
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
                  <ul className="space-y-1 mt-1">
                    <li className="flex space-x-1">
                      <strong>Editoria:</strong>{" "}
                      <p>Objetiva; 1ª edição (24 setembro 2012)</p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>Idioma:</strong>{" "}
                      <p>
                        {books.volumeInfo?.language === "pt"
                          ? "Português"
                          : books.volumeInfo?.language}
                      </p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>Capa comum:</strong> <p>408 páginas</p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>ISBN-10:</strong> <p>8539004119</p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>ISBN-13:</strong> <p>9788539004119</p>
                    </li>
                    <li className="flex space-x-1">
                      <strong>Dimensões:</strong> <p>22.8 x 16 x 2x4 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-2 max-w-[250px]">
          <div>
            <h2 className="text-3xl font-bold">Livros Relacionados</h2>
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetails;
