export async function fetchAPI(url) {
  const res = await fetch(url);
  return res.json();
}