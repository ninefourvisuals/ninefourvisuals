import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import logo from "@/assets/logo-94.png";

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
  videoUrl?: string;
  videoUrls?: string[];
};

const projects: Project[] = [
  {
    id: "silent-horizon",
    title: "\nAHS",
    year: "2024",
    category: "Feature",
    role: "Director, DP",
    runtime: "94 min",
    location: "Iceland",
    image: p1,
    synopsis:
      "A solitary climber confronts the weight of memory above the cloud line. Shot on 35mm across two weeks in the Westfjords, the film moves at the pace of weather — patient, unrelieved, and quietly devastating.",
    videoUrl: "https://www.youtube.com/embed/-HtbFTytbGk",
  },
  {
    id: "iwc",
    title: "IWC",
    year: "",
    category: "Project",
    role: "",
    runtime: "",
    location: "",
    image: p2,
    synopsis: "",
    videoUrls: [
      "https://www.youtube.com/embed/IM1ACP5g834",
      "https://www.youtube.com/embed/5rke1jP5rL4",
      "https://www.youtube.com/embed/OZlP7tgHnaA",
    ],
  },
  {
    id: "shell",
    title: "Shell",
    year: "",
    category: "Project",
    role: "",
    runtime: "",
    location: "",
    image: p3,
    synopsis: "",
  },
  {
    id: "iron-will",
    title: "Iron Will",
    year: "",
    category: "Project",
    role: "",
    runtime: "",
    location: "",
    image: p4,
    synopsis: "",
  },
  {
    id: "pds",
    title: "PDS",
    year: "",
    category: "Project",
    role: "",
    runtime: "",
    location: "",
    image: p5,
    synopsis: "",
  },
];

function Index() {
  const [activeId, setActiveId] = useState<string>("about");
  const active = projects.find((p) => p.id === activeId);
  const isAbout = activeId === "about";

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      // smooth scroll to content on mobile
      requestAnimationFrame(() => {
        document
          .getElementById("content-panel")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const socialLinks = (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-3 mb-5">
        <a href="https://www.youtube.com/@ninefourvisuals/videos" target="_blank" rel="noreferrer" className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">YOUTUBE</a>
        <a href="https://www.instagram.com/ninefourvisuals/" target="_blank" rel="noreferrer" className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">INSTAGRAM</a>
        <a href="https://www.linkedin.com/in/muhammad-ismail-nasir-3103761b3/" target="_blank" rel="noreferrer" className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">LINKEDIN</a>
      </div>
      <div className="flex justify-between">
        <a href="mailto:hello@ninefourvisuals.com" className="hover:text-foreground transition-colors">EMAIL</a>
        <span>© 2024</span>
      </div>
    </>
  );

  const navItemClass = (isActive: boolean) =>
    `font-retro group inline-flex items-center gap-2 text-left text-[12px] lg:text-[13px] leading-relaxed transition-all duration-300 ease-out hover:translate-x-1 ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating logo — top right (smaller on mobile to avoid name overlap) */}
      <div className="fixed top-4 right-4 lg:top-6 lg:right-8 z-50">
        <img
          src={logo}
          alt="Nine Four Visuals"
          className="w-9 lg:w-14 h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr]">
        {/* LEFT — index */}
        <aside className="border-b border-border lg:border-b-0 lg:border-r lg:sticky lg:top-0 lg:h-screen flex flex-col">
          <header className="px-6 lg:px-8 pt-10 lg:pt-12 pb-8 lg:pb-10 pr-16 lg:pr-8">
            <h1 className="font-retro text-[14px] lg:text-[16px] leading-[1.6]">
              MUHAMMAD<br />ISMAIL NASIR
            </h1>
            <p className="font-retro mt-4 lg:mt-5 text-[9px] lg:text-[10px] tracking-[0.25em] text-muted-foreground leading-[1.8]">
              DIRECTOR · DOP · COLOURIST<br />
              ISLAMABAD · PK
            </p>
          </header>

          <nav className="lg:flex-1 lg:overflow-y-auto px-6 lg:px-8 pb-8">
            <p className="font-retro text-[9px] lg:text-[10px] tracking-[0.25em] text-muted-foreground mb-5 lg:mb-6">
              INFO
            </p>
            <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
              <li>
                <button onClick={() => handleSelect("about")} className={navItemClass(isAbout)}>
                  <span
                    aria-hidden
                    className={`inline-block h-px bg-foreground transition-all duration-300 ${
                      isAbout ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                    }`}
                  />
                  ABOUT ME
                </button>
              </li>
            </ul>

            <p className="font-retro text-[9px] lg:text-[10px] tracking-[0.25em] text-muted-foreground mb-5 lg:mb-6">
              WORKS
            </p>
            <ul className="space-y-3 lg:space-y-4">
              {projects.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <li key={p.id}>
                    <button onClick={() => handleSelect(p.id)} className={navItemClass(isActive)}>
                      <span
                        aria-hidden
                        className={`inline-block h-px bg-foreground transition-all duration-300 ${
                          isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                        }`}
                      />
                      {p.title.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer — desktop only inside aside */}
          <footer className="hidden lg:block font-retro px-8 py-8 text-[10px] tracking-[0.25em] text-muted-foreground border-t border-border">
            {socialLinks}
          </footer>
        </aside>

        {/* RIGHT — content */}
        <section
          id="content-panel"
          key={activeId}
          className="px-6 py-10 lg:px-16 lg:py-20 animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          {isAbout ? (
            <div className="max-w-3xl">
              <div className="font-retro flex items-center gap-3 text-[9px] lg:text-[10px] tracking-[0.25em] text-muted-foreground mb-8 lg:mb-10">
                <span>INFO</span>
                <span className="h-px w-6 bg-border" />
                <span>2024</span>
              </div>

              <h2 className="font-retro text-[20px] md:text-[28px] lg:text-[32px] leading-[1.5] mb-10 lg:mb-12">
                ABOUT ME
              </h2>

              <p className="font-retro text-[11px] lg:text-[13px] leading-[2] text-foreground/85 max-w-[60ch]">
                Award nominated cinematic filmmaker with 4+ years of experience in high energy event coverage, automotive filmmaking, and branded content production. Twice nominated at the International Motor Film Awards (London). Experienced in fast-paced live environments, action cinematography, crew coordination, and Assistant Director level production support.
              </p>
            </div>
          ) : active ? (
            <div className="max-w-3xl">
              <div className="font-retro flex items-center gap-3 text-[9px] lg:text-[10px] tracking-[0.25em] text-muted-foreground mb-8 lg:mb-10">
                <span>{active.category.toUpperCase()}</span>
                <span className="h-px w-6 bg-border" />
                <span>{active.year}</span>
              </div>

              <h2 className="font-retro text-[18px] md:text-[26px] lg:text-[32px] leading-[1.5] mb-10 lg:mb-12 break-words">
                {active.title.toUpperCase()}
              </h2>

              {active.videoUrls && active.videoUrls.length > 0 ? (
                <div className="mb-10 lg:mb-12 space-y-6 lg:space-y-8">
                  {active.videoUrls.map((url, i) => {
                    const isInstagram = url.includes("instagram.com");
                    return (
                      <div
                        key={url}
                        className={`relative w-full overflow-hidden ${isInstagram ? "max-w-[420px] mx-auto aspect-[9/16]" : "aspect-[16/9]"}`}
                      >
                        <iframe
                          src={url}
                          title={`${active.title} ${i + 1}`}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          scrolling="no"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <figure className="mb-10 lg:mb-12 overflow-hidden group">
                  {active.videoUrl ? (
                    <div className="relative w-full aspect-[16/9]">
                      <iframe
                        src={active.videoUrl}
                        title={active.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={active.image}
                      alt={active.title}
                      width={1600}
                      height={900}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </figure>
              )}

              <p className="font-retro text-[11px] lg:text-[13px] leading-[2] text-foreground/85 max-w-[60ch]">
                {active.synopsis}
              </p>

            </div>
          ) : null}
        </section>
      </div>

      {/* Footer — mobile only, sits at the very bottom of the page */}
      <footer className="lg:hidden font-retro px-6 py-8 text-[9px] tracking-[0.25em] text-muted-foreground border-t border-border">
        {socialLinks}
      </footer>
    </div>
  );
}
