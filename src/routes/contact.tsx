import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Emergina — Erode, Tamil Nadu" },
      { name: "description", content: "Reach Emergina for digital marketing, impersonation removal and anti-piracy. Call +91 83446 47098 or email mb@emergina.in." },
      { property: "og:title", content: "Contact Emergina" },
      { property: "og:description", content: "Let's protect and grow your brand — get in touch." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative py-24 border-b border-border">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-primary uppercase tracking-widest font-medium">Contact</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-bold">Let's <span className="text-gradient">talk.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">Tell us about your brand. We'll reply within 24 hours with a free audit and next steps.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card/60 p-8 md:p-10 space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-muted-foreground">Your name</span>
                <input required className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 focus:border-primary outline-none" />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">Email</span>
                <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 focus:border-primary outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-muted-foreground">Service you need</span>
              <select className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 focus:border-primary outline-none">
                <option>Digital Marketing</option>
                <option>Impersonation Removal</option>
                <option>Anti-Piracy Takedowns</option>
                <option>All of the above</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Tell us about your brand</span>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 focus:border-primary outline-none" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-90 transition">
              {sent ? <><CheckCircle2 size={16} /> Message received</> : <><Send size={16} /> Send message</>}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, t: "Call", v: "+91 83446 47098", href: "tel:+918344647098" },
            { icon: Mail, t: "Email", v: "mb@emergina.in", href: "mailto:mb@emergina.in" },
            { icon: MapPin, t: "Visit", v: "34/1, Poovandivalasu, Avalpoondurai, Erode, Tamil Nadu 638115", href: "https://g.page/r/CcuLglS_spyJEAE/" },
          ].map(({ icon: Icon, t, v, href }) => (
            <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5 hover:border-primary transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Icon size={16} className="text-primary-foreground" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                <div className="mt-1 text-sm text-foreground">{v}</div>
              </div>
            </a>
          ))}

          <div className="rounded-2xl overflow-hidden border border-border h-64">
            <iframe
              title="Emergina location"
              src="https://www.google.com/maps?q=Poovandivalasu,+Avalpoondurai,+Erode,+Tamil+Nadu+638115&output=embed"
              className="w-full h-full grayscale-[30%] contrast-125"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">GSTIN 33DEBPM4017M1ZK</p>
        </div>
      </section>
    </>
  );
}
