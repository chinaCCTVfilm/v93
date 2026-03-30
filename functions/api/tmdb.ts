export const onRequestGet: PagesFunction = async ({ env }) => {
  const hasKey = !!env.TMDB_API_KEY;
  const keyPreview = env.TMDB_API_KEY 
    ? env.TMDB_API_KEY.slice(0, 15) + "..." 
    : null;

  return new Response(JSON.stringify({
    success: true,
    hasKey: hasKey,
    keyPreview: keyPreview,
    keyLength: env.TMDB_API_KEY ? env.TMDB_API_KEY.length : 0,
    message: hasKey 
      ? "✅ TMDB_API_KEY Secret 已成功加载" 
      : "❌ TMDB_API_KEY 仍是 undefined，请检查 Secret 配置",
    timestamp: new Date().toISOString(),
    note: "如果 hasKey 为 false，Secret 注入失败"
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};