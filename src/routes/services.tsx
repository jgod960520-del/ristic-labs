import Head from "next/head";
import { SiteShell } from "@/components/SiteShell";
import { Boxes, Code2, Cpu, Globe2, Layers, LineChart, Shield, Workflow } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Layers, t: "Protocol Engineering", d: "L1 and L2 architecture, consensus design, bridges, and rollup infrastructure tailored to your use case." },
    { icon: Code2, t: "Smart Contract Development", d: "Solidity, Rust, and Move — audited, formally verified, and gas-optimized for production." },
    { icon: Boxes, t: "dApp & Frontend", d: "Wallet-native interfaces built with React and modern Web3 stacks." },
    { icon: Shield, t: "Security & Auditing", d: "Threat modeling, manual review, fuzzing, and ongoing security partnerships." },
    { icon: Globe2, t: "Infrastructure & Nodes", d: "Validators, RPC, indexers, and observability for production blockchain networks." },
    { icon: Workflow, t: "Tokenomics & Design", d: "Mechanism design, incentive modeling, and governance frameworks." },
    { icon: Cpu, t: "Research & R&D", d: "Cryptography, zero-knowledge, MEV, and emerging primitives — refined into shipping products." },
    { icon: LineChart, t: "Advisory & Strategy", d: "Roadmap, ecosystem strategy, and go-to-market for blockchain ventures." },
  ];

  return (
    <>
      <Head>
        <title>Services — Ristic Labs</title>
        <meta name="description" content="Blockchain protocol engineering, smart contracts, dApp development, audits, and Web3 infrastructure." />
        <meta property="og:title" content="Services — Ristic Labs" />
        <meta property="og:description" content="End-to-end blockchain engineering and research services." />
      </Head>
      <SiteShell>
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Services</span>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold md:text-6xl">
            From research to <span className="text-gradient">production</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A full-stack blockchain partner — protocol to product, audit to ops.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, t, d }) => (
              <div key={t} className="glow-card group rounded-xl p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-3xl font-bold md:text-4xl">Specialties</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Blockchain Services & Products", d: "Protocol engineering, smart contracts, dApps, and Web3 infrastructure." },
              { t: "Artificial Intelligence", d: "Machine learning, predictive analytics, and intelligent automation for blockchain ecosystems." },
              { t: "Immersive Technology", d: "AR/VR experiences, metaverse environments, and spatial computing applications." },
              { t: "Supply Chain", d: "End-to-end traceability, transparency, and decentralized logistics solutions." },
            ].map((s) => (
              <div key={s.t} className="glow-card rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-16">
            <h2 className="text-3xl font-bold md:text-4xl">How we engage</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-4">
              {[
                { n: "01", t: "Discover", d: "Workshop your goals, constraints, and the problem space." },
                { n: "02", t: "Architect", d: "Design protocols, contracts, and systems with audit-readiness baked in." },
                { n: "03", t: "Build", d: "Ship in tight, instrumented iterations with continuous reviews." },
                { n: "04", t: "Operate", d: "Monitor, audit, and evolve once you're live." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-mono text-sm text-primary">{s.n}</div>
                  <div className="mt-2 font-display text-xl font-semibold">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
