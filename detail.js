import movies from "./sito.js";

const container = document.getElementById("movie-detail");
const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));
const movie = movies.find(m => m.id === movieId);
if (!movie) {
    container.innerHTML = "<h2>Film non trovato</h2>";
} else {
    container.innerHTML = `
        <img class="detail-poster" src="${movie.poster}" alt="${movie.title}" />

        <div class="detail-info">
            <h2>${movie.title}</h2>
            <p><strong>Trama:</strong> ${movie.description}</p>
            <p><strong>Creatore:</strong> ${movie.creator}</p>
            <p><strong>Produttori:</strong> ${movie.producers.join(", ")}</p>
            <p><strong>Genere:</strong> ${movie.genre}</p>
            <p><strong>Lingua:</strong> ${movie.language}</p>
            <p><strong>Anno:</strong> ${movie.year}</p>
            <p><strong>Durata:</strong> ${movie.duration}</p>

            <br>
            <button onclick="watchMovie()">Guarda il film</button>
        </div>
    `;
}
export default movie

window.watchMovie = function () {
    window.open(movie.watchLink, "_blank");
};

window.goBack = function () {
    window.history.back();
};