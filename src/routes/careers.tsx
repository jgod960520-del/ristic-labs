import Head from "next/head";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ArrowUpRight } from "lucide-react";

const roles = [
  { t: "Blockchain Developer", team: "Engineering", loc: "Remote / Wilmington, DE", d: "Design and ship smart contracts and protocol-level code across EVM and non-EVM chains." },
  { t: "UI/UX Designer", team: "Design", loc: "Remote", d: "Craft interfaces for wallets, dApps, and developer tools that feel obvious." },
  { t: "Frontend Developer", team: "Engineering", loc: "Remote", d: "Build performant, accessible Web3 frontends in React/TypeScript." },
  { t: "Backend Developer", team: "Engineering", loc: "Remote", d: "APIs, indexers, and data pipelines that power our dApps and infrastructure." },
  { t: "DevRel Engineer", team: "Community", loc: "Remote", d: "Be the voice of our developer ecosystem — docs, demos, talks, and partnerships." },
  { t: "QA Engineer", team: "Engineering", loc: "Remote", d: "Test plans, automation, and a relentless eye for edge cases in adversarial environments." },
  { t: "DevOps Engineer", team: "Infrastructure", loc: "Remote", d: "Run nodes, observability, and CI/CD for high-availability blockchain systems." },
  { t: "Project Manager", team: "Operations", loc: "Remote / Wilmington, DE", d: "Orchestrate cross-functional delivery across research, engineering, and clients." },
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Ristic Labs</title>
        <meta name="description" content="Join Ristic Labs. We're hiring blockchain developers, designers, engineers, and project managers." />
        <meta property="og:title" content="Careers — Ristic Labs" />
        <meta property="og:description" content="Open roles in blockchain, design, engineering, DevOps, QA, and PM." />
      </Head>
      <SiteShell>
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Careers</span>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold md:text-6xl">
            Build the future of <span className="text-gradient">decentralized</span> systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We hire curious, rigorous people who care about shipping. Remote-first, with a
            home base in Wilmington, Delaware.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-2xl border border-border">
            {roles.map((r, i) => (
              <Link
                key={r.t}
                href="/contact"
                className={`group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-surface/80 md:p-8 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold md:text-2xl">{r.t}</h3>
                    <span className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {r.team}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{r.d}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{r.loc}</p>
                </div>
                <ArrowUpRight className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Don't see your role?</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              We're always interested in exceptional people. Tell us what you'd build with us.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_32px_var(--glow)]"
            >
              Reach out
            </Link>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
