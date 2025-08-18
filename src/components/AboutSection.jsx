import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Über <span className="text-primary">mich</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Motivierter Webentwickler & Lehrling{" "}
            </h3>

            <p className="text-muted-foreground">
              Ich lege viel Wert auf Teamarbeit, Fleiss und gute Kommunikation.
              Ich lerne schnell neue Dinge und bin neugierig, sodass ich immer
              motiviert bin, neue Aufgaben anzupacken und kreative Lösungen zu
              finden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Kontaktiere mich
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Webentwicklung</h4>
                  <p className="text-muted-foreground">
                    Erstellung moderner, responsiver Websites und Webanwendungen
                    mit aktuellen Frameworks und Technologien.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Agile Softwareentwicklung
                  </h4>
                  <p className="text-muted-foreground">
                    Arbeiten mit agilen Methoden wie Scrum und Kanban, um
                    Projekte effizient umzusetzen.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              {" "}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Ausbildung als Applikationsentwickler
                  </h4>
                  <p className="text-muted-foreground">
                    Derzeit im 2. Lehrjahr als Informatiker EFZ Fachrichtung
                    Applikationsentwicklung und offen für neue Erfahrungen und
                    Herausforderungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
