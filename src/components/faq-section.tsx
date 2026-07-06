import { Reveal } from "./reveal";

const faqs = [
  { q: "How long does an impersonation takedown take?", a: "Most fake Instagram, Facebook and YouTube profiles come down within 24–72 hours once we file with valid proof of identity. Complex cases (verified copycats, bot networks) may take up to 7 days." },
  { q: "Which platforms do you cover?", a: "Instagram, Facebook, YouTube, X (Twitter), LinkedIn, Threads, Telegram, Google Search, TikTok, plus any website via DMCA to the host or CDN." },
  { q: "Do you handle Telegram piracy channels?", a: "Yes. We file abuse reports with Telegram, DMCA notices to hosts and Google delisting requests together — that combination usually kills a leak channel within a few days." },
  { q: "What proof do you need to start a takedown?", a: "Government ID for individuals, or a company registration + brand ownership document (trademark, copyright, invoice). For films or courses we also need proof of authorship / distribution rights." },
  { q: "Do you work with clients outside Tamil Nadu?", a: "Yes. We serve creators, studios and D2C brands across India and internationally. All work is remote and reported over WhatsApp + email." },
  { q: "Is there a monthly retainer or one-time fee?", a: "Both. One-time takedowns are billed per case. Creators and studios usually pick a monthly retainer for 24/7 monitoring + unlimited takedowns." },
];

export function FaqSection() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">FAQ</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Answers, straight up.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Common questions we get from creators, studios and brand owners.</p>
        </Reveal>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}