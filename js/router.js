import { renderPage } from './app.js';

function getRoute() {
  return {
    path: window.location.pathname,
    params: new URLSearchParams(window.location.search)
  };
}

export async function handleRoute() {
  const { path, params } = getRoute();
  await renderPage(path, params);
}

export function initRouter() {
  document.body.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    if (href.startsWith("/")) {
      e.preventDefault();
      history.pushState({}, "", href);
      handleRoute();
    }
  });

  window.addEventListener("popstate", handleRoute);
}