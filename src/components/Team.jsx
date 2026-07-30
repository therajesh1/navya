import { team } from "../data/content";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const palette = [
  "from-ember-400 to-ember-600",
  "from-navy-600 to-navy-800",
  "from-ember-500 to-ember-700",
  "from-navy-700 to-navy-950",
];

export default function Team() {
  return (
    <section id="team" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-ember-600">OUR TEAM</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
            The People Behind Navya Fuels
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A dedicated team committed to quality, integrity and the continued growth of our organization.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-white p-8 text-center border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${palette[i % palette.length]} shadow-lg`}
              >
                <span className="font-heading text-2xl font-bold text-white">
                  {initials(member.name)}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-navy-950">{member.name}</h3>
              {member.role && (
                <p className="mt-1 text-xs font-bold tracking-wide text-ember-600 uppercase">
                  {member.role}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
