import { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import { company } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-ember-600">GET IN TOUCH</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
              Let&rsquo;s Discuss Your Requirement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-md">
              Reach out for product enquiries, bulk orders, or partnership opportunities. Our team
              will get back to you promptly.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 shrink-0">
                  <MapPin className="h-5 w-5 text-ember-400" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-950">Address</p>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {company.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 shrink-0">
                  <Phone className="h-5 w-5 text-ember-400" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-950">Phone</p>
                  <a
                    href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm text-slate-600 mt-0.5 hover:text-ember-600 transition-colors font-medium block"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember-500/10">
                  <Send className="h-6 w-6 text-ember-500" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy-950">Thank You</h3>
                <p className="mt-2 text-sm text-slate-500 max-w-xs">
                  Your enquiry has been noted. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-600">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600">Phone</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600">Product of Interest</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500">
                    <option>Black Pyrolysis Oil</option>
                    <option>Industrial Pyrolysis Oil</option>
                    <option>High Grade Pyrolysis Oil</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-ember-500/30 hover:bg-ember-400 transition-colors"
                >
                  Send Enquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
