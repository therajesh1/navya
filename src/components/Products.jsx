import { Droplet, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/content";

export default function Products() {
  return (
    <section id="products" className="relative bg-emerald-50/60 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-ember-600">OUR PRODUCTS</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
            A Wide Range of Pyrolysis Oil
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Manufactured from supreme grade basic material using modern tools and technology, made as per
            industry-approved parameters.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-ember-500/10 hover:-translate-y-1 hover:border-ember-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-600 shadow-md shadow-ember-500/25">
                    <Droplet className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <span className="font-heading text-4xl font-bold text-slate-200">
                    0{i + 1}
                  </span>
                </div>

                {/* Optional Product Image Preview */}
                {p.image && (
                  <div className="mt-4 h-32 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                    <img src={p.image} alt={p.name} className="h-full object-contain" />
                  </div>
                )}

                <h3 className="mt-6 font-heading text-xl font-bold text-navy-950">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-ember-500 mt-0.5 shrink-0" strokeWidth={2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/product/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-950 group-hover:text-ember-600 transition-colors"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={`/product/${p.slug}#inquiry-form`}
                  className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-ember-700 hover:bg-ember-600 hover:text-white transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
