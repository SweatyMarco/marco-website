import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodemiX",
    description:
      "Erste Erfahrungen mit den Grundlagen von HTML, CSS, JavaScript und TypeScript in Projekten und Online Kursen gesammelt.",
    image: "/projects/Skizzen-Visuel-Codemix-01 (2).png",
    tags: ["Aug. 2024 – Feb. 2025", "1. Lehrjahr"],
    link: "https://wd103.myworkday.com/swisscom/d/inst/25060$227/rel-task/2998$37648.htmld#path=/608647e9045f1000ec7108a879810001/view",
  },

  {
    id: 2,
    title: "Team Minions",
    description:
      "Ziel des Projektes ist für das Design System von Swisscom (SDX) eine benutzerdefinierte web component zu entwickeln.",
    image: "/projects/Team-Minion_1000px.png",
    tags: ["März. 2025 – Aug. 2025", "1. Lehrjahr"],
    link: "https://wd103.myworkday.com/swisscom/d/inst/25060$329/rel-task/2998$37648.htmld#path=/608647e9045f1000ec7433aac8010000/view",
  },

  {
    id: 3,
    title: "First Steps Helfer",
    description:
      "Im Projekt ging es darum, den neuen Firsties den Start in die Swisscom leichter zu machen. Ich habe sie bei ihren ersten Schritten unterstützt.",
    image: "/projects/swisscom (1).png",
    tags: ["4. Aug – 15. Aug 2025", "2. Lehrjahr"],
  },

  {
    id: 4,
    title: "Tech Innovators",
    description:
      "Im Projekt wurden 70–80 JAVA/SpringBoot Komponenten modernisiert und die Betriebsprozesse gemeinsam mit internationalen Teams optimiert.",
    image: "/projects/maybegut.png",
    tags: ["Aug. 2025 – März. 2026", "2. Lehrjahr"],
    link: "https://wd103.myworkday.com/swisscom/d/inst/25060$1482/rel-task/2998$37648.htmld#path=/6ec631d2da0410011d8f98d9d4400001/view",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meine <span className="text-primary">Projekte</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Im Laufe meiner Ausbildung hatte ich die Möglichkeit, an verschiedenen
          spannenden Projekten mitzuwirken. Hier ist eine Übersicht der
          bisherigen Projekte, an denen ich beteiligt war.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://wd103.myworkday.com/swisscom/d/inst/1$37/247$14771.htmld#TABTASKID=2998%2431336"
            target="_blank"
            rel="noopener noreferrer"
          >
            Workday <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
