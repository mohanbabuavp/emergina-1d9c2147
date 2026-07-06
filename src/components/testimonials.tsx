import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const reviews = [
  { name: "Rajesh Kumar", role: "Independent Filmmaker", body: "Our film leaked on Telegram within hours of release. Emergina killed 40+ mirror channels in 48 hours and kept monitoring for weeks. Straight up saved the release." },
  { name: "Priya S.", role: "Beauty Creator, 800K followers", body: "There were 12 fake Instagram accounts DMing my audience. The team got every single one removed and now monitors daily. Peace of mind is real." },
  { name: "Arun Prakash", role: "Founder, D2C Skincare Brand", body: "We were losing sales to knockoff Amazon listings and fake Meta ads. Their takedown + reporting workflow is tight, transparent and fast." },
  { name: "Meena R.", role: "Music Producer", body: "Pirated our album on 20+ sites. They handled DMCA, Google delisting, YouTube claims — all of it. Weekly reports actually make sense." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">What clients say</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Loved by creators & brands.</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[0,1,2,3,4].map(i => <Star key={i} size={16} className="fill-foreground text-foreground" />)}
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span>from client feedback</span>
            </div>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-border bg-card/40 backdrop-blur p-8">
                <div className="flex gap-1 mb-4">
                  {[0,1,2,3,4].map(i => <Star key={i} size={14} className="fill-foreground text-foreground" />)}
                </div>
                <blockquote className="text-base leading-relaxed">"{r.body}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-sm font-semibold text-primary-foreground">
                    {r.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">Names shortened for privacy. Verified Google reviews coming soon.</p>
      </div>
    </section>
  );
}