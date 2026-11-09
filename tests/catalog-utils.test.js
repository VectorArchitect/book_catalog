const test = require("node:test");
const assert = require("node:assert/strict");
const { filterCatalogBooks } = require("../catalog-utils");

const books = [
  { id: "b1", title: "Clean Code", author: "Robert C. Martin", genre: "Programming" },
  { id: "b2", title: "Introduction to Algorithms", author: "Thomas H. Cormen", genre: "Algorithms" },
  { id: "b3", title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
  { id: "b4", title: "Design Patterns", author: "Erich Gamma", genre: "Programming" },
];

test("search matches titles and authors without case sensitivity", () => {
  assert.deepEqual(
    filterCatalogBooks(books, { query: "ROBERT" }).map((book) => book.id),
    ["b1"]
  );
  assert.deepEqual(
    filterCatalogBooks(books, { query: "algorithms" }).map((book) => book.id),
    ["b2"]
  );
});

test("genre filter narrows the catalog", () => {
  assert.deepEqual(
    filterCatalogBooks(books, { genre: "Programming" }).map((book) => book.id),
    ["b1", "b4"]
  );
});

test("favorites mode is combined with search and genre filters", () => {
  assert.deepEqual(
    filterCatalogBooks(books, {
      query: "design",
      genre: "Programming",
      favoritesOnly: true,
      favoriteIds: ["b1", "b4"],
    }).map((book) => book.id),
    ["b4"]
  );
});

test("favorites mode excludes non-favorites after a favorite is removed", () => {
  assert.deepEqual(
    filterCatalogBooks(books, {
      favoritesOnly: true,
      favoriteIds: ["b2", "b3"],
    }).map((book) => book.id),
    ["b2", "b3"]
  );
});

test("empty filters return every book", () => {
  assert.deepEqual(filterCatalogBooks(books), books);
});
