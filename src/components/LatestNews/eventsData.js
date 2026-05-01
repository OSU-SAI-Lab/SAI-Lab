// src/components/EventsPage/eventsData.js
// Single source of truth — used by both LatestNews (cards) and ArticlePage (detail)

// ── Event 2 assets ──
import satyakiPoster from "./images/satyaki_poster.jpg";
import ashPoster from "./images/ash_poster.jpg";
import bathymetry from "./images/Bathymetry_Poster.jpg";
import ashPosterPdf from "./pdfs/Ash_Poster.pdf";

// ── Event 3 assets (Farm Science Review) ──
// TODO: Get actual images from Harikesh or Parth and update these imports
// import fsrBooth from "./images/fsr_booth.jpg";
// import fsrFieldDemo from "./images/fsr_field_demo.jpg";
// import fsrTeam from "./images/fsr_team.jpg";

import SatyakiAndAsh from "./images/SatyakiAndAsh.JPG"
import SatyakiAndAsh2 from "./images/SatyakiAndAsh2.JPG"
import SatyakiPresenting from "./images/SatyakiPresenting.JPG"
import SatyakiPresenting2 from "./images/SatyakiPresenting2.JPG"
import SatyakiWACV from "./images/Satyaki_WACV.jpg"



export const events = [

    {
      id: 3,
      title: "SAI Lab and ICICLE Showcase AI-Enabled Agriculture Tools at Farm Science Review 2025",
      type: "Exhibition / Demo",
      date: "September 2025",
      time: null,
      mode: "In-Person",
      location: "Molly Caren Agricultural Center, London, Ohio",
      description:
        "Members of the SAI Lab team, part of the NSF ICICLE AI Institute, demonstrated AI-enabled digital agriculture tools at Farm Science Review 2025, highlighting practical HPC and AI workflows for on-farm decision-making.",
      link: null,

      author: "SAI Lab",
      body: `
        <p>
          Members of the SAI Lab team, who are also part of the NSF ICICLE AI
          Institute, showcased AI-enabled digital agriculture tools at Farm
          Science Review 2025, held September 16–18 at Ohio State's Molly Caren
          Agricultural Center in London, Ohio. The three-day show brings together
          more than 100,000 farmers, agribusiness professionals, and students to
          explore new technologies, management practices, and research-based
          recommendations from Ohio State and partners.
        </p>
        <p>
          At the ICICLE exhibit, visitors saw how high-performance computing (HPC)
          and artificial intelligence can support practical decision-making on the
          farm, from crop and soil monitoring to equipment efficiency.
          Demonstrations highlighted how ICICLE's software components and data
          pipelines connect field data with AI models, enabling timely insights
          that can help farmers manage inputs, reduce risk, and improve
          profitability.
        </p>
        <p>
          Hands-on demos included AI-powered tools for field imagery analysis,
          object detection, and decision support that can be integrated into
          existing farm operations. SAI Lab researchers—who contribute to the NSF
          ICICLE AI Institute—and extension specialists were on-site to answer
          questions, gather feedback from producers, and discuss opportunities for
          on-farm collaboration and testing.
        </p>
        <p>
          By bringing these capabilities to Farm Science Review, the SAI Lab and
          ICICLE team aims to make advanced AI and HPC systems more accessible,
          interoperable, and impactful for producers of all sizes. The exhibit
          emphasized practical workflows that move from data collection in fields
          to actionable recommendations that support sustainable and resilient
          agricultural systems.
        </p>
      `,
      media: [
        // {
        //   type: "image",
        //   src: fsrBooth,
        //   alt: "SAI Lab and ICICLE booth at Farm Science Review with farmers engaging with demos",
        //   caption:
        //     "SAI Lab researchers from the NSF ICICLE AI Institute demonstrate AI-enabled decision tools with Ohio farmers at Farm Science Review 2025.",
        // },
        // {
        //   type: "image",
        //   src: fsrFieldDemo,
        //   alt: "Close-up of AI-powered field technology demo at Farm Science Review",
        //   caption:
        //     "Producers explore ICICLE's AI and HPC-powered workflows for crop and field management at the Molly Caren Agricultural Center.",
        // },
        // {
        //   type: "image",
        //   src: fsrTeam,
        //   alt: "SAI Lab team members and extension partners at Farm Science Review",
        //   caption:
        //     "SAI Lab team members and ICICLE contributors at the Farm Science Review 2025 exhibit.",
        // },
      ],
      tags: ["Digital Agriculture", "HPC", "AI", "Outreach", "ICICLE"],

      // TODO: Update with actual member names/profiles from Harikesh or Parth
      members: [
        {
          name: "Harikesh Sunkara",
          profileUrl: "https://osu-sai-lab.github.io/SAI-Lab/people",
        },
        {
          name: "Parth Patel",
          profileUrl: "https://osu-sai-lab.github.io/SAI-Lab/people",
        },
      ],
    },

    {
      id: 1,
      title:
        "ICICLE Mentors High School Students for the Presidential AI Challenge",
      type: "Outreach / Mentorship",
      date: "January 2026",
      time: null,
      mode: "In-Person",
      location: "The Ohio State University",
      description:
        "ICICLE researchers mentored high school students participating in the Presidential AI Challenge, guiding teams through problem formulation, ethical AI considerations, and solution development.",
      link: "https://icicle.osu.edu/news/2026/01/icicle-mentors-high-school-students-presidential-ai-challenge",

      author: "ICICLE Communications",
      body: `
        <p>
          Researchers from the ICICLE AI Institute at The Ohio State University
          dedicated their time and expertise to mentoring high school students
          participating in the prestigious Presidential AI Challenge. Over the
          course of several weeks, ICICLE team members guided student teams
          through the end-to-end process of formulating real-world problems,
          designing responsible AI solutions, and presenting their work to a
          panel of judges.
        </p>
        <p>
          The Presidential AI Challenge is a national competition that encourages
          young learners to explore the transformative potential of artificial
          intelligence while grappling with the ethical considerations that come
          with deploying these technologies. Students were tasked with identifying
          a problem in their community and proposing an AI-driven solution that
          balances innovation with fairness, transparency, and accountability.
        </p>
        <p>
          ICICLE mentors helped students refine their ideas, navigate data
          collection and preprocessing, and critically evaluate the societal
          impacts of their proposals. The mentorship sessions also introduced
          students to core concepts in cyberinfrastructure, giving them a
          glimpse into the large-scale computing systems that power modern AI
          research.
        </p>
        <p>
          "Working with these students was incredibly inspiring," said one of the
          ICICLE mentors. "Their creativity and eagerness to learn reminds us why
          outreach is such a vital part of our mission."
        </p>
      `,
      media: [
        {
          type: "image",
          src: "/images/articles/presidential-ai-challenge-1.jpg",
          alt: "ICICLE mentors working with high school students",
          caption: "ICICLE researchers guide student teams at Ohio State.",
        },
        {
          type: "image",
          src: "/images/articles/presidential-ai-challenge-2.jpg",
          alt: "Students presenting their AI solutions",
          caption: "Student teams present their AI-driven community solutions.",
        },
        {
          type: "pdf",
          src: "/documents/presidential-ai-challenge-overview.pdf",
          alt: "Presidential AI Challenge Overview",
          caption: "Program overview and guidelines (PDF).",
        },
      ],
      tags: ["Outreach", "Mentorship", "K-12", "AI Ethics"],

      members: [
        {
          name: "Mrunal Hole",
          profileUrl: "https://www.linkedin.com/in/mrunalhole/",
        },
        {
          name: "Naveen Kamath",
          profileUrl: "https://kamaths.info",
        },
        {
          name: "Rishi Makineni",
          profileUrl: "https://www.linkedin.com/in/rishikesh-makineni/",
        },
      ],
    },

    

  // Add more events here — one object serves both the card and the article page
  {
    id: 2,
    title: "SAI Lab Student Presents Research at IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    type: "Research Presentation",
    date: "March 2026",
    time: null,
    mode: "In-Person",
    location: "Tucson, AZ",
    description:
      "SAI Lab graduate researcher, Satyaki Roy Chowdhury, presented posters on satellite bathymetry at WACV.",
    link: null,

    author: "SAI Lab",
    body: `
      <p>
        Satyaki Roy Chowdhury, a graduate researchers from the Systems and AI (SAI) Lab, presented his work at the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2026), held in Tucson, Arizona.
      </p>
      <p>
      WACV is the premier international computer vision event organized jointly by the IEEE and the Computer Vision Foundation (CVF), comprising the main conference and several co-located workshops and tutorials. It is ranked among the top ten venues in the Computer Vision and Pattern Recognition category according to Google Scholar's H5-index, and has consistently held a CORE ranking of A. Proceedings are published by IEEE and indexed in the IEEE Xplore Digital Library, giving accepted papers broad visibility across the global research community.
      </p>

      <p>
        Satyaki Roy Chowdhury presented "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel‑2," which examines the use of multispectral satellite data for depth estimation and improved understanding of aquatic environments.
      </p>
    `,
    media: [
      {
        type: "image",
        src: SatyakiPresenting,
        alt: "Satyaki Roy Chowdhury presenting his poster on bathymetry",
        caption:
          "Satyaki Roy Chowdhury presents his research on Sentinel‑2 bathymetry.",
      },
      {
        type: "image",
        src: SatyakiWACV,
        alt: "Satyaki Roy Chowdhury presents his research on Sentinel‑2 bathymetry.",
        caption:
          "Satyaki Roy Chowdhury presents his research on Sentinel‑2 bathymetry.",
      },
      {
          type: "image",
          src: SatyakiAndAsh,
          alt: "Satyaki Roy Chowdhury and Aswathnarayanan Radhakrishnan",
          caption:
            "Satyaki Roy Chowdhury and Aswathnarayanan Radhakrishnan",
        },
    ],
    tags: ["Research", "Remote Sensing", "Geospatial AI", "Graduate"],

    members: [
      {
        name: "Satyaki Roy Chowdhury",
        profileUrl: "https://engineering.osu.edu/people/chowdhury.207",
      },
    ],
  },
  {
    id: 4,
    title: "SAI Lab Students Present Research at CSE Graduate Visit Day",
    type: "Research Presentation",
    date: "March 2026",
    time: null,
    mode: "In-Person",
    location: "The Ohio State University, CSE Department",
    description:
      "SAI Lab graduate researchers Satyaki Roy Chowdhury and Aswathnarayanan Radhakrishnan presented posters on satellite bathymetry and geospatial AI at CSE Graduate Visit Day.",
    link: null,

    author: "SAI Lab",
    body: `
      <p>
        Two graduate researchers from the Systems and AI (SAI) Lab, Satyaki Roy
        Chowdhury and Aswathnarayanan Radhakrishnan, presented their work at the
        recent CSE Graduate Visit Day.
      </p>
      <p>
        Satyaki Roy Chowdhury presented <em>"From Bands to Depth: Understanding
        Bathymetry Decisions on Sentinel‑2,"</em> which examines the use of
        multispectral satellite data for depth estimation and improved
        understanding of aquatic environments.
      </p>
      <p>
        Aswathnarayanan Radhakrishnan presented <em>"Mining Earth's Digital
        Strata for Geospatial AI: Bridging Data Collection, Synthesis, and
        Self‑Training for Intelligent Earth Observation,"</em> focusing on
        advancing geospatial AI through integrated data pipelines and
        self-training frameworks.
      </p>
      <p>
        Their posters reflect the SAI Lab's commitment to advancing research at
        the intersection of artificial intelligence, remote sensing, and Earth
        systems science.
      </p>
    `,
    media: [
      {
        type: "image",
        src: satyakiPoster,
        alt: "Satyaki Roy Chowdhury presenting his poster on bathymetry",
        caption:
          "Satyaki Roy Chowdhury presents his research on Sentinel‑2 bathymetry.",
      },
      {
        type: "image",
        src: ashPoster,
        alt: "Aswathnarayanan Radhakrishnan presenting his poster on geospatial AI",
        caption:
          "Aswathnarayanan Radhakrishnan presents his work on geospatial AI pipelines.",
      },
      {
          type: "image",
          src: bathymetry,
          alt: "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel‑2",
          caption:
            "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel‑2",
        },
        {
          type: "pdf",
          src: ashPosterPdf,
          alt: "Ash's Poster",
          caption: "Ash's Poster",
        },
    ],
    tags: ["Research", "Remote Sensing", "Geospatial AI", "Graduate"],

    members: [
      {
        name: "Satyaki Roy Chowdhury",
        profileUrl: "https://engineering.osu.edu/people/chowdhury.207",
      },
      {
        name: "Aswathnarayanan Radhakrishnan",
        profileUrl: "https://www.linkedin.com/in/radhakrishnan97/",
      },
    ],
  },
];

// Helper lookup for ArticlePage: find by id from the URL param
export const getArticleById = (id) =>
  events.find((e) => e.id === Number(id));