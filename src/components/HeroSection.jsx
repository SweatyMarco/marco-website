import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 ml-2 animate-fade-in-delay-1">
              Hallo, Ich bin
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              Marco
            </span>
            {/* <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              Grotto
            </span> */}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Ich bin Informatiker mit Fachrichtung Applikationsentwicklung und
            freue mich sehr, dass du den Weg hierher gefunden hast. Auf dieser
            Seite findest du alle wichtigen Informationen über mich, meine
            Skills und meine Projekte. Viel Spass beim reinschauen!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button select-none">
              Zu meinen Projekten
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to About Section */}
      <div
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm text-muted-foreground mb-2 select-none">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
