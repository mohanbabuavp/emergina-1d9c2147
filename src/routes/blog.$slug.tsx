import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Post = {
  title: string;
  description: string;
  date: string;
  read: string;
  body: { h?: string; p?: string; list?: string[] }[];
};

const posts: Record<string, Post> = {
  "spot-fake-instagram-profile": {
    title: "How to spot a fake Instagram profile (and get it removed fast)",
    description: "A creator's checklist for identifying impersonators, gathering proof, and filing a takedown that Meta actually approves.",
    date: "March 2025",
    read: "6 min read",
    body: [
      { p: "Impersonators cost creators money, followers and reputation. If you have any kind of following in India, you will get cloned — the question is how fast you can spot and kill the fakes." },
      { h: "1. What a fake profile actually looks like" },
      { list: [
        "Handle uses your name with an extra dot, underscore, or number (yourname_, yourname.official, yourname01).",
        "Profile photo copied 1:1 from your grid, often flipped or slightly cropped.",
        "Follows 1000+ accounts, followed back by <50 (impersonators mass-follow your fans).",
        "DMs your audience with 'giveaway', 'collab', or 'crypto' pitches.",
      ]},
      { h: "2. Proof to collect before you report" },
      { list: [
        "Screenshots of the fake profile (handle URL visible).",
        "Screenshot of your original profile side-by-side.",
        "Government ID (passport, Aadhaar or driving licence) matching the name on your account.",
        "DMs the fake sent to your audience (if any).",
      ]},
      { h: "3. File the report the right way" },
      { p: "Use Instagram's Report an impersonation account form — not the in-app report button. In-app reports are triaged by automation and get dismissed. The form goes to a human review team and typically resolves within 24–72 hours." },
      { h: "4. When you need help" },
      { p: "If you're getting cloned repeatedly, or the fake has already scammed followers, DIY reporting isn't enough. Emergina runs 24/7 monitoring and files bulk takedowns across Meta, YouTube and Telegram for creators — usually resolving inside 48 hours." },
    ],
  },
  "dmca-basics-tamil-filmmakers": {
    title: "DMCA basics for Tamil filmmakers: kill piracy in the first 72 hours",
    description: "Why the release window matters, which platforms leak first (Telegram, Google Drive, Tamilrockers mirrors), and the takedown stack that works.",
    date: "March 2025",
    read: "8 min read",
    body: [
      { p: "The first 72 hours after a Tamil film release decide 60–70% of its total piracy exposure. Every hour a pirated copy stays up is money leaking out of your box office and OTT deal." },
      { h: "Where the leaks actually start" },
      { list: [
        "Telegram channels — largest single source in India, usually seeded within hours of the first show.",
        "Google Drive / MediaFire mirrors — shared inside those Telegram channels.",
        "Tamilrockers / Isaimini clones — SEO-optimised to rank on Google within a day.",
        "YouTube 'full movie' uploads — often reuploaded under altered titles to evade Content ID.",
      ]},
      { h: "The takedown stack that works" },
      { list: [
        "DMCA notices to hosts (Cloudflare, hosting providers) — kills the origin.",
        "Google delisting requests — removes them from search within 24 hours.",
        "Telegram abuse reports for each channel + admin.",
        "YouTube Content ID + manual copyright claims.",
        "Continuous monitoring — mirrors reappear for weeks after release.",
      ]},
      { h: "What you need before the release" },
      { list: [
        "Registered copyright ownership (or producer/distributor agreement).",
        "A designated agent to file DMCA (individual creators can do this themselves).",
        "A monitoring provider ready to run 24/7 during the release window.",
      ]},
      { h: "Why 72 hours matters" },
      { p: "Piracy traffic follows a hype curve. Kill the top 20 sources in the first three days and you cut total pirate views by more than half. Wait a week and the fight becomes whack-a-mole with hundreds of low-traffic mirrors." },
      { p: "Emergina runs anti-piracy for Tamil producers and independent filmmakers — DMCA, Telegram, Google delisting and YouTube claims from one dashboard. Ping us before your next release." },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPost,
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found — Emergina" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${post.title} — Emergina` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">Back to blog</Link>
    </div>
  ),
  errorComponent: () => <div className="mx-auto max-w-3xl px-6 py-32 text-center">Something went wrong. <Link to="/blog" className="text-primary">Back to blog</Link></div>,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={14} /> All posts</Link>
        <div className="mt-8 text-xs text-muted-foreground uppercase tracking-widest">{post.date} · {post.read}</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>
        <div className="mt-12 space-y-6 text-base leading-relaxed">
          {post.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="text-2xl font-semibold mt-8 mb-3">{b.h}</h2>}
              {b.p && <p className="text-muted-foreground">{b.p}</p>}
              {b.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {b.list.map((l, j) => <li key={j}>{l}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}