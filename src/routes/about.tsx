import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import about from "@/assets/about-visual.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ristic Labs" },
      { name: "description", content: "Ristic Labs is the blockchain division of Ristic Innovations, founded in 2022 in Wilmington, Delaware." },
      { property: "og:title", content: "About Ristic Labs" },
      { property: "og:description", content: "Nurturing innovative blockchain solutions worldwide." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">// About</span>
        <h1 className="mt-3 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          A digital innovative ecosystem for <span className="text-gradient">blockchain</span>.
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-2">
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">Ristic Labs</span> is a division of
            Ristic Innovations, a company that aims to create a digital innovative
            ecosystem for blockchain-based applications and frameworks.
          </p>
          <p>
            Our focus is on fostering interdependent innovations and establishing a
            global hub for innovation — particularly in regions where competitive
            advantages for innovative solutions may be less pronounced.
          </p>
          <p>
            Our mission is to drive transformative change and serve as a catalyst for
            innovation farming and refinement. As the beacon of the Digital Innovative
            Ecosystem for Blockchain-based Applications and Frameworks, Ristic Labs is
            entrusted with the sole responsibility of nurturing innovative solutions
            within the blockchain technology domain.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
          <img src={about} alt="Blockchain lattice" loading="lazy" width={1280} height={1280} className="relative rounded-2xl border border-border" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { k: "Founded", v: "2022" },
            { k: "Headquarters", v: "Wilmington, Delaware" },
            { k: "Parent", v: "Ristic Innovations" },
          ].map((s) => (
            <div key={s.k} className="glow-card rounded-xl p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              <div className="mt-2 font-display text-2xl font-bold">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-4xl font-bold">Specialties</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Blockchain Services & Products", d: "End-to-end protocol engineering, smart contracts, dApps, and Web3 infrastructure." },
            { t: "Artificial Intelligence", d: "ML-powered analytics, intelligent automation, and AI integration with decentralized systems." },
            { t: "Immersive Technology", d: "AR/VR, metaverse environments, and spatial computing that bridges physical and digital worlds." },
            { t: "Supply Chain", d: "Decentralized traceability, logistics transparency, and trustless coordination across networks." },
          ].map((s) => (
            <div key={s.t} className="glow-card rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-4xl font-bold">Our principles</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { t: "Innovation farming", d: "We cultivate ideas like crops — sowing, refining, and harvesting them into deployable solutions." },
            { t: "Interdependent design", d: "Every protocol, product, and framework we ship is designed to compose with the broader ecosystem." },
            { t: "Global reach, local focus", d: "We invest where innovation has historically been overlooked — building hubs, not silos." },
            { t: "Engineering rigor", d: "Security, audits, and verification are first-class concerns from day one." },
          ].map((p) => (
            <div key={p.t} className="glow-card rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
