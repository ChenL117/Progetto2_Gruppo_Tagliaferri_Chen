const API_KEY = '677933007fc9b6feafc7c7a7fcd34d14';
const grid = document.getElementById('movie-grid');

const movies = [
    { id: 66732, title: "Stranger Things", type: "tv", poster: "https://image.tmdb.org/t/p/w500/uS9uSPhuoggnYp7u97I4ls29Z3Q.jpg" },
    { id: 402431, title: "Wicked", type: "movie", poster: "https://image.tmdb.org/t/p/w500/26YI9V7X69S0Yv689Y999m689Y.jpg" },
    { id: 224141, title: "Into the Woods", type: "movie", poster: "https://image.tmdb.org/t/p/w500/96idm9it6S8Xk0An67U6e7FeMCl.jpg" },
    { id: 420817, title: "Aladdin", type: "movie", poster: "https://image.tmdb.org/t/p/w500/3iYpMRGUzeJvMvfsbbYvUvYpYmI.jpg" },
    { id: 476669, title: "The King's Man", type: "movie", poster: "https://image.tmdb.org/t/p/w500/9S9Lpx7S76pM68e8e76966696.jpg" },
    { id: 671, title: "Harry Potter", type: "movie", poster: "https://image.tmdb.org/t/p/w500/t79zpuZp7S9v689Y999m689Y.jpg" },
    { id: 1125206, title: "Super Charlie", type: "movie", poster: "https://image.tmdb.org/t/p/w500/A2nI3rV5vXh1J7p2S1Y9m689Y.jpg" },
    { id: 939243, title: "Sonic 3", type: "movie", poster: "https://image.tmdb.org/t/p/w500/v9Y69S0Yv689Y999m689Y.jpg" }
];

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

function openJustWatch(id, type) {
    const url = `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const watchLink = data.results?.IT?.link;

        if (watchLink) {
            window.open(watchLink, '_blank');
        } else {
            console.log("Link JustWatch non trovato, uso fallback TMDB");
            window.open(`https://www.themoviedb.org/${type}/${id}`, '_blank');
        }
    } catch (error) {
        console.error("Errore nel recupero dei provider:", error);
    }
}

function renderMovies() {
    grid.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" title="${movie.title}">
        `;
        card.addEventListener('click', () => openJustWatch(movie.id, movie.type));
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupYearFilter();
    renderMovies();
});