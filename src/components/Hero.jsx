import { ArrowRight, ShieldCheck, Factory, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="absolute inset-0 bg-grid-light opacity-70" />
      <div className="absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-ember-400/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-ember-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-ember-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
            ESTABLISHED 2026 &middot; MANUFACTURER &amp; SUPPLIER
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-navy-950">
            Powering Industry with{" "}
            <span className="bg-gradient-to-r from-ember-600 to-ember-400 bg-clip-text text-transparent">
              Premium Pyrolysis Oil
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
            Naya Fuels LLP is a trustworthy manufacturer and supplier of Black Pyrolysis Oil, Industrial
            Pyrolysis Oil and High Grade Pyrolysis Oil &mdash; engineered from supreme grade material with modern
            tools, technology, and a skilled, experienced workforce.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-ember-500/25 hover:bg-ember-600 transition-colors"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-navy-950/15 px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-navy-950/5 transition-colors"
            >
              About Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-slate-200 pt-8">
            <div className="flex items-start gap-3">
              <Factory className="h-6 w-6 text-ember-600 shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-bold text-navy-950">Modern Tools</p>
                <p className="text-xs text-slate-500 mt-0.5">& Technology</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-ember-600 shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-bold text-navy-950">Quality</p>
                <p className="text-xs text-slate-500 mt-0.5">Assured</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-ember-600 shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-bold text-navy-950">Trusted</p>
                <p className="text-xs text-slate-500 mt-0.5">Organization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
