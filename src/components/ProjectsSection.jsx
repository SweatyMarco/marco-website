import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fasanella Margherita",
    description:
      "Ziel des Projektes ist für das Design System von Swisscom (SDX) eine benutzerdefinierte web component zu entwickeln.",
    image: "public/projects/Team-Minion_1000px.png",
    tags: ["1 Lehrjahr", "2 Semester"],
    link: "https://wd103.myworkday.com/swisscom/d/inst/25060$329/rel-task/2998$37648.htmld#path=/608647e9045f1000ec7433aac8010000/view",
  },

  {
    id: 2,
    title: "Georgokitsos Dimosthenis",
    description:
      "Erste Erfahrungen mit den Grundlagen von HTML, CSS, JavaScript und TypeScript gesammelt",
    image: "/projects/Skizzen-Visuel-Codemix-01 (2).png",
    tags: ["1 Lehrjahr", "1 Semester"],
    link: "https://wd103.myworkday.com/swisscom/d/inst/25060$227/rel-task/2998$37648.htmld#path=/608647e9045f1000ec7108a879810001/view",
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
              <div h-48 overflow-hidden>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        ¨
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://wd103.myworkday.com/swisscom/d/inst/1$37/247$14771.htmld#TABTASKID=2998%2431336"
            target="_blank"
          >
            Workday <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
