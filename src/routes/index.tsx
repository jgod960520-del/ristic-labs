import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Boxes, Code2, Globe2, Layers, Shield, Zap } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import logo from "@/assets/ristic-labs-logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ristic Labs — Digital Innovative Ecosystem for Blockchain</title>
        <meta name="description" content="Ristic Labs is the blockchain innovation division of Ristic Innovations, building next-generation applications and frameworks from Wilmington, Delaware." />
        <meta property="og:title" content="Ristic Labs — Blockchain Innovation" />
        <meta property="og:description" content="Nurturing innovative solutions within the blockchain technology domain." />
      </Head>
      <SiteShell>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:gap-8 lg:pt-32">
            <div className="flex flex-col justify-center">
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                A Division of Ristic Innovations
              </span>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                The beacon of <span className="text-gradient">blockchain</span> innovation.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Ristic Labs is a specialized division entrusted with nurturing innovative
                solutions within the blockchain technology domain — fostering a global hub
                for innovation farming and refinement.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_32px_var(--glow)]"
                >
                  Explore services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 font-medium backdrop-blur hover:border-primary/50"
                >
                  Join the lab
                </Link>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
                {[
                  { k: "2022", v: "Founded" },
                  { k: "DE, USA", v: "Headquarters" },
                  { k: "Global", v: "Innovation hub" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-2xl font-bold text-foreground">{s.k}</dt>
                    <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
              <div className="galaxy-shell relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl" aria-label="Animated galaxy with blockchain tokens orbiting the earth">
                <div className="galaxy-stars" aria-hidden />
                <div className="galaxy-orbit orbit-one" aria-hidden />
                <div className="galaxy-orbit orbit-two" aria-hidden />
                <div className="galaxy-orbit orbit-three" aria-hidden />
                <div className="galaxy-token token-btc"><span className="galaxy-token-logo token-logo-btc">₿</span>BTC</div>
                <div className="galaxy-token token-eth"><span className="galaxy-token-logo token-logo-eth">Ξ</span>ETH</div>
                <div className="galaxy-token token-sol"><span className="galaxy-token-logo token-logo-sol">S</span>SOL</div>
                <div className="galaxy-token token-dot"><span className="galaxy-token-logo token-logo-dot">D</span>DOT</div>
                <div className="galaxy-token token-ada"><span className="galaxy-token-logo token-logo-ada">A</span>ADA</div>
                <div className="galaxy-token token-avax"><span className="galaxy-token-logo token-logo-avax">AV</span>AVAX</div>
                <div className="galaxy-token token-link"><span className="galaxy-token-logo token-logo-link">L</span>LINK</div>
                <div className="galaxy-token token-matic"><span className="galaxy-token-logo token-logo-matic">M</span>MATIC</div>
                <div className="galaxy-token token-uni"><span className="galaxy-token-logo token-logo-uni">U</span>UNI</div>
                <div className="galaxy-token token-bnb"><span className="galaxy-token-logo token-logo-bnb">B</span>BNB</div>
                <div className="galaxy-earth" aria-hidden>
                  <span className="galaxy-earth-core">
                    <img
                      src={logo.src}
                      alt="Ristic Labs logo"
                      className="galaxy-earth-logo"
                      width={72}
                      height={72}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// What we do</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Blockchain, AI, Immersive Tech, Supply Chain.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our specialties span blockchain services and products, artificial
              intelligence, immersive technology, and supply chain — turning ambitious
              ideas into production-grade systems people actually use.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Layers, t: "Protocol Engineering", d: "Custom L1/L2 architecture, consensus mechanisms, and cross-chain bridges." },
              { icon: Code2, t: "Smart Contracts", d: "Audited, gas-optimized contracts across EVM, Solana, and Move ecosystems." },
              { icon: Boxes, t: "dApp Development", d: "End-to-end decentralized applications with elegant, accessible interfaces." },
              { icon: Shield, t: "Security & Audits", d: "Threat modeling, formal verification, and continuous security reviews." },
              { icon: Globe2, t: "Web3 Infrastructure", d: "Nodes, indexers, RPC, and the plumbing that keeps networks alive." },
              { icon: Zap, t: "Research & Refinement", d: "Innovation farming — refining nascent ideas into deployable frameworks." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glow-card rounded-xl p-6">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION CTA */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-16">
            <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl font-bold md:text-5xl">
                Driving transformative change as a catalyst for innovation.
              </h2>
              <p className="mt-5 text-muted-foreground">
                We focus on regions where competitive advantages for innovative solutions
                may be less pronounced — establishing a global hub for interdependent
                innovation.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all"
              >
                Learn our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
