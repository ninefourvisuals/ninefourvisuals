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
          <header className="px-8 pt-12 pb-10">
            <p className="font-retro text-[8px] tracking-[0.25em] text-muted-foreground mb-5">
              NINE FOUR VISUALS
            </p>
            <h1 className="font-retro text-[13px] leading-[1.6]">
              MUHAMMAD<br />ISMAIL NASIR
            </h1>
            <p className="font-retro mt-5 text-[8px] tracking-[0.25em] text-muted-foreground">
              ISLAMABAD · PK
            </p>
          </header>

          <nav className="flex-1 overflow-y-auto px-8">
            <p className="font-retro text-[8px] tracking-[0.25em] text-muted-foreground mb-6">
              WORKS
            </p>
            <ul className="space-y-4">
              {projects.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => setActiveId(p.id)}
                      className={`font-retro text-left text-[11px] leading-relaxed transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.title.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer className="font-retro px-8 py-8 text-[8px] tracking-[0.25em] text-muted-foreground flex justify-between">
            <a href="mailto:hello@ninefourvisuals.com" className="hover:text-foreground transition-colors">
              EMAIL
            </a>
            <span>© 2024</span>
          </footer>
        </aside>

        {/* RIGHT — content */}
        <section key={active.id} className="px-8 py-12 lg:px-16 lg:py-20 animate-in fade-in duration-500">
          <div className="max-w-3xl">
            <div className="font-retro flex items-center gap-3 text-[8px] tracking-[0.25em] text-muted-foreground mb-10">
              <span>{active.category.toUpperCase()}</span>
              <span className="h-px w-6 bg-border" />
              <span>{active.year}</span>
            </div>

            <h2 className="font-retro text-2xl md:text-[28px] leading-[1.5] mb-12">
              {active.title.toUpperCase()}
            </h2>

            <figure className="mb-12 overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                width={1600}
                height={900}
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>

            <dl className="font-retro grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-border mb-12 text-[10px]">
              <div>
                <dt className="text-[8px] tracking-[0.25em] text-muted-foreground mb-3">ROLE</dt>
                <dd className="leading-relaxed">{active.role.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="text-[8px] tracking-[0.25em] text-muted-foreground mb-3">RUNTIME</dt>
                <dd className="leading-relaxed">{active.runtime.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="text-[8px] tracking-[0.25em] text-muted-foreground mb-3">LOCATION</dt>
                <dd className="leading-relaxed">{active.location.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="text-[8px] tracking-[0.25em] text-muted-foreground mb-3">YEAR</dt>
                <dd className="leading-relaxed">{active.year}</dd>
              </div>
            </dl>

            <p className="font-retro text-[11px] leading-[2] text-foreground/85 max-w-[60ch]">
              {active.synopsis}
            </p>

            <button className="font-retro mt-14 inline-flex items-center gap-3 text-[9px] tracking-[0.25em] border-b border-foreground pb-2 hover:gap-5 transition-all">
              WATCH THE FILM <span aria-hidden>→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
