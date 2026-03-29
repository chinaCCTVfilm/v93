import { fetchAPI } from "../core/api.js";

let page = 1;
let loading = false;

export async function loadHome() {
  page = 1;
  await loadMovies();
}

async function loadMovies() {
  if (loading) return;
  loading = true;

  try {
    const data = await fetchAPI(`/api/tmdb?type=discover&page=${page}`);

    const container = document.getElementById("movie-list");

    if (container && data.results) {
      const html = data.results.map(item => {
        const title = item.title || "未知电影";
        const img = item.poster_path
          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
          : "";

        return `
          <div class="movie-card">
            <img src="${img}">
            <p>${title}</p>
          </div>
        `;
      }).join("");

      container.insertAdjacentHTML("beforeend", html);
    }

    page++;

  } catch (e) {
    console.error(e);
  }

  loading = false;
}