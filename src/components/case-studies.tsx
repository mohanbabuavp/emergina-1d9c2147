import { TrendingUp, ShieldCheck, ScanEye } from "lucide-react";
import { Counter } from "./counter";
import { Reveal } from "./reveal";

const cases = [
  { icon: ShieldCheck, num: 10000, suffix: "+", label: "Pirated links removed in 30 days", body: "For a Tamil film release — DMCA + Telegram + Google delisting stack." },
  { icon: ScanEye, num: 120, suffix: "+", label: "Fake profiles taken down for one creator", body: "Beauty creator with 800K followers, cleared across Instagram & Facebook." },
  { icon: TrendingUp, num: 4, suffix: "x", label: "ROAS lift on a political campaign", body: "Postal + digital combo across two Tamil Nadu constituencies." },
];

export function CaseStudies() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">Wins</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-2xl">Numbers that speak for the work.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map(({ icon: Icon, num, suffix, label, body }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card/40 backdrop-blur p-8">
                <Icon size={26} strokeWidth={1.5} />
                <div className="mt-6 text-5xl font-bold text-gradient">
                  <Counter to={num} suffix={suffix} />
                </div>
                <div className="mt-3 font-medium">{label}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}