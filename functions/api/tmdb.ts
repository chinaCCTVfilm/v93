export const onRequestGet: PagesFunction = async ({ env }) => {
  const hasKey = !!env.TMDB_API_KEY;
  const keyPreview = env.TMDB_API_KEY ? env.TMDB_API_KEY.slice(0, 12) + "..." : null;

  return new Response(JSON.stringify({
    success: true,
    hasKey: hasKey,
    keyPreview: keyPreview,
    keyLength: env.TMDB_API_KEY ? env.TMDB_API_KEY.length : 0,
    message: hasKey ? "✅ TMDB_API_KEY 已成功加载" : "❌ TMDB_API_KEY 仍是 undefined",
    timestamp: new Date().toISOString(),
    note: "如果 hasKey 为 false，请检查 wrangler secret"
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};