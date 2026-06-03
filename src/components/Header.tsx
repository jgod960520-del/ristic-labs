import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ristic-labs-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const isActive = (to: string) => pathname === to;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <img src={logo.src} alt="Ristic Labs" width={36} height={36} className="h-9 w-9 object-contain" />
          <span>Ristic <span className="text-primary">Labs</span></span>
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-all ${
                isActive(l.to)
                  ? "border border-primary/80 bg-primary/5 text-primary shadow-[0_0_18px_rgba(139,92,246,0.18)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_var(--glow)]"
          >
            Get in touch
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/40 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-all ${
                isActive(l.to)
                  ? "border border-primary/80 bg-primary/5 text-primary shadow-[0_0_18px_rgba(139,92,246,0.18)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
