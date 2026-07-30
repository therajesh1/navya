import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products, company } from "../data/content";
import {
  ChevronRight,
  Droplet,
  CheckCircle2,
  PhoneCall,
  Mail,
  ShieldCheck,
  Package,
  Award,
  ArrowLeft,
  Send,
  Building2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[2]; // Default to High Grade Pyrolysis Oil if not matched

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "5-50kg",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-ember-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link to="/#products" className="hover:text-ember-600 transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="text-navy-950 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ember-600 hover:text-ember-700 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Products
        </Link>

        {/* Product Main Overview Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Product Image Showcase */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md shadow-slate-200/50">
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/40 p-4 border border-slate-100 flex items-center justify-center">
              <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-navy-950/90 px-3.5 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-ember-400" /> Premium Quality
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[380px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Quality Badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="h-5 w-5 text-ember-600 mx-auto mb-1" />
                <p className="text-[11px] font-bold text-slate-700">100% Quality Checked</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Package className="h-5 w-5 text-ember-600 mx-auto mb-1" />
                <p className="text-[11px] font-bold text-slate-700">Tin / Drum Packaging</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Award className="h-5 w-5 text-ember-600 mx-auto mb-1" />
                <p className="text-[11px] font-bold text-slate-700">Industry Approved</p>
              </div>
            </div>
          </div>

          {/* Right: Product Details & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-ember-700 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-full">
                  <Droplet className="h-3.5 w-3.5" /> Direct Manufacturer
                </span>
                <span className="text-xs text-slate-400 font-medium">&middot; Est. 2026</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-navy-950">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {product.longDescription}
              </p>
            </div>

            {/* Quick Key Features List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase">
                Key Highlights
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-ember-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 rounded-xl bg-ember-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-ember-600/30 hover:bg-ember-700 transition-all hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Request Quote for {product.name}
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-navy-900 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-ember-400" /> Call for Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* SPECIFICATIONS & DETAILS TABLE SECTION (Matching exact image layout) */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="border-b border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-950">
                Product Details
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Technical specifications & manufacturing standards for {product.name}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
              <Building2 className="h-3.5 w-3.5 text-ember-600" /> Navya Fuels LLP Standards
            </span>
          </div>

          {/* 2-Column Responsive Specs Grid styled like the provided image */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {Object.entries(product.details).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between py-3.5 border-b border-slate-100 text-sm hover:bg-slate-50/50 px-2 rounded-lg transition-colors"
              >
                <span className="text-slate-500 font-medium">{key}</span>
                <span className="text-slate-900 font-bold text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INQUIRY FORM SECTION */}
        <div id="inquiry-form" className="mt-14 bg-gradient-to-br from-navy-950 via-navy-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Droplet className="h-96 w-96 text-ember-400" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-ember-400 uppercase">
              GET IN TOUCH
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-heading">
              Interested in {product.name}?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Send us your inquiry and our experts will get back to you with competitive pricing and delivery schedules.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs mt-0.5">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Required Quantity / Packaging
                    </label>
                    <select
                      value={formState.quantity}
                      onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                      className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-ember-500 bg-navy-900"
                    >
                      <option value="5-50kg">5 - 50 kg (Tin)</option>
                      <option value="50-200kg">50 - 200 kg (Drum)</option>
                      <option value="Bulk/Tanker">Bulk / Tanker Load</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Requirement Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify your application, location, or estimated recurring volume..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-ember-500/30 hover:bg-ember-600 transition-all"
                >
                  <Send className="h-4 w-4" /> Send Instant Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* OTHER PRODUCTS CAROUSEL / GRID */}
        {otherProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-bold font-heading text-navy-950 mb-6">
              Other Pyrolysis Oil Products
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherProducts.map((op) => (
                <div
                  key={op.slug}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-xl bg-emerald-100 text-ember-600 flex items-center justify-center font-bold">
                        <Droplet className="h-5 w-5" />
                      </span>
                      <h4 className="font-bold text-navy-950 text-lg">{op.name}</h4>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {op.description}
                    </p>
                  </div>
                  <Link
                    to={`/product/${op.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-ember-600 hover:text-ember-700"
                  >
                    View Product Details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
