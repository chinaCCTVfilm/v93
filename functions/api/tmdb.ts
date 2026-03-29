export const onRequestGet: PagesFunction = async (context) => {
  const { request, env } = context;

  const url = new URL(request.url);
  let type = url.searchParams.get("type");
  const page = url.searchParams.get("page") || "1";

  // ✅ 容错：默认discover
  if (!type) type = "discover";

  const TMDB_KEY = env.TMDB_API_KEY;

  let apiUrl = "";

  if (type === "discover") {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&page=${page}&language=zh-CN&sort_by=popularity.desc`;
  } else {
    return new Response(JSON.stringify({
      error: "Invalid type",
      received: type
    }), { status: 400 });
  }

  const res = await fetch(apiUrl);
  const data = await res.text();

  return new Response(data, {
    headers: { "Content-Type": "application/json" }
  });
};