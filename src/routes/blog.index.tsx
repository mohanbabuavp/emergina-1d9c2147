import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const posts = [
  {
    slug: "spot-fake-instagram-profile",
    title: "How to spot a fake Instagram profile (and get it removed fast)",
    excerpt: "A creator's checklist for identifying impersonators, gathering proof, and filing a takedown that Meta actually approves.",
    date: "Mar 2025",
    read: "6 min read",
  },
  {
    slug: "dmca-basics-tamil-filmmakers",
    title: "DMCA basics for Tamil filmmakers: kill piracy in the first 72 hours",
    excerpt: "Why the release window matters, which platforms leak first (Telegram, Google Drive, Tamilrockers mirrors), and the takedown stack that works.",
    date: "Mar 2025",
    read: "8 min read",
  },
];

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog & Insights — Emergina" },
      { name: "description", content: "Playbooks on impersonation removal, anti-piracy takedowns, and digital marketing for creators and Indian brands." },
      { property: "og:title", content: "Emergina Blog — Brand protection & marketing insights" },
      { property: "og:description", content: "Playbooks on impersonation removal, anti-piracy takedowns, and digital marketing for creators and Indian brands." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">Insights</p>
          <h1 className="mt-2 text-5xl md:text-6xl font-bold">Blog & playbooks.</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">Field notes on brand protection, anti-piracy and marketing that actually works in India.</p>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 hover:bg-card/40 -mx-6 px-6 transition rounded-lg">
                <div className="max-w-2xl">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{p.date} · {p.read}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold group-hover:text-gradient transition">{p.title}</h2>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                </div>
                <ArrowRight className="shrink-0 group-hover:translate-x-1 transition" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}