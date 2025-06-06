# Bookshop API

Este proyecto es una aplicación web sencilla para buscar y visualizar información de libros utilizando la API de Google Books.

## Archivos del Proyecto

- **`proyecto.html`**: Contiene la estructura HTML de la aplicación. Incluye la barra de búsqueda, el área donde se muestran los libros y los botones de navegación para la paginación.
- **`proyecto.css`**: Define los estilos visuales de la aplicación, incluyendo la apariencia de las tarjetas de libros, la barra de búsqueda y los elementos de navegación.
- **`proyecto.js`**: Contiene la lógica principal de la aplicación. Se encarga de:
    - Interactuar con la API de Google Books para realizar búsquedas.
    - Mostrar los resultados de la búsqueda en la interfaz (utilizando las tarjetas definidas en el HTML y estilizadas en el CSS).
    - Implementar la funcionalidad de paginación (navegar entre páginas de resultados).
    - Manejar la entrada del usuario en el campo de búsqueda.

## Funcionalidad
La aplicación permite al usuario buscar libros por título y muestra los resultados en un diseño de tarjetas. Los usuarios pueden navegar a través de las diferentes páginas de resultados utilizando los botones "Anterior" y "Siguiente".

##Tecnologías 
-   **HTML5**: Para la estructura semántica del contenido.
-   **CSS3**: Para dar estilo y diseño a la interfaz de usuario.
-   **JavaScript (ES6+)**: Para la lógica de la aplicación, interacción con la API y manipulación del DOM.

## Cómo usar la aplicación

1.  Abre el index.html con un anvegador web
2.  Escribe el título o una palabra clave del libro que deseas buscar en el campo de texto con el placeholder "Buscar por titulo...".
3.  Presiona el botón "Search" para obtener los resultados.
4.  Navega por las diferentes páginas de resultados utilizando los botones con las flechas "<" y ">" ubicados en la parte inferior de la página. El número de página actual se mostrará entre los botones.

## Enlace a la API
 (https://www.googleapis.com/books/v1/volumes?q=a)