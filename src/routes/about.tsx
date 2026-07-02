import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Emergina — Brand Protection & Growth from Erode, TN" },
      { name: "description", content: "Emergina is a digital marketing and brand protection studio from Tamil Nadu helping creators and companies stay visible and safe online." },
      { property: "og:title", content: "About Emergina" },
      { property: "og:description", content: "Meet the team defending and growing brands online." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="relative py-24">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-primary uppercase tracking-widest font-medium">About</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-bold">Built to <span className="text-gradient">defend and grow</span> the internet's best brands.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Emergina is a Tamil Nadu-based studio combining growth marketing with world-class brand protection. We work with creators, studios, D2C brands and SaaS teams across India and abroad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative rounded-3xl overflow-hidden border border-border">
          <img src={teamImg} alt="Emergina team at work" width={1600} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-3">
        {[
          { icon: Target, t: "Focused", d: "We only do three things. And we do them relentlessly." },
          { icon: Heart, t: "Human", d: "Every takedown is reviewed by a real person. No spray-and-pray." },
          { icon: Zap, t: "Fast", d: "Detection to takedown in hours, not weeks." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-3xl border border-border bg-card/60 p-8">
            <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center glow"><Icon size={20} className="text-primary-foreground" /></div>
            <h3 className="mt-6 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-card/60 p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold">Our story</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Founded in Erode, Tamil Nadu, Emergina began by helping regional creators fight impersonators on Instagram and pirates on Telegram. Today, we run growth campaigns for D2C brands, protect film releases from piracy, and safeguard hundreds of creator identities every month — all from a small, obsessive team that treats every client's brand like our own.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-90 transition">
            Work with us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
