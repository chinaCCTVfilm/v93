export const onRequestGet: PagesFunction = async ({ env }) => {
  const hasKey = !!env.TMDB_API_KEY;
  
  return new Response(JSON.stringify({
    success: true,
    hasKey: hasKey,
    keyPreview: hasKey ? env.TMDB_API_KEY.slice(0, 15) + "..." : null,
    keyLength: hasKey ? env.TMDB_API_KEY.length : 0,
    message: hasKey 
      ? "✅ Secret 加载成功！可以继续下一步" 
      : "❌ Secret 仍是 undefined",
    timestamp: new Date().toISOString()
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};