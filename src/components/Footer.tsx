import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ristic-labs-logo.png";

const socialLinks = [
  { href: "https://www.linkedin.com/company/ristic-labs", aria: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/ristic_labs", aria: "Twitter", icon: Twitter },
  { href: "https://github.com/ristic-labs", aria: "GitHub", icon: Github },
  { href: "https://www.instagram.com/ristic.labs", aria: "Instagram", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
              <img src={logo.src} alt="Ristic Labs" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Ristic Labs</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-slate-400">
              Empowering businesses with advanced Web3, AI, and blockchain solutions that transform digital experiences and accelerate growth.
            </p>
            <div className="mt-8 flex items-center gap-4 text-slate-400">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.aria}
                    className="transition-colors hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white">Services</h5>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link href="/services" className="transition-colors hover:text-white">Blockchain Services & Products</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Artificial Intelligence</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Immersive Technology</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Supply Chain</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white">Company</h5>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white">Contact Us</h5>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-slate-400" />
                <a href="mailto:contact@risticinnovations.technology" className="transition-colors hover:text-white">contact@risticinnovations.technology</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-slate-400" />
                <span>Wilmington, Delaware<br />United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ristic Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
