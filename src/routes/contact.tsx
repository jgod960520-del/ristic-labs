import Head from "next/head";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { Globe, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Head>
        <title>Contact — Ristic Labs</title>
        <meta name="description" content="Get in touch with Ristic Labs, the blockchain innovation division based in Wilmington, Delaware." />
        <meta property="og:title" content="Contact Ristic Labs" />
        <meta property="og:description" content="Let's build something on-chain together." />
      </Head>
      <SiteShell>
        <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Contact</span>
            <h1 className="mt-3 text-5xl font-bold md:text-6xl">
              Let's build <span className="text-gradient">on-chain</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Whether you're refining a protocol idea or scaling a production network — we'd love to hear from you.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><Mail size={18} /></span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="mt-1 font-medium">contact@risticinnovations.technology</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><MapPin size={18} /></span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Headquarters</div>
                  <div className="mt-1 font-medium">Wilmington, Delaware, United States</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><Globe size={18} /></span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Website</div>
                  <a href="https://risticinnovations.technology" target="_blank" rel="noopener noreferrer" className="mt-1 font-medium hover:text-primary">risticinnovations.technology</a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glow-card space-y-5 rounded-2xl p-8"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary"><Send size={20} /></div>
                <h3 className="font-display text-2xl font-semibold">Message received</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within a few business days.</p>
              </div>
            ) : (
              <>
                <Field label="Name" name="name" placeholder="Ada Lovelace" />
                <Field label="Email" name="email" type="email" placeholder="ada@example.com" />
                <Field label="Company" name="company" placeholder="Optional" required={false} />
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_32px_var(--glow)]"
                >
                  Send message <Send size={16} />
                </button>
              </>
            )}
          </form>
        </section>
      </SiteShell>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
