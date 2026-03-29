// Cloudflare Pages Functions (TypeScript)

export const onRequestGet: PagesFunction = async (context) => {
  const { request, env } = context;

  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "discover";
  const page = url.searchParams.get("page") || "1";

  const cacheKey = new Request(request.url, request);
  const cache = caches.default;

  let response = await cache.match(cacheKey);
  if (response) {
    return response;
  }

  const TMDB_KEY = env.TMDB_API_KEY;

  let apiUrl = "";

  if (type === "discover") {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&page=${page}&language=zh-CN&sort_by=popularity.desc`;
  } else {
    return new Response(JSON.stringify({ error: "Invalid type" }), { status: 400 });
  }

  const res = await fetch(apiUrl);
  const data = await res.text();

  response = new Response(data, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400"
    }
  });

  context.waitUntil(cache.put(cacheKey, response.clone()));

  return response;
};