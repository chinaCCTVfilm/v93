export const onRequestGet: PagesFunction = async ({ env }) => {
  const hasKey = !!env.TMDB_API_KEY;
  const preview = hasKey ? env.TMDB_API_KEY.slice(0, 20) + "..." : "null";

  return new Response(JSON.stringify({
    debug: true,
    hasKey: hasKey,
    keyPreview: preview,
    keyLength: hasKey ? env.TMDB_API_KEY.length : 0,
    message: hasKey ? "✅ Secret 加载成功！" : "❌ Secret 仍是 undefined",
    timestamp: new Date().toISOString(),
    envKeys: Object.keys(env).slice(0, 10)  // 显示部分 env 键名
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};