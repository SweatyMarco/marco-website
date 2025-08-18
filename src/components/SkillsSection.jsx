import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "JavaScript", level: 45, category: "frontend" },
  { name: "React", level: 65, category: "frontend" },
  { name: "TypesScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 55, category: "frontend" },
  { name: "Angular", level: 65, category: "frontend" },
  { name: "Sass", level: 45, category: "frontend" },
  { name: "Stencil", level: 40, category: "frontend" },
  { name: "Java", level: 35, category: "backend" },
  { name: "MySQL", level: 35, category: "backend" },
  { name: "Git/Github", level: 70, category: "tools" },
  { name: "Docker", level: 40, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Vs Code", level: 85, category: "tools" },
  { name: "Jira", level: 80, category: "tools" },
  { name: "Deutsch", level: 100, category: "sprachen" },
  { name: "Englisch", level: 70, category: "sprachen" },
];

const categories = ["all", "frontend", "backend", "tools", "sprachen"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimateBars(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meine <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 cursor-pointer py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden relative">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out absolute top-0 left-0"
                  style={{
                    width: animateBars ? `${skill.level}%` : "0%",
                    transitionDelay: animateBars ? `${key * 100}ms` : "0ms",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
