// This file contains an array of movie objects, each with various properties such as title, year, director, genre, rating, runtime, poster image filename, description, and trailer URL.
const movies = [
  {
    id: 1,
    title: "Aftersun",
    year: 2022,
    director: "Charlotte Wells",
    genre: ["Drama"],
    rating: 7.7,
    runtime: 102,
    poster: "https://www.posterscine.com/media/catalog/product/cache/1c91d037a1f0ef180108abb0973795cc/a/f/aftersun_2022_posters.png",
    description: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between as she tries to reconcile the father she knew with the man she didn't.",
    trailer: "https://www.youtube.com/watch?v=vXKcWRu8K_U"
  },
  {
    id: 2,
    title: "Portrait of a Lady on Fire",
    originalTitle: "Portrait de la jeune fille en feu",
    year: 2019,
    director: "Céline Sciamma",
    genre: ["Drama", "Romance", "Historical"],
    rating: 8.1,
    runtime: 122,
    poster: "https://image.tmdb.org/t/p/w500/3NTEMlG5mQdIAlKDl3AJG0rX29Z.jpg",
    description: "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
    trailer: "https://www.youtube.com/watch?v=R-fQPTwma9o"
  },
  {
    id: 3,
    title: "Cinco Lobitos",
    originalTitle: "Cinco Lobitos",
    year: 2022,
    director: "Alauda Ruiz de Azúa",
    genre: ["Drama"],
    rating: 7.5,
    runtime: 104,
    poster: "https://i.postimg.cc/qBZs7KZW/cincolobitos.jpg",
    description: "A new mother struggles with motherhood while experiencing complex feelings when her own parents come to help her take care of her baby.",
    trailer: "https://www.youtube.com/watch?v=PcSJUrG_BqI"
  },
  {
    id: 4,
    title: "20,000 Species of Bees",
    originalTitle: "Veinte mil especies de abejas",
    year: 2023,
    director: "Estibaliz Urresola Solaguren",
    genre: ["Drama"],
    rating: 7.3,
    runtime: 125,
    poster: "https://bteampictures.es/wp-content/uploads/2024/09/20000-especies-de-abejas.jpg",
    description: "A family trip during summer makes Lucía, still known as Aitor, face who she really wants to be, dealing with the lack of understanding from her mother.",
    trailer: "https://www.youtube.com/watch?v=qyTrUu6-ZJ8"
  },
  {
    id: 5,
    title: "Call Me by Your Name",
    year: 2017,
    director: "Luca Guadagnino",
    genre: ["Drama", "Romance"],
    rating: 7.9,
    runtime: 132,
    poster: "https://m.media-amazon.com/images/I/81gn9oibQ0L._AC_UF1000,1000_QL80_.jpg",
    description: "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
    trailer: "https://www.youtube.com/watch?v=Z9AYPxH5NTM"
  },
  {
    id: 6,
    title: "Midsommar",
    year: 2019,
    director: "Ari Aster",
    genre: ["Horror", "Drama", "Mystery"],
    rating: 7.1,
    runtime: 148,
    poster: "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
    description: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
    trailer: "https://www.youtube.com/watch?v=1Vnghdsjmd0"
  },
  {
    id: 7,
    title: "Before Sunset",
    year: 2004,
    director: "Richard Linklater",
    genre: ["Drama", "Romance"],
    rating: 8.1,
    runtime: 80,
    poster: "https://image.tmdb.org/t/p/w500/gycdE1ARByGQcK4fYR2mgpU6OO.jpg",
    description: "Nine years after their first meeting, Celine finds Jesse in Paris on the last stop in his book tour, with only a few hours until his flight back to the U.S.",
    trailer: "https://www.youtube.com/watch?v=oI3UuneLcyU"
  },
  {
    id: 8,
    title: "Past Lives",
    year: 2023,
    director: "Celine Song",
    genre: ["Drama", "Romance"],
    rating: 7.9,
    runtime: 106,
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    description: "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
    trailer: "https://www.youtube.com/watch?v=kNzpKhsoZ9U"
  },
  {
    id: 9,
    title: "Close",
    year: 2022,
    director: "Lukas Dhont",
    genre: ["Drama"],
    rating: 7.7,
    runtime: 105,
    poster: "https://m.media-amazon.com/images/M/MV5BZjA4M2VmMTQtYjk0Yi00MGUxLWE0MTgtYzBkNDUxNWQ1MTZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "The intense friendship between two thirteen-year-old boys Leo and Remi suddenly gets disrupted. Struggling to understand what has happened, Leo approaches Sophie, Remi's mother. 'Close' is a film about friendship and responsibility.",
    trailer: "https://www.youtube.com/watch?v=_pFzTDgNOKo"
  },
  {
    id: 10,
    title: "Sorda",
    year: 2025,
    director: "Eva Libertad",
    genre: ["Drama"],
    rating: null,
    runtime: 100,
    poster: "https://nexuscreafilms.com/wp-content/uploads/2025/04/SORDA_KEYART_70x100_RGB_CAPAS-Poster-Logos-web-701x1024.webp",
    description: "Ángela, a deaf woman, and her hearing partner Héctor are expecting a child. As they prepare for parenthood, they face challenges in communication and fears about whether their child will be deaf or hearing. The film explores the complexities of their relationship and the societal barriers they encounter.",
    trailer: "https://www.youtube.com/watch?v=fMNDL3OLKhk"
  }
];

export default movies;