export const onRequestGet: PagesFunction = async ({ env, request }) => {
  const hasKey = !!env.TMDB_API_KEY;
  const keyPreview = env.TMDB_API_KEY ? env.TMDB_API_KEY.slice(0, 8) + "..." : null;

  return new Response(JSON.stringify({
    success: true,
    hasKey: hasKey,
    keyPreview: keyPreview,
    keyLength: env.TMDB_API_KEY ? env.TMDB_API_KEY.length : 0,
    message: hasKey ? "Key 已成功加载" : "Key 仍然是 undefined！请检查 Secret 设置",
    timestamp: new Date().toISOString()
  }, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: hasKey ? 200 : 500
  });
};