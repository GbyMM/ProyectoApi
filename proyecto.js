const containerBook  = document.querySelector(".card");/* Container donde va ir cada libro */
const formSearch     = document.querySelector("form"); /* Input donde esta el buscador*/
const inputSearch    = document.querySelector("#campoBusqueda"); /* Input dentro del buscador*/
const btnNext        = document.querySelector('#nextPage');  /* Boton siguiente pagina */
const btnPrev        = document.querySelector('#prevPage'); /* Boton página anterior */
const spanPagina     = document.querySelector('#paginaActual');/* Span que muestra la página actual */

let currentPage   = 1; 
const perPage     = 16;
let currentQuery  = 'a';


async function bookshop(query = 'a', page = 1) {
    const startIndex = (page - 1) * perPage;/* calcula en qué índice debe empezar Google a devolver resultados: página 1 → 0, página 2 → 16, etc. */
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${perPage}&startIndex=${startIndex}`);
        const data = await response.json();
      
        pintarLibro(data.items || []);/* Si la API no devuelve nada o hay error, se llama a pintarLibro con un array vacío para que el usuario vea un mensaje de “sin resultados”. */

    } catch (error) {
        console.error(error);
    }
    
}
function pintarLibro(books){
    // Aplicar fade-out
    containerBook.classList.add('oculta');
  
    setTimeout(() => {
      containerBook.innerHTML = '';
  
      if(!books.length){
        containerBook.innerHTML = '<p>No se encontraron resultados.</p>';
        containerBook.classList.remove('oculta'); // Mostrar de nuevo
        return;
      }
  
      books.forEach(book => {
        const v = book.volumeInfo;
        containerBook.innerHTML += `
          <div class="tarjeta" data-categoria="${v.categories?.[0] || 'Sin categoría'}">
            <div class="containerImg">
              <img src="${v.imageLinks?.thumbnail?.replace('http://','https://') || ''}" alt="Portada" />
            </div>
            <div class="containerText">
              <p class="textTitle">${v.title || 'Sin título'}</p>
              <p class="textAuthor">${v.authors?.slice(0,2).join(', ') || 'Autor desconocido'}${v.authors?.length>2?', …':''}</p>
              <p class="textYear">${v.publishedDate?.slice(0,4) || 'N/D'}</p>
              <a class="mas" href="${v.previewLink || '#'}" target="_blank">Saber más…</a>
            </div>
          </div>`;
      });
  
      // Habilitar botón "anterior"
      btnPrev.disabled = currentPage === 1;
  
      // Aplicar fade-in
      containerBook.classList.remove('oculta');
    }, 300); // Tiempo para el fade-out antes de limpiar
  }
  
formSearch.addEventListener('submit', async e=>{
    e.preventDefault();
    currentQuery = inputSearch.value.trim() || 'a'; /*  Toma el texto que escribió el usuario en el campo de búsqueda (inputSearch), le quita espacios en blanco (trim()) */
    currentPage  = 1; /* Reinicia el contador de página, ya que es una nueva búsqueda. */
    spanPagina.textContent = `${currentPage}`; /* Muestra en pantalla el número de página actual (ej: “Página 1”). */
    await bookshop(currentQuery, currentPage);/*  Carga los resultados de la nueva página usando la función bookshop. */
  });

  btnNext.addEventListener('click', async ()=>{
    currentPage++;
    spanPagina.textContent = ` ${currentPage}`;
    await bookshop(currentQuery, currentPage);
  });

  btnPrev.addEventListener('click', async ()=>{
    if(currentPage > 1){
      currentPage--;
      spanPagina.textContent = `${currentPage}`;
      await bookshop(currentQuery, currentPage);
    }
  });

  // ---------- Carga inicial ----------
  bookshop();

