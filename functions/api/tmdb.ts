export const onRequestGet: PagesFunction = async ({ env }) => {
  const hasKey = !!env.TMDB_API_KEY;

  return new Response(JSON.stringify({
    debug: true,
    hasKey: hasKey,
    keyPreview: hasKey ? env.TMDB_API_KEY.slice(0, 20) + "..." : "NO_KEY",
    message: hasKey ? "✅ KEY LOADED SUCCESSFULLY" : "❌ KEY IS UNDEFINED",
    timestamp: new Date().toISOString()
  }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
};