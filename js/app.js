import { initRouter, handleRoute } from "./router.js";
import { loadHome } from "./modules/home.js";

console.log("GoodFilm SPA initializing...");

export async function renderPage(path, params) {
  const app = document.getElementById("app");

  if (path === "/") {
    app.innerHTML = `
      <h2>今日热门电影</h2>
      <div id="movie-list" class="movie-grid"></div>
    `;

    await loadHome(); // ✅ 保证在 DOM 后执行
  }
}

// 初始化
initRouter();
handleRoute();