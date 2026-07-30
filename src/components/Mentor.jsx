import { Quote } from "lucide-react";
import { company } from "../data/content";

export default function Mentor() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ember-500 to-navy-900 px-8 py-14 sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-ember-400/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-xl shadow-navy-950/20">
                <span className="font-heading text-4xl font-bold text-ember-600">JS</span>
              </div>
              <p className="mt-5 font-heading text-lg font-bold text-white text-center lg:text-left">
                Mr. Jeet Satra
              </p>
              <p className="text-xs font-bold tracking-[0.2em] text-emerald-100 mt-1">MENTOR</p>
            </div>

            <div>
              <Quote className="h-9 w-9 text-white/50" strokeWidth={1.5} />
              <p className="mt-4 text-lg sm:text-xl leading-relaxed text-emerald-50">
                {company.mentorNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
