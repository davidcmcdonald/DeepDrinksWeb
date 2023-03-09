/* empty css                                */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderHead, d as renderComponent, e as renderSlot, f as addAttribute, g as createVNode, F as Fragment } from '../astro.773ac2fc.mjs';
import z from 'zod';

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="w-full bg-cover bg-center border-[#FF5C57] border-b-2" style="height:20rem; background-image: url(banner.png)">
  <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
    <div class="text-center"></div>
  </div>
</header>

<div class="mt-4 w-full">
  <h4 class="text-center mb-2 text-2xl">
    Listen or watch on your favourite app
  </h4>
  <div class="flex justify-center">
    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/deepdrinks" class="mr-2">
      <img class="w-[40px] h-[40px]" src="yt-icon.png"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/show/4TjeHzFi4JqcHZ06zx4aHK" class="mr-2">
      <img class="w-[40px] h-[40px]" src="spotify-icon.png">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://podcasts.apple.com/us/podcast/deep-drinks/id1633403813" class="mr-2">
      <img class="w-[40px] h-[40px]" src="ios-podcast-icon.png">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeepDrinksPod">
      <img class="w-[40px] h-[40px]" src="twitter.png">
    </a>
  </div>
</div>`;
}, "/Users/tom/projects/deep-drinks-web/src/components/Header.astro");

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-[#FF5C57] p-4">
  <a class="text-white" href="/">Home</a>
  <a class="text-white" href="/disclaimer"> Disclaimer</a>
</footer>`;
}, "/Users/tom/projects/deep-drinks-web/src/components/Footer.astro");

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { frontmatter, ...rest } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${frontmatter.title}</title>
  ${renderHead($$result)}</head>
  <body class="flex flex-col min-h-[100vh]">
    ${renderComponent($$result, "Header", $$Header, {})}
    <article class="p-4 flex-1">
      ${renderSlot($$result, $$slots["default"])}
    </article>

    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/tom/projects/deep-drinks-web/src/layouts/BaseLayout.astro");

const YoutubeResponseSchema = z.object({
  items: z.array(
    z.object({
      id: z.object({
        kind: z.enum(["youtube#video", "youtube#playlist"]),
        videoId: z.string().optional(),
        playlistId: z.string().optional()
      }),
      snippet: z.object({
        publishedAt: z.string(),
        channelId: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.object({
          default: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          }),
          medium: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          }),
          high: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          })
        }),
        channelTitle: z.string(),
        liveBroadcastContent: z.enum(["none", "upcoming"]),
        publishTime: z.string()
      })
    })
  )
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const YOUTUBE_API_KEY = "AIzaSyC0fd9Pd2g7gf_jyljVz_KKR4aJMqrrscI";
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=120, s-maxage=120, stale-while-revalidate=120"
  );
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCB9JcmYVd-oHcZyCNraCiug&part=snippet,id&order=date&maxResults=40`
  );
  const data = await response.json();
  const videos = YoutubeResponseSchema.parse(data).items;
  const upcoming = videos.filter((video) => {
    return video.snippet.liveBroadcastContent === "upcoming" && video.snippet.title.toLocaleLowerCase().includes("deep drinks podcast");
  });
  const previous = videos.filter((video) => {
    return video.snippet.liveBroadcastContent === "none" && video.snippet.title.toLocaleLowerCase().includes("deep drinks podcast");
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "frontmatter": {
    title: "Deep Drinks Podcast"
  } }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="p-4">
    <h2 class="text-2xl mb-4">Upcoming</h2>
    ${upcoming.map((video) => {
    const snip = video.snippet;
    return renderTemplate`<article class="flex mb-4 pb-4 border-b border-gray-500">
            <img class="w-[320px]"${addAttribute(`${snip.thumbnails.medium.url}`, "src")}>

            <h3 class="text-3xl ml-4 text-slate-600">${snip.title}</h3>

            <a target="_blank" rel="noopener noreferrer"${addAttribute(`https://www.youtube.com/watch?v=${video.id.videoId}`, "href")} class="block w-[320px]">
              Notify me
            </a>
          </article>`;
  })}
  </div><div class="p-4">
    <h2 class="text-2xl mb-4">Previus episodes</h2>
    <div class="grid grid-cols-4 gap-4">
      ${previous.map((video) => {
    const snip = video.snippet;
    return renderTemplate`<article>
              <img class="w-[320px]"${addAttribute(`${snip.thumbnails.medium.url}`, "src")}>

              <h3 class="text-1xl  text-slate-600">${snip.title}</h3>

              <a target="_blank" rel="noopener noreferrer"${addAttribute(`https://www.youtube.com/watch?v=${video.id.videoId}`, "href")} class="block w-[320px]">
                Notify me
              </a>
            </article>`;
  })}
    </div>
  </div>` })}`;
}, "/Users/tom/projects/deep-drinks-web/src/pages/index.astro");

const $$file = "/Users/tom/projects/deep-drinks-web/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h1 class=\"text-2xl\">\nDisclaimer\n</h1>\n<p>Deep Drinks Podcast (DDP) does not endorse the views or statements of any guest. DDP strives for deep conversations about deep topics, this includes harmful ideologies discussed responsibly.</p>\n<br>\n<h3 class=\"text-xl\">My Approach?</h3>\n<p>Deep Drinks is not a debate platform; my goal is to provide the best faith interpretation of the guest's ideas.</p>\n<br>\n<h3 class=\"text-xl\">Why Discuss Bad Ideas?</h3>\n<p>I believe that truth withstands scrutiny, and harmful ideas should be discussed. I worry that ostracisation tends to push those ostracised further into their dangerous ideologies and groups.</p>\n<br>\n<h3 class=\"text-xl\">My Stance?</h3>\n<p>I reject all forms of bigotry, racism, homophobia, and transphobia. I despise partisanism and believe all ideas should be evaluated based on their merits. I endeavour to engage in honest discourse and will not treat someone differently for immutable characteristics.</p>\n<br>\n<h3 class=\"text-xl\">Safe Space?</h3>\n<p>DDP conversations can often cause distress to listeners as a result of the subject matter (mental illness, religious intolerance, homophobia, bigotry etc.), and as a result, viewer discretion is advised. I do my best to give content warnings and label episodes to help viewers decide which episodes to listen to.</p>";

				const frontmatter = {"layout":"../layouts/BaseLayout.astro","title":"Disclaimer"};
				const file = "/Users/tom/projects/deep-drinks-web/src/pages/disclaimer.md";
				const url = "/disclaimer";
				function rawContent() {
					return "\n<h1 class=\"text-2xl\">\nDisclaimer\n</h1>\n<p>Deep Drinks Podcast (DDP) does not endorse the views or statements of any guest. DDP strives for deep conversations about deep topics, this includes harmful ideologies discussed responsibly.</p>\n<br />\n\n<h3 class=\"text-xl\">My Approach?</h3>\n<p>Deep Drinks is not a debate platform; my goal is to provide the best faith interpretation of the guest's ideas.</p>\n<br />\n\n<h3 class=\"text-xl\">Why Discuss Bad Ideas?</h3>\n<p>I believe that truth withstands scrutiny, and harmful ideas should be discussed. I worry that ostracisation tends to push those ostracised further into their dangerous ideologies and groups.</p>\n<br />\n\n<h3 class=\"text-xl\">My Stance?</h3>\n<p>I reject all forms of bigotry, racism, homophobia, and transphobia. I despise partisanism and believe all ideas should be evaluated based on their merits. I endeavour to engage in honest discourse and will not treat someone differently for immutable characteristics.</p>\n\n<br />\n\n<h3 class=\"text-xl\">Safe Space?</h3>\n<p>DDP conversations can often cause distress to listeners as a result of the subject matter (mental illness, religious intolerance, homophobia, bigotry etc.), and as a result, viewer discretion is advised. I do my best to give content warnings and label episodes to help viewers decide which episodes to listen to.</p>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BaseLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
