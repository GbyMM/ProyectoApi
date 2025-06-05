const containerBook = document.querySelector(".card");/* Container donde va ir cada libro */

const formSearch = document.querySelector("form"); /* Input donde esta el buscador*/

const inputSearch = document.querySelector("#campoBusqueda"); /* Input dentro del buscadorr*/


async function bookshop(query = 'a') {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=16`);
        const data = await response.json();
        console.log(data);
        pintarLibro(data.items);
        return data.items || [];

    } catch (error) {
        console.error(error);
    }
    
}
function pintarLibro(books) {
    containerBook.innerHTML = ""; /* Limpia el contenedor antes de llamar a otra */

    books.forEach((book) => {
        containerBook.innerHTML += `
        <div class="tarjeta">
            <div class="containerImg"><img src="${book.volumeInfo.imageLinks?.thumbnail.replace('http://', 'https://') || ''}" alt="Portada" /></div>
            <div class="containerText">
                <p class="textTitle">${book.volumeInfo.title}</p>
                <p class="textAuthor">
                    ${book.volumeInfo.authors?.slice(0, 2).join(", ") || 'Autor desconocido'}
                    ${book.volumeInfo.authors?.length > 2 ? ', ...' : ''}
                </p>
                <a href="">Saber más...</a>
            </div> 
        </div>
        `
});
}
formSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    const valor = inputSearch.value.trim().toLowerCase();
    const libros = await bookshop(valor || "a"); /* Llama a bookshop() con el valor buscado. Si está vacío, busca por "a" para mostrar algo. */

    containerBook.innerHTML = ""; /* Limpia el contenedor antes de llamar a otra */
    pintarLibro(libros);
    
})

bookshop();
