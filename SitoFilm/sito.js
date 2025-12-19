const API_KEY = '677933007fc9b6feafc7c7a7fcd34d14';
const grid = document.getElementById('movie-grid');
// Recuperiamo l'input di ricerca (assicurati che nell'HTML abbia la classe 'search-input' o l'ID 'search')
const searchInput = document.querySelector('.search-input') || document.getElementById('search-input');

const movies = [
  {
    id: 66732,
    title: "Stranger Things",
    type: "Serie TV",
    genre: "Sci-Fi, Horror, Fantasy",
    language: "Inglese",
    year: 2016,
    duration: "45–140 min",
    creator: "Matt e Ross Duffer",
    producers: ["Shawn Levy", "Dan Cohen"],
    description: "Nella cittadina di Hawkins, la scomparsa di un ragazzo porta alla luce esperimenti segreti, una ragazza con poteri psichici e una dimensione oscura chiamata Upside Down.",
    poster: "/images/stranger_things.jpg",
    watchLink: "https://www.themoviedb.org/tv/66732-stranger-things"
  },
  {
    id: 402431,
    title: "Wicked",
    type: "Film",
    genre: "Fantasy, Musical",
    language: "Inglese",
    year: 2024,
    duration: "2h 40m",
    creator: "Jon M. Chu",
    producers: ["Marc Platt"],
    description: "La storia inedita delle streghe di Oz, prima dell’arrivo di Dorothy, esplorando amicizia, potere e destino.",
    poster: "/images/wicked.jpg",
    watchLink: "https://www.themoviedb.org/movie/402431-wicked"
  },
  {
    id: 224141,
    title: "Into the Woods",
    type: "Film",
    genre: "Fantasy, Musical",
    language: "Inglese",
    year: 2014,
    duration: "2h 5m",
    creator: "Rob Marshall",
    producers: ["Marc Platt"],
    description: "Un musical che intreccia le fiabe classiche dei fratelli Grimm con conseguenze oscure e imprevedibili.",
    poster: "/images/into_the_woods.jpg",
    watchLink: "https://www.themoviedb.org/movie/224141-into-the-woods"
  },
  {
    id: 4,
    title: "Aladdin",
    type: "Film",
    genre: "Fantasy, Avventura",
    language: "Inglese",
    year: 2019,
    duration: "2h 8m",
    creator: "Guy Ritchie",
    producers: ["Dan Lin"],
    description: "Un giovane di strada scopre una lampada magica che cambierà il suo destino e quello del regno di Agrabah.",
    poster: "/images/aladdin.jpg",
    watchLink: "https://www.imdb.com/title/tt6139732/"
  },
  {
    id: 420817,
    title: "The King's Man",
    type: "Film",
    genre: "Azione, Spionaggio",
    language: "Inglese",
    year: 2021,
    duration: "2h 11m",
    creator: "Matthew Vaughn",
    producers: ["Matthew Vaughn"],
    description: "Le origini della prima agenzia di intelligence indipendente durante la Prima Guerra Mondiale.",
    poster: "/images/the_kings_man.jpg",
    watchLink: "https://www.themoviedb.org/movie/420817-aladdin"
  },
  {
    id: 671,
    title: "Harry Potter (Saga)",
    type: "Film",
    genre: "Fantasy, Avventura",
    language: "Inglese",
    year: 2001,
    duration: "2h+",
    creator: "Chris Columbus, David Yates",
    producers: ["David Heyman"],
    description: "La storia del giovane mago Harry Potter e della sua lotta contro il mago oscuro Voldemort.",
    poster: "/images/harry_potter.jpg",
    watchLink: "https://www.themoviedb.org/movie/671-harry-potter-and-the-philosopher-s-stone"
  },
  {
    id: 1218032,
    title: "Super Charlie",
    type: "Film",
    genre: "Animazione, Famiglia",
    language: "Inglese",
    year: 2023,
    duration: "1h 30m",
    creator: "Jon Holmberg",
    producers: ["Nordisk Film"],
    description: "Charlie è un bambino con superpoteri che deve salvare il mondo con intelligenza e coraggio.",
    poster: "/images/super_charlie.jpg",
    watchLink: "https://www.themoviedb.org/movie/1218032-super-charlie"
  },
  {
    id: 939243,
    title: "Sonic the Hedgehog 3",
    type: "Film",
    genre: "Azione, Avventura",
    language: "Inglese",
    year: 2024,
    duration: "2h",
    creator: "Jeff Fowler",
    producers: ["Neal H. Moritz"],
    description: "Sonic torna in una nuova avventura ad alta velocità contro nemici ancora più potenti.",
    poster: "/images/sonic3.jpg",
    watchLink: "https://www.themoviedb.org/movie/939243-sonic-the-hedgehog-3"
  },
  {
    id: 71446,
    title: "La Casa di Carta: L'Accademia",
    type: "Serie TV",
    genre: "Crime, Thriller",
    language: "Spagnolo",
    year: 2024,
    duration: "50 min",
    creator: "Álex Pina",
    producers: ["Alejandro Pina Calafi"],
    description: "Uno spin-off ambientato nel mondo de La Casa di Carta, focalizzato sull’addestramento di nuovi criminali.",
    poster: "/images/lacasa_accademia.jpg",
    watchLink: "https://www.themoviedb.org/tv/71446-la-casa-de-papel"
  },
  {
    id: 1580902,
    title: "Zootopia 2",
    type: "Film",
    genre: "Animazione , Avventura , Azione , Commedia , Poliziesco",
    language: "Inglese",
    year: 2025,
    duration: "1h 50m",
    creator: "Jared Bush",
    producers: ["Yvett Merino"],
    description: "i neo-detective Judy Hopps e Nick Wilde si imbarcano in un nuovo mistero che coinvolge un misterioso rettile, Gary De'Snake, il cui arrivo sconvolge la metropoli animale.",
    poster: "/images/zootopia2.jpg",
    watchLink: "https://www.themoviedb.org/movie/1580902-zootopia-2-a-special-look"
  },
  {
    id: 508883,
    title: "Il ragazzo e l'airone",
    type: "Film",
    genre: "Animazione, Fantasy",
    language: "Giapponese",
    year: 2023,
    duration: "2h 4m",
    creator: "Hayao Miyazaki",
    producers: ["Studio Ghibli"],
    description: "Un ragazzo intraprende un viaggio fantastico tra dolore, crescita e mondi misteriosi.",
    poster: "/images/il_ragazzo_e_l_airone.jpg",
    watchLink: "https://www.themoviedb.org/movie/508883"
  },
  {
    id: 1108211,
    title: "消失的她 (Lost in the Stars)",
    type: "Film",
    genre: "Thriller, Mistero",
    language: "Cinese",
    year: 2023,
    duration: "2h 1m",
    creator: "Cui Rui",
    producers: ["China Film Group"],
    description: "Durante una vacanza, una donna scompare misteriosamente e la verità si rivela sempre più inquietante.",
    poster: "/images/lost_in_the_stars.jpg",
    watchLink: "https://www.themoviedb.org/movie/1108211"
  }
];

function renderMovies() {
  grid.innerHTML = "";

  const genere = document.getElementById("filter-genere").value;
  const lingua = document.getElementById("filter-lingua").value;
  const anno = document.getElementById("filter-anno").value;
  const durata = document.getElementById("filter-durata").value;
  const search = document.getElementById("main-search").value.toLowerCase();

  movies
    .filter(m => !genere || m.genre.includes(genere))
    .filter(m => !lingua || m.language === lingua)
    .filter(m => !anno || m.year == anno)
    .filter(m => {
      if (!durata) return true;
      const h = parseInt(m.duration);
      return durata === "long" ? h >= 2 : h < 2;
    })
    .filter(m => m.title.toLowerCase().includes(search))
    .forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `<img src="${movie.poster}">`;
      card.onclick = () => location.href = `detail.html?id=${movie.id}`;
      grid.appendChild(card);
    });
}


// GESTIONE RICERCA
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = movies.filter(movie => 
            movie.title.toLowerCase().includes(term)
        );
        renderMovies(filtered);
    });
}

// FILTRO ANNO
function setupYearFilter() {
    const selectAnno = document.getElementById('filter-anno');
    if (!selectAnno) return;
    for (let i = 2025; i >= 1980; i--) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        selectAnno.appendChild(opt);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupYearFilter();
    renderMovies();
});

["filter-genere", "filter-lingua", "filter-anno", "filter-durata", "main-search"]
  .forEach(id => {
    document.getElementById(id).addEventListener("change", renderMovies);
    document.getElementById(id).addEventListener("input", renderMovies);
  });

export default movies;