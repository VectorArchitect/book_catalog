# Book Catalog

A small, dependency-free book catalog that runs in a modern browser.

## Features

- Displays the books embedded in the `booksData` XML block in `index.html`.
- Searches by book title or author (case-insensitive).
- Filters by genre.
- Saves favorites in browser `localStorage`.
- Shows all books or only favorites.
- Opens a detail dialog for each book.

## Run locally

No build step or package installation is required. Open `index.html` in a modern browser, or serve the repository directory with any static HTTP server.

The catalog data is currently embedded in the HTML file. Add or edit `<book>` entries inside the `booksData` XML block to change the catalog.

## Tests

The filtering logic is isolated in `catalog-utils.js` and uses Node's built-in test runner.

Requirements: Node.js 18 or newer.

Run:

```bash
node --test
```

The tests cover case-insensitive title/author search, genre filtering, and combinations with favorites-only mode.
