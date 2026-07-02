import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone, ScanEye, Shield, Search, TrendingUp, Users, FileWarning, Ban, Radar, Youtube, Film, Music } from "lucide-react";
import marketingImg from "@/assets/service-marketing.jpg";
import impersonationImg from "@/assets/service-impersonation.jpg";
import antipiracyImg from "@/assets/service-antipiracy.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Digital Marketing, Impersonation Removal, Anti-Piracy | Emergina" },
      { name: "description", content: "Explore Emergina's services: performance marketing, SEO, impersonation removal, and anti-piracy DMCA takedowns for creators and brands." },
      { property: "og:title", content: "Services — Emergina" },
      { property: "og:description", content: "Digital marketing, impersonation removal and anti-piracy — end-to-end." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    img: marketingImg,
    title: "Digital Marketing",
    intro: "Growth engineered. From performance ads to organic SEO, we build funnels that convert scrollers into customers.",
    features: [
      { icon: TrendingUp, t: "Performance Ads", d: "Meta, Google, YouTube — ROAS-obsessed." },
      { icon: Search, t: "SEO & Content", d: "Rank for keywords that actually sell." },
      { icon: Users, t: "Social & Community", d: "Daily content ops for real audience growth." },
    ],
  },
  {
    id: "impersonation-removal",
    icon: ScanEye,
    img: impersonationImg,
    title: "Impersonation Removal",
    intro: "Fake profiles hurt trust and revenue. We find them, prove them, and get them taken down — fast.",
    features: [
      { icon: Radar, t: "24/7 Monitoring", d: "AI + human review across every major platform." },
      { icon: FileWarning, t: "Verified Reports", d: "Documented takedown submissions that stick." },
      { icon: Ban, t: "Escalation", d: "Legal escalation for repeat offenders." },
    ],
  },
  {
    id: "anti-piracy",
    icon: Shield,
    img: antipiracyImg,
    title: "Anti-Piracy Takedowns",
    intro: "Pirated films, courses, music and IP disappear from Google, Telegram, YouTube, torrents and beyond.",
    features: [
      { icon: Film, t: "Film & OTT", d: "Protect theatrical & streaming releases." },
      { icon: Youtube, t: "YouTube & Meta", d: "Bulk DMCA + Content ID enforcement." },
      { icon: Music, t: "Music & Courses", d: "Guard your IP across every channel." },
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative py-24 border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-primary uppercase tracking-widest font-medium">Services</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-bold max-w-4xl mx-auto">Everything you need to <span className="text-gradient">grow and defend</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Three pillars, one dedicated team. Emergina works as an extension of your brand — always monitoring, always shipping.</p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="relative py-24 border-b border-border">
          <div className={`mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" aria-hidden />
              <img src={s.img} alt={s.title} width={1200} height={900} loading="lazy" className="relative rounded-3xl border border-border w-full h-auto" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground">
                <s.icon size={12} className="text-primary" /> 0{i + 1} / 03
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">{s.title}</h2>
              <p className="mt-4 text-muted-foreground text-lg">{s.intro}</p>
              <div className="mt-8 space-y-4">
                {s.features.map((f) => (
                  <div key={f.t} className="flex gap-4 rounded-2xl border border-border bg-card/50 p-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><f.icon size={16} className="text-primary-foreground" /></div>
                    <div>
                      <div className="font-semibold">{f.t}</div>
                      <div className="text-sm text-muted-foreground">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-90 transition">
                Get started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
