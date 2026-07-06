import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Megaphone, ScanEye, Sparkles, CheckCircle2 } from "lucide-react";
import { ThreeHero } from "@/components/three-hero";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Emergina — Digital Marketing, Impersonation Removal & Anti-Piracy" },
      { name: "description", content: "Grow, protect and defend your brand online. Emergina delivers digital marketing, impersonation removal, and anti-piracy takedowns from Erode, Tamil Nadu." },
      { property: "og:title", content: "Emergina — Protect. Promote. Prevail." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} aria-hidden />
        <ThreeHero />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
              <Sparkles size={12} className="text-primary" /> Trusted brand protection since day one
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Protect. <span className="text-gradient">Promote.</span><br /> Prevail online.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Emergina combines aggressive digital marketing with impersonation removal and anti-piracy takedowns — so your brand grows without losing revenue to fakes and pirates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-90 transition">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium hover:border-primary transition">
                Explore services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: 10000, suffix: "+", v: "Takedowns" },
                { n: 250, suffix: "+", v: "Brands" },
                { n: 24, suffix: "/7", v: "Monitoring" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    <Counter to={s.n} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block h-[520px]" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-widest">What we do</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-2xl">What we do.</h2>
              <p className="mt-4 text-muted-foreground max-w-xl">Marketing that moves brands. Protection that defends them.</p>
            </div>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">All services <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-14 grid gap-px md:grid-cols-3 bg-border rounded-3xl overflow-hidden border border-border">
            {[
              { icon: Megaphone, title: "Marketing", body: "Branding, digital, postal & political campaigns — built to move audiences and win attention.", tags: ["Branding", "Digital", "Postal", "Political"] },
              { icon: ScanEye, title: "Impersonation Removal", body: "We hunt down fake profiles and get them removed across every platform.", tags: ["Instagram", "Facebook", "YouTube"] },
              { icon: Shield, title: "Anti-Piracy Takedowns", body: "DMCA & platform takedowns for pirated films, courses, music and IP.", tags: ["DMCA", "Telegram", "Google"] },
            ].map(({ icon: Icon, title, body, tags }) => (
              <div key={title} className="group relative bg-background p-8 md:p-10 transition hover:bg-card">
                <Icon size={28} strokeWidth={1.5} className="text-foreground" />
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-widest">How we work</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">A relentless system built for creators & brands.</h2>
            <p className="mt-6 text-muted-foreground">From daily monitoring to weekly campaign optimisation, our team runs a tight operating system so nothing slips through.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Deep audit of your brand footprint & piracy exposure",
                "24/7 detection with human + automated review",
                "Fast takedowns across Google, Meta, YouTube, Telegram & more",
                "Growth playbook: ads, SEO, content, community",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm"><CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" aria-hidden />
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 space-y-6">
              {[
                { n: "01", t: "Discover", d: "We map your assets, keywords, and infringement surface." },
                { n: "02", t: "Deploy", d: "Campaigns go live. Monitoring goes 24/7." },
                { n: "03", t: "Defend", d: "We remove fakes, pirates and copies at scale." },
                { n: "04", t: "Report", d: "Weekly transparent dashboards & wins." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="text-2xl font-bold text-gradient w-12">{s.n}</div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 backdrop-blur p-12 md:p-16 text-center">
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} aria-hidden />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold">Ready to own your <span className="text-gradient">digital space?</span></h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Book a free 20-minute discovery call. We'll audit your brand's exposure and show you exactly where the leaks are.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-medium text-primary-foreground glow hover:opacity-90 transition">
                Book discovery call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
