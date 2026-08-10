import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientDirectory = resolve(projectRoot, "dist");
const serverEntry = resolve(projectRoot, "dist-ssr", "entry-server.js");
const template = await readFile(resolve(clientDirectory, "index.html"), "utf8");
const { render } = await import(pathToFileURL(serverEntry));

const routes = [
  "/",
  "/research",
  "/publications",
  "/news-and-updates",
  "/people",
  "/workingwithus",
];

const siteUrl = "https://osu-sai-lab.github.io/SAI-Lab";
const ogImage = `${siteUrl}/social-preview.png`;

const metadata = {
  "/": {
    title: "Systems & AI Lab | The Ohio State University",
    description:
      "Advancing machine learning, distributed systems, and intelligent computation for real-world impact.",
  },
  "/research": {
    title: "Research | Systems & AI Lab | The Ohio State University",
    description:
      "Research areas and projects in machine learning, distributed systems, and intelligent computation.",
  },
  "/publications": {
    title: "Publications | Systems & AI Lab | The Ohio State University",
    description:
      "Peer-reviewed publications by the Systems and AI Lab at Ohio State.",
  },
  "/news-and-updates": {
    title: "News & Events | Systems & AI Lab | The Ohio State University",
    description:
      "Latest news, events, and updates from the Systems and AI Lab.",
  },
  "/people": {
    title: "People | Systems & AI Lab | The Ohio State University",
    description:
      "Members of the Systems and AI Lab at The Ohio State University.",
  },
  "/workingwithus": {
    title: "Working With Us | Systems & AI Lab | The Ohio State University",
    description:
      "Join our research team and contribute to cutting-edge work in Systems and AI.",
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function injectMetadata(html, route) {
  const page = metadata[route];
  const canonical =
    route === "/" ? `${siteUrl}/` : `${siteUrl}${route}/`;
  const tags = [
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<link rel="canonical" href="${canonical}" />`,
  ].join("\n    ");

  return html
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escapeHtml(page.title)}</title>`,
    )
    .replace("</head>", `    ${tags}\n  </head>`);
}

for (const route of routes) {
  const appHtml = render(route);
  const html = injectMetadata(
    template.replace("<!--app-html-->", appHtml),
    route,
  );
  const outputFile =
    route === "/"
      ? resolve(clientDirectory, "index.html")
      : resolve(clientDirectory, route.slice(1), "index.html");

  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, html);
  console.log(`pre-rendered ${route} -> ${outputFile}`);
}

// Keep a functional SPA fallback for dynamic detail routes. GitHub Pages will
// still return 404 for unknown paths; all core routes above have real files.
const fallbackHtml = template.replace("<!--app-html-->", "");
await writeFile(resolve(clientDirectory, "404.html"), fallbackHtml);
