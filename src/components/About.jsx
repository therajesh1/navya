import { company } from "../data/content";
import { Factory, Users, Award, Beaker } from "lucide-react";

const stats = [
  { icon: Factory, value: "3", label: "Product Lines" },
  { icon: Users, value: "Skilled", label: "Workforce" },
  { icon: Beaker, value: "Modern", label: "Tools & Tech" },
  { icon: Award, value: "2026", label: "Established" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-ember-600">WHO WE ARE</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
              A Trusted Name in Pyrolysis Oil Manufacturing
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{company.about}</p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-ember-500 pl-4">
                  <s.icon className="h-5 w-5 text-ember-500 mb-2" strokeWidth={1.8} />
                  <p className="font-heading text-lg font-bold text-navy-950">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl bg-navy-950 p-10 lg:p-12 overflow-hidden shadow-2xl shadow-navy-900/20">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-ember-500/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-end gap-4">
                  {[68, 100, 82].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-gradient-to-t from-ember-600 to-ember-400 shadow-lg shadow-ember-500/30"
                        style={{ height: `${h * 1.6}px` }}
                      />
                      <div className="h-3 w-full rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
                <p className="mt-10 font-heading text-xl font-bold text-white">
                  Manufactured to Industry-Approved Parameters
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Every batch is produced under the close supervision of our skilled and experienced
                  workforce, ensuring optimum, dependable quality across our entire product range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
