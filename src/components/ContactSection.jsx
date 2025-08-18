import { Mail, MapPin, Phone, SendIcon, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const ContactSection = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";

    const subject = encodeURIComponent(`Portfolio Marco`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(
      `mailto:marco.grotto@swisscom.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Schreib <span className="text-primary">mir</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Bietest du ein Projekt an und möchtest du mit mir zusammenarbeiten?{" "}
          Ich bin immer offen für neue Ideen, Projekte oder Möglichkeiten.
          Kontaktiere mich gerne über das Kontaktformular oder schreib mir per
          Teams. Ich freue mich auf deine Nachricht!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Kontakt Informationen
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Email</h4>
                  <a
                    href="mailto:marco.grotto@swisscom.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    marco.grotto@swisscom.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Phone</h4>
                  <a className="text-muted-foreground  transition-colors">
                    +41 076 505 54 52
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Location</h4>
                  <a className="text-muted-foreground transition-colors">
                    Zürich, Schweiz
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <UserPen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Intranet</h4>
                  <a
                    href="https://intranet.swisscom.com/home/profile"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Link to Intranet
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Eine Nachricht schicken
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-small font-medium mb-2"
                >
                  Dein Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  // placeholder="Max Mustermann..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-small font-medium mb-2"
                >
                  Deine Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  // placeholder="maxmustermann@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-small font-medium mb-2"
                >
                  Deine Nachricht
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  // placeholder="Hallo..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                )}
              >
                Nachricht senden
                <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
