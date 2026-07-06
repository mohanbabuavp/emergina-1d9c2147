import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

type City = {
  name: string;
  tagline: string;
  intro: string;
  focus: string[];
  local: string;
};

const cities: Record<string, City> = {
  chennai: {
    name: "Chennai",
    tagline: "Anti-piracy & impersonation removal in Chennai.",
    intro: "Chennai is the film, OTT and D2C capital of Tamil Nadu — and the number one target for piracy and brand impersonation in South India. Emergina protects Chennai-based creators, studios and startups with 24/7 monitoring and fast takedowns.",
    focus: [
      "Kollywood release-window anti-piracy (Telegram + DMCA + Google delisting)",
      "Impersonation removal for Chennai creators and influencers",
      "D2C brand protection on Amazon, Flipkart, Meta & Google Ads",
      "Political and campaign marketing across Chennai constituencies",
    ],
    local: "We've supported film releases from producers in T. Nagar, Kodambakkam and OMR studios — with post-release monitoring running for weeks after opening weekend.",
  },
  coimbatore: {
    name: "Coimbatore",
    tagline: "Digital marketing & brand protection in Coimbatore.",
    intro: "Coimbatore's textile, engineering and D2C brands are scaling online fast — and getting copied just as fast. Emergina helps Kovai founders grow their reach and shut down fakes on Instagram, Amazon and Facebook Marketplace.",
    focus: [
      "Impersonation removal for founders and manufacturers",
      "Amazon & Flipkart knockoff listing takedowns",
      "Digital marketing for D2C, textiles and B2B",
      "Postal & branding campaigns across Coimbatore district",
    ],
    local: "From RS Puram to Peelamedu, we work with Coimbatore SMEs to protect their brand and grow their pipeline online.",
  },
  erode: {
    name: "Erode",
    tagline: "Marketing & anti-piracy services based in Erode.",
    intro: "Emergina is headquartered in Erode. We support local businesses, creators and political campaigns across Erode district with the same infrastructure we run for national clients — face-to-face when you need it, and always available on WhatsApp.",
    focus: [
      "Branding and digital marketing for Erode businesses",
      "Postal marketing across Avalpoondurai, Perundurai, Bhavani and Gobichettipalayam",
      "Political campaign management for Erode constituencies",
      "Impersonation and anti-piracy for regional creators",
    ],
    local: "You'll find us at 34/1 Poovandivalasu, Avalpoondurai. Drop by, or book a call on WhatsApp.",
  },
};

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const city = cities[params.city.toLowerCase()];
    if (!city) throw notFound();
    return { city };
  },
  component: LocationPage,
  head: ({ loaderData, params }) => {
    const city = loaderData?.city;
    if (!city) return { meta: [{ title: "Location not found — Emergina" }, { name: "robots", content: "noindex" }] };
    const title = `${city.tagline} — Emergina`;
    return {
      meta: [
        { title },
        { name: "description", content: city.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: city.intro },
        { property: "og:url", content: `/locations/${params.city}` },
      ],
      links: [{ rel: "canonical", href: `/locations/${params.city}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold">Location not found</h1>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">Go home</Link>
    </div>
  ),
  errorComponent: () => <div className="mx-auto max-w-3xl px-6 py-32 text-center">Something went wrong.</div>,
});

function LocationPage() {
  const { city } = Route.useLoaderData() as { city: City };
  return (
    <>
      <section className="relative py-24 border-b border-border">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <MapPin size={12} /> Serving {city.name}, Tamil Nadu
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">{city.tagline}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{city.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-90 transition">
                Talk to our {city.name} team <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition">
                See all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative py-24 border-b border-border">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-sm text-primary font-medium uppercase tracking-widest">Focus in {city.name}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">What we handle for {city.name} clients.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {city.focus.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <li className="flex gap-3 rounded-2xl border border-border bg-card/40 backdrop-blur p-5 text-sm">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> {f}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-10 text-muted-foreground max-w-2xl">{city.local}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}