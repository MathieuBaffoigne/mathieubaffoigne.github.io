import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => data.lang === "fr" && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Blog — Mathieu Baffoigne",
    description: "Notes sur le développement web, l'architecture, et ce que j'apprends en construisant des projets.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.replace(/^fr\//, "")}/`,
    })),
    customData: "<language>fr-fr</language>",
  });
}
