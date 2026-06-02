import { Link } from "@tanstack/react-router";
import logo from "@/assets/ristic-labs-logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/40 bg-background/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <img src={logo} alt="Ristic Labs" width={36} height={36} className="h-9 w-9 object-contain" />
              <span>Ristic <span className="text-primary">Labs</span></span>
            </Link>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A digital innovative ecosystem for blockchain-based applications and frameworks. A division of Ristic Innovations.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Wilmington, Delaware, United States · Est. 2022
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@risticinnovations.technology</li>
            <li>Wilmington, DE</li>
            <li><a href="https://risticinnovations.technology" target="_blank" rel="noopener noreferrer" className="hover:text-primary">risticinnovations.technology</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ristic Labs — A division of Ristic Innovations. All rights reserved.
      </div>
    </footer>
  );
}
