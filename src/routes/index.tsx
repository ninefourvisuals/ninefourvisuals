import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ismail Nasir — Nine Four Visuals" },
      { name: "description", content: "Selected films, documentaries, and commercials by filmmaker Muhammad Ismail Nasir, founder of Nine Four Visuals. Based in Islamabad, Pakistan." },
      { property: "og:title", content: "Muhammad Ismail Nasir — Nine Four Visuals" },
      { property: "og:description", content: "Selected works by filmmaker Muhammad Ismail Nasir." },
    ],
  }),
  component: Index,
});

type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  runtime: string;
  location: string;
  image: string;
  synopsis: string;
};

const projects: Project[] = [
  {
    id: "silent-horizon",
    title: "The Silent Horizon",
    year: "2024",
    category: "Feature",
    role: "Director, DP",
    runtime: "94 min",
    location: "Iceland",
    image: p1,
    synopsis:
      "A solitary climber confronts the weight of memory above the cloud line. Shot on 35mm across two weeks in the Westfjords, the film moves at the pace of weather — patient, unrelieved, and quietly devastating.",
  },
  {
    id: "neon-quiet",
    title: "Neon, Quiet",
    year: "2024",
    category: "Short",
    role: "Director",
    runtime: "12 min",
    location: "Tokyo",
    image: p2,
    synopsis:
      "A late-night encounter between two strangers under the dripping signage of Shinjuku's back alleys. A study in restraint, rain, and the language of the unsaid.",
  },
  {
    id: "last-note",
    title: "Last Note at Midnight",
    year: "2023",
    category: "Documentary",
    role: "Director, DP",
    runtime: "78 min",
    location: "New Orleans",
    image: p3,
    synopsis:
      "An intimate portrait of the final residency of saxophonist Eli Marin. Filmed over eleven nights at a club that closed three months later. Premiered at Sundance, 2024.",
  },
  {
    id: "westward",
    title: "Westward",
    year: "2023",
    category: "Commercial",
    role: "Director",
    runtime: "60 sec",
    location: "Wadi Rum",
    image: p4,
    synopsis:
      "A wordless campaign for a heritage outerwear brand. One walker, one horizon, one take. Awarded Gold for Cinematography at the Cannes Lions.",
  },
  {
    id: "velocity",
    title: "Velocity",
    year: "2022",
    category: "Experimental",
    role: "Director, Editor",
    runtime: "6 min",
    location: "Los Angeles",
    image: p5,
    synopsis:
      "An experiment in motion and color — the city dissolved into pure light. Selected for the Vimeo Staff Picks year-end retrospective.",
  },
];

function Index() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr]">
        {/* LEFT — index */}
        <aside className="border-b border-border lg:border-b-0 lg:border-r lg:sticky lg:top-0 lg:h-screen flex flex-col">
          <header className="px-8 pt-10 pb-8">
            <p className="font-retro text-[11px] tracking-[0.2em] text-muted-foreground mb-5">
              Nine Four Visuals
            </p>
            <h1 className="font-retro text-2xl leading-tight">
              Muhammad Ismail Nasir
            </h1>
            <p className="font-retro mt-3 text-[11px] tracking-[0.18em] text-muted-foreground">
              Filmmaker · Islamabad, Pakistan
            </p>
          </header>

          <nav className="flex-1 overflow-y-auto">
            <p className="font-retro px-8 text-[10px] tracking-[0.25em] text-muted-foreground mb-3">
              Works
            </p>
            <ul>
              {projects.map((p, i) => {
                const isActive = p.id === activeId;
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => setActiveId(p.id)}
                      className={`group w-full text-left px-8 py-4 border-t border-border flex items-baseline gap-4 transition-colors ${
                        isActive ? "bg-foreground text-background" : "hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`font-retro text-[11px] tabular-nums ${
                          isActive ? "text-background/60" : "text-muted-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-retro flex-1 text-lg leading-tight">
                        {p.title}
                      </span>
                      <span
                        className={`text-xs transition-transform ${
                          isActive ? "translate-x-0" : "-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer className="font-retro px-8 py-6 border-t border-border text-[11px] tracking-[0.15em] text-muted-foreground flex justify-between">
            <a href="mailto:hello@ninefourvisuals.com" className="hover:text-foreground transition-colors">
              hello@ninefourvisuals.com
            </a>
            <span>© 2024</span>
          </footer>
        </aside>

        {/* RIGHT — content */}
        <section key={active.id} className="px-8 py-12 lg:px-16 lg:py-20 animate-in fade-in duration-500">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
              <span>{active.category}</span>
              <span className="h-px w-8 bg-border" />
              <span>{active.year}</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight mb-10">
              {active.title}
            </h2>

            <figure className="mb-10 overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                width={1600}
                height={900}
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>

            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-border mb-10 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Role</dt>
                <dd>{active.role}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Runtime</dt>
                <dd>{active.runtime}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Location</dt>
                <dd>{active.location}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Year</dt>
                <dd>{active.year}</dd>
              </div>
            </dl>

            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground/90 max-w-[52ch]">
              {active.synopsis}
            </p>

            <button className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:gap-5 transition-all">
              Watch the film <span aria-hidden>→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
