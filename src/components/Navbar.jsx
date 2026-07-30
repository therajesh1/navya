import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { products } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper to format section links depending on current route
  const getHref = (hash) => {
    if (location.pathname === "/") {
      return hash;
    }
    return `/${hash}`;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-navy-950/5 border-b border-slate-200/70" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-ember-400 to-ember-600 shadow-md shadow-ember-500/30 group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="leading-tight text-left">
              <span className="block font-heading font-bold text-lg tracking-tight text-navy-950">
                NAVYA FUELS
              </span>
              <span className="block text-[11px] font-semibold tracking-[0.25em] text-ember-600">
                LLP
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors"
            >
              Home
            </Link>

            <a
              href={getHref("#about")}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors"
            >
              About Us
            </a>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href={getHref("#products")}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors py-2"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </a>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl border border-slate-200 shadow-xl py-3 z-50">
                  <div className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Our Pyrolysis Oils
                  </div>
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/product/${p.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-ember-600 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={getHref("#why-us")}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors"
            >
              Why Us
            </a>

            <a
              href={getHref("#team")}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors"
            >
              Team
            </a>

            <a
              href={getHref("#contact")}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:block">
            <a
              href={getHref("#contact")}
              className="inline-flex items-center rounded-full bg-ember-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-ember-600/25 hover:bg-ember-700 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden text-navy-950 p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-5 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600"
            >
              Home
            </Link>

            <a
              href={getHref("#about")}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600"
            >
              About Us
            </a>

            <div className="border-t border-b border-slate-100 py-3 my-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Products Pages
              </p>
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-800 hover:text-ember-600"
                >
                  {p.name}
                </Link>
              ))}
            </div>

            <a
              href={getHref("#why-us")}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600"
            >
              Why Us
            </a>

            <a
              href={getHref("#team")}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600"
            >
              Team
            </a>

            <a
              href={getHref("#contact")}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-ember-600"
            >
              Contact
            </a>

            <a
              href={getHref("#contact")}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-ember-600 px-5 py-3 text-sm font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
