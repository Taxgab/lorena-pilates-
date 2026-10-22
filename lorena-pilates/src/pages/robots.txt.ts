import type { APIRoute } from "astro";

// Search, retrieval, user-requested and agentic crawlers. These are the classes
// that determine whether an AI engine can read and cite the site.
const CITATION_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "claude-code",
  "PerplexityBot",
  "Perplexity-User",
  "YouBot",
  "DuckAssistBot",
  "MistralAI-User",
  "Googlebot",
  "Google-Agent",
  "bingbot",
];

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site
    ? new URL("sitemap-index.xml", site).toString()
    : "/sitemap-index.xml";

  const crawlBots = CITATION_BOTS.map((token) => `User-agent: ${token}`).join("\n");

  const body = `# Search, retrieval, user-requested and agentic crawlers: needed for AI answers and citations.
# Written explicitly even though the wildcard allows them: it documents intent and
# survives a future edit that adds a restrictive rule.
${crawlBots}
Allow: /

User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
