import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-violet/5 blur-3xl float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Status Badge */}
            {/* <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--neon-green))] animate-pulse" />
              {t("hero.status")}
            </div> */}

            {/* Main Headline */}
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {t("hero.greeting")}{" "}
              <span className="text-foreground glitch-text" data-text="Adododji Damaz">
                Adododji Damaz
              </span>
            </h1>

            {/* Role */}
            <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-muted-foreground font-light mb-4 font-mono">
              <span className="text-neon-cyan">&gt;</span> {t("hero.role")}
            </p>

            {/* Tagline */}
            <p className="animate-fade-in-up delay-300 text-lg text-muted-foreground/80 max-w-2xl mb-10">
              {t("hero.tagline")}
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Button variant="neon" size="lg" className="group" asChild>
                <a href="#projects">
                  {t("hero.cta")}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="neon-outline" size="lg" asChild>
                <a href="#contact">{t("hero.contact")}</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Damfeu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kokouvi-damaz-adododji-8b5424285", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Column */}
          <div className="animate-fade-in-up delay-300 relative justify-self-center lg:justify-self-end mt-8 lg:mt-16">
            <div className="relative group">
              {/* Data stream backgrounds */}
              <div className="absolute -left-12 top-0 bottom-0 w-8 data-stream hidden xl:block opacity-40">
                1010011100101101010101001110010110101
              </div>
              <div className="absolute -right-12 top-0 bottom-0 w-8 data-stream hidden xl:block opacity-40">
                0110101001110010110101011010100111001
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-glow-gradient opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative glass-card p-2 rounded-2xl overflow-hidden float scanline-overlay">
                {/* Cyberpunk corner markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan z-20" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan z-20" />

                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <img
                  src="/images/Photos semiComplet.png"
                  alt="Adododji Damaz"
                  className="w-full max-w-[400px] aspect-[3/4] object-cover rounded-xl grayscale-[20%] sepia-[10%] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Information Overlay or Cyberpunk details */}
                <div className="absolute bottom-4 left-4 right-4 p-3 glass-card bg-background/40 backdrop-blur-md border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter text-neon-blue font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-neon-blue animate-pulse" />
                      {t("hero.biometric")}
                    </span>
                    <span>{t("hero.uid")}</span>
                  </div>
                </div>
              </div>

              {/* Orbital elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full border border-neon-cyan/20 flex items-center justify-center animate-spin-slow">
                <div className="w-3 h-3 rounded-full bg-neon-cyan pulse-glow" />
                <div className="absolute -top-1 left-1/2 w-1 h-1 bg-neon-cyan rounded-full" />
              </div>

              <div className="absolute -top-10 left-0 font-mono text-[10px] text-neon-blue/60 uppercase tracking-widest animate-pulse">
                {t("hero.entity")} // {t("hero.user")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
