// Assembles News & Updates from JSON + local media assets.
// Used by Newspage (cards) and NewsArticlePage (detail).
//
// Content: src/assets/json/news-and-updates.json
// Media:   src/assets/json/images/articles/
// When adding a new local image/PDF:
//   1. Put the file in src/assets/json/images/articles/
//   2. import it below and add it to mediaRegistry
//   3. Reference it from JSON with "srcKey": "<registryKey>"

import rawNews from "../../assets/json/news-and-updates.json";

import ExploreAg1 from "../../assets/json/images/articles/ExploreAg1.jpg";
import ExploreAg2 from "../../assets/json/images/articles/ExploreAg2.jpg";
import ExploreAg3 from "../../assets/json/images/articles/ExploreAg3.jpg";
import ExploreAg4 from "../../assets/json/images/articles/ExploreAg4.jpg";

/** Maps JSON media.srcKey → bundled asset URL */
const mediaRegistry = {
  ExploreAg1,
  ExploreAg2,
  ExploreAg3,
  ExploreAg4,
};

function resolveMedia(media = []) {
  return media.map((item) => {
    const { srcKey, ...rest } = item;
    return {
      ...rest,
      src: srcKey ? mediaRegistry[srcKey] : item.src,
    };
  });
}

export const newsItems = rawNews.items.map((item) => ({
  ...item,
  media: resolveMedia(item.media || []),
}));

export const getNewsArticleById = (id) =>
  newsItems.find((e) => e.id === Number(id));
