// Assembles Latest News from JSON + local media assets.
// Used by both LatestNews (cards) and ArticlePage (detail).
//
// Content: src/assets/json/latest-news.json
// Media:   src/assets/json/images/articles/
// When adding a new local image/PDF:
//   1. Put the file in src/assets/json/images/articles/
//   2. import it below and add it to mediaRegistry
//   3. Reference it from JSON with "srcKey": "<registryKey>"

import rawNews from "../../assets/json/latest-news.json";

import satyakiPoster from "../../assets/json/images/articles/satyaki_poster.jpg";
import ashPoster from "../../assets/json/images/articles/ash_poster.jpg";
import bathymetry from "../../assets/json/images/articles/Bathymetry_Poster.jpg";
import ashPosterPdf from "../../assets/json/images/articles/Ash_Poster.pdf";
import SatyakiAndAsh from "../../assets/json/images/articles/SatyakiAndAsh.JPG";
import SatyakiPresenting from "../../assets/json/images/articles/SatyakiPresenting.JPG";
import SatyakiWACV from "../../assets/json/images/articles/Satyaki_WACV.jpg";
import CSG from "../../assets/json/images/articles/CSG.jpeg";
import ExploreAg1 from "../../assets/json/images/articles/ExploreAg1.jpg";
import ExploreAg2 from "../../assets/json/images/articles/ExploreAg2.jpg";
import ExploreAg3 from "../../assets/json/images/articles/ExploreAg3.jpg";
import ExploreAg4 from "../../assets/json/images/articles/ExploreAg4.jpg";
import AgWirelessTeam from "../../assets/json/images/articles/agwireless-2026-team.jpg";
import AgWirelessWorkflow from "../../assets/json/images/articles/agwireless-2026-no-code-workflow.jpg";
import AgWirelessEdge from "../../assets/json/images/articles/agwireless-2026-edge-management.jpg";
import AgWirelessAward from "../../assets/json/images/articles/agwireless-2026-best-poster-award.jpg";
import AgWirelessCommunity from "../../assets/json/images/articles/agwireless-2026-community-engagement.jpg";

/** Maps JSON media.srcKey → bundled asset URL */
const mediaRegistry = {
  satyakiPoster,
  ashPoster,
  bathymetry,
  ashPosterPdf,
  SatyakiAndAsh,
  SatyakiPresenting,
  SatyakiWACV,
  CSG,
  ExploreAg1,
  ExploreAg2,
  ExploreAg3,
  ExploreAg4,
  AgWirelessTeam,
  AgWirelessWorkflow,
  AgWirelessEdge,
  AgWirelessAward,
  AgWirelessCommunity,
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

export const events = rawNews.items.map((item) => ({
  ...item,
  media: resolveMedia(item.media),
}));

export const getArticleById = (id) =>
  events.find((e) => e.id === Number(id));
