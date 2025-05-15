import films from "./films.js";

// console.log(films);
const filmList = document.querySelector(".film-list");
console.log(filmList);

const renderFilms = (films) => {
  filmList.innerHTML = "";

  films.forEach((film) => {
    const filmCard = document.createElement("div");
    filmCard.classList.add("film-card");

    filmCard.innerHTML = `
            <div>
                <img src="${film.poster}" alt="Poster of ${film.title}">
                <div>
                <h2>${film.title}</h2>
                <h2>${film.year}</h2>
                </div>
            </div>
        `;
    filmList.appendChild(filmCard);
  });
};

const searchFilms = (searchTerm) => {
  if (!searchTerm) {
    renderFilms(films);
    return;
  }

  const term = searchTerm.toLowerCase();

  const searchResults = films.filter(
    (film) =>
      film.title.toLowerCase().includes(term) ||
      (film.originalTitle && film.originalTitle.toLowerCase().includes(term))
  );

  renderFilms(searchResults);
};

const filterByGenre = (genreToFilter) => {
  if (!genreToFilter || genreToFilter === "All") {
    renderFilms(films);
    return;
  }

  const filteredFilms = films.filter((film) =>
    film.genre.includes(genreToFilter)
  );
  console.log("Filtrando por género:", genreToFilter);

  renderFilms(filteredFilms);
};

document.querySelector("#search-input").addEventListener("input", (e) => {
  searchFilms(e.target.value);
});

document.querySelector("#genre-filter").addEventListener("change", (e) => {
  filterByGenre(e.target.value);
});

renderFilms(films);
