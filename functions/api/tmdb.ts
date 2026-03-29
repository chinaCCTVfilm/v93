export const onRequestGet: PagesFunction = async ({ request, env }) => {
  const url = new URL(request.url);

  const page = url.searchParams.get("page") || "1";

  const apiKey = env.TMDB_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({
      error: "Missing TMDB_API_KEY"
    }), { status: 500 });
  }

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&language=zh-CN&sort_by=popularity.desc`;

  const res = await fetch(apiUrl);
  const data = await res.text();

  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400"
    }
  });
};