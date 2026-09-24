import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-ember-400 to-ember-600">
                <Leaf className="h-4.5 w-4.5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-heading font-bold text-white tracking-tight">
                NAYA FUELS <span className="text-ember-400">LLP</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
              A leading and trustworthy manufacturer &amp; supplier of pyrolysis oil, built on quality,
              modern technology and experienced leadership since 2026.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Product Pages</p>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/product/${p.slug}`}
                    className="text-sm text-slate-400 hover:text-ember-400 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Company</p>
            <ul className="mt-4 space-y-3">
              {[
                ["About Us", "/#about"],
                ["Why Choose Us", "/#why-us"],
                ["Our Team", "/#team"],
                ["Contact Us", "/#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-ember-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} Naya Fuels LLP. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Established 2026 &middot; Manufacturer &amp; Supplier</p>
        </div>
      </div>
    </footer>
  );
}
