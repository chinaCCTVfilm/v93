export const onRequestGet: PagesFunction = async ({ env }) => {

  return new Response(JSON.stringify({
    hasKey: !!env.TMDB_API_KEY,
    keyPreview: env.TMDB_API_KEY ? env.TMDB_API_KEY.slice(0,5) : null
  }));
};