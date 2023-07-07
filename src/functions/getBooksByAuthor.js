/* 
    pegar a informação dos livros do autor
*/
export async function getBooksByAuthor(author) {
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
