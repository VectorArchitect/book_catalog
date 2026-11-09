(function (root) {
  "use strict";

  function filterCatalogBooks(books, options = {}) {
    const query = String(options.query ?? "").trim().toLocaleLowerCase();
    const genre = String(options.genre ?? "");
    const favoritesOnly = options.favoritesOnly === true;
    const favorites = new Set(
      Array.isArray(options.favoriteIds) ? options.favoriteIds : []
    );

    return books.filter((book) => {
      const title = String(book.title ?? "");
      const author = String(book.author ?? "");
      const bookGenre = String(book.genre ?? "");
      const matchesQuery =
        !query ||
        title.toLocaleLowerCase().includes(query) ||
        author.toLocaleLowerCase().includes(query);
      const matchesGenre = !genre || bookGenre === genre;
      const matchesFavorites = !favoritesOnly || favorites.has(book.id);

      return matchesQuery && matchesGenre && matchesFavorites;
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { filterCatalogBooks };
  }

  if (root) {
    root.filterCatalogBooks = filterCatalogBooks;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
