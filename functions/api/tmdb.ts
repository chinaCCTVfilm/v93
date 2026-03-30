export const onRequestGet: PagesFunction = async ({ env, request }) => {
  const url = new URL(request.url);
  const path = url.pathname + url.search;

  return new Response(JSON.stringify({
    success: true,
    hasKey: !!env.TMDB_API_KEY,
    keyLength: env.TMDB_API_KEY ? env.TMDB_API_KEY.length : 0,
    message: env.TMDB_API_KEY ? "Key 已加载" : "Key 仍为 undefined",
    envKeys: Object.keys(env) // 查看所有可用 env
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};