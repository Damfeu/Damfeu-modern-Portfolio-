import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with futuristic vibe */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block mb-3 px-3 py-1 rounded-md bg-neon-blue/5 border border-neon-blue/20">
              <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest animate-pulse">
                {t("contact.terminal")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 section-heading">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-6 font-mono text-sm border-l-2 border-neon-blue/30 pl-6 py-2">
              <span className="text-neon-cyan/50">//</span> {t("contact.desc")}
            </p>
          </div>

          {/* Contact Card HUD Interior */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden scanline-overlay group">
            {/* HUD Corner Elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-blue/30 z-20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-blue/30 z-20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-blue/30 z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-blue/30 z-20" />

            <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
              {/* Email HUD Box */}
              <div className="flex items-center justify-center md:justify-start gap-4 p-5 rounded-lg bg-background/40 border border-white/5 hover:border-neon-blue/30 transition-all duration-300">
                <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/5">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter mb-1 font-bold">
                    {t("contact.email")}
                  </p>
                  <a
                    href="mailto:adododji7@gmail.com"
                    className="text-foreground hover:text-neon-blue transition-colors font-mono text-sm underline decoration-neon-blue/30 underline-offset-4"
                  >
                    adododji7@gmail.com
                  </a>
                </div>
              </div>

              {/* Location HUD Box */}
              <div className="flex items-center justify-center md:justify-start gap-4 p-5 rounded-lg bg-background/40 border border-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shadow-lg shadow-accent/5">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter mb-1 font-bold">
                    {t("contact.location")}
                  </p>
                  <span className="text-foreground font-mono text-sm">
                    Lomé, Togo
                  </span>
                </div>
              </div>
            </div>

            {/* Final HUD Message Transmission */}
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="flex items-center gap-8 w-full max-w-md">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-blue/20" />
                <p className="text-[10px] font-mono text-neon-blue/60 uppercase tracking-widest whitespace-nowrap">
                  {t("contact.status")}
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-blue/20" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="text-muted-foreground font-mono text-xs italic">
                  &gt; {t("contact.ready")}
                </p>
                <Button variant="neon" size="lg" className="group h-14 px-10 relative overflow-hidden" asChild>
                  <a href={t("contact.whatsappLink")} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-neon-blue/10 animate-pulse-slow" />
                    <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                    <span className="relative z-10 tracking-widest font-bold">{t("contact.cta")}</span>
                  </a>
                </Button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[8px] font-mono text-muted-foreground/40 uppercase">
                <span className="w-1 h-1 bg-neon-green rounded-full animate-ping" />
                {t("contact.neural")} : ACTIVE_DECRYPT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
