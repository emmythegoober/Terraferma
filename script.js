// script.js
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const toSnakeCase = str => {
  // Use a regex to match words/phrases, including handling camelCase
  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase()) // Convert all matched words to lowercase
    .join('_'); // Join the words with underscores
};

searchForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  const searchTerm = searchInput.value;
  // Encode the search term to handle special characters
  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const transformIntoSnake = toSnakeCase(encodedSearchTerm);

  // Define the target page URL
  const wikiPage = "https://emmythegoober.github.io/Terraferma/wiki/";

  // Construct the new URL with a query parameter
  const newUrl = `${wikiPage}${transformIntoSnake}`;

  // Redirect the user to the new page
  window.location.href = newUrl;
});
