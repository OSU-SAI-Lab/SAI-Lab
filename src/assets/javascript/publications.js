import rawPublications from "../assets/json/publications.json";

export const publications = [...rawPublications].sort((a, b) => {
  const yearA = Number(a.year) || 0;
  const yearB = Number(b.year) || 0;

  // Sort newest → oldest
  return yearB - yearA;
});
