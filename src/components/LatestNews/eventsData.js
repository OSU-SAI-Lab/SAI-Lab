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

import FarmScienceReview2026Demo from "../../assets/json/images/articles/farm-science-review-2026-demo-setup.jpeg";
import FarmScienceReview2026Sensing from "../../assets/json/images/articles/farm-science-review-2026-camera-rig.jpeg";
import FarmScienceReview2026Visitors from "../../assets/json/images/articles/farm-science-review-2026-visitor-engagement.jpeg";
import FarmScienceReview2026Presentation from "../../assets/json/images/articles/farm-science-review-2026-team-presentation.jpeg";

import HackOhio2026Panda from "../../assets/json/images/articles/hackohio-2026-panda-icicle.jpg";
import HackOhio2026Shearer from "../../assets/json/images/articles/hackohio-2026-shearer-precision-agriculture.jpg";
import HackOhio2026Brijesh from "../../assets/json/images/articles/hackohio-2026-brijesh-presentation.jpg";
import HackOhio2026StudentTeam from "../../assets/json/images/articles/hackohio-2026-student-team-presentation.jpg";

import HackOhio2026Award1 from "../../assets/json/images/articles/hackohio-2026-team-award-1.jpg";
import HackOhio2026Award2 from "../../assets/json/images/articles/hackohio-2026-team-award-2.jpg";
import HackOhio2026Group from "../../assets/json/images/articles/hackohio-2026-group-photo.jpg";

import HackOhio2026FirstPlace from "../../assets/json/images/articles/hackohio-2026-first-place.jpg";

import Hsio2026GroupPhoto from "../../assets/json/images/articles/hsio-2026-group-photo.jpg";
import Hsio2026Mentoring from "../../assets/json/images/articles/hsio-2026-mentoring.jpg";
import Hsio2026TeamResults from "../../assets/json/images/articles/hsio-2026-team-results.jpg";
import Hsio2026ChallengeTeam from "../../assets/json/images/articles/hsio-2026-challenge-team.jpg";

import Sail2026FlashTalkWinners from "../../assets/json/images/articles/sail-2026-flash-talk-winning-team.jpg";
import Sail2026PosterTeam from "../../assets/json/images/articles/sail-2026-poster-team.jpg";
import Sail2026BoothConversation from "../../assets/json/images/articles/sail-2026-booth-conversation.jpg";
import Sail2026ResearchDiscussion from "../../assets/json/images/articles/sail-2026-research-discussion.jpg";
import Sail2026PosterVisitors from "../../assets/json/images/articles/sail-2026-poster-visitors.jpg";
import Sail2026IcicleTable from "../../assets/json/images/articles/sail-2026-icicle-table.jpg";
import Sail2026PostersPortrait from "../../assets/json/images/articles/sail-2026-posters-portrait.jpg";

/** Maps JSON media.srcKey → bundled asset URL */
const mediaRegistry = {
  Hsio2026GroupPhoto,
  Hsio2026Mentoring,
  Hsio2026TeamResults,
  Hsio2026ChallengeTeam,

  Sail2026FlashTalkWinners,
  Sail2026PosterTeam,
  Sail2026BoothConversation,
  Sail2026ResearchDiscussion,
  Sail2026PosterVisitors,
  Sail2026IcicleTable,
  Sail2026PostersPortrait,

  HackOhio2026FirstPlace,
  HackOhio2026Award1,
  HackOhio2026Award2,
  HackOhio2026Group,

  HackOhio2026Panda,
  HackOhio2026Shearer,
  HackOhio2026Brijesh,
  HackOhio2026StudentTeam,

  FarmScienceReview2026Demo,
  FarmScienceReview2026Sensing,
  FarmScienceReview2026Visitors,
  FarmScienceReview2026Presentation,
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
  awardMedia: resolveMedia(item.awardMedia || []),
  media: resolveMedia(item.media),
}));

export const getArticleById = (id) =>
  events.find((e) => e.id === Number(id));
