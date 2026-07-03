import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Emergina" width={40} height={40} loading="lazy" />
            <span className="text-xl font-semibold text-gradient">Emergina</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Digital marketing, impersonation removal, and anti-piracy protection built for creators and brands in India and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/_emergina/" },
              { Icon: Facebook, href: "https://www.facebook.com/emergina1" },
              { Icon: Youtube, href: "https://www.youtube.com/@Emergina" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/emergina/" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone size={14} className="mt-1" /><a href="tel:+918344647098" className="hover:text-foreground">+91 83446 47098</a></li>
            <li className="flex gap-2"><Mail size={14} className="mt-1" /><a href="mailto:mb@emergina.in" className="hover:text-foreground">mb@emergina.in</a></li>
            <li className="flex gap-2"><MapPin size={14} className="mt-1" /><span>Avalpoondurai, Erode, TN 638115</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Emergina. All rights reserved. · GSTIN 33DEBPM4017M1ZK
      </div>
    </footer>
  );
}
