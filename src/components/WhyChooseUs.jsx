import {
  Factory,
  Users,
  BadgeCheck,
  Gem,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { whyChooseUs } from "../data/content";

const icons = [Factory, Users, BadgeCheck, Gem, HeartHandshake, TrendingUp];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-ember-600">WHY CHOOSE US</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
            Built on Quality, Trust &amp; Experience
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950">
                  <Icon className="h-6 w-6 text-ember-400" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
