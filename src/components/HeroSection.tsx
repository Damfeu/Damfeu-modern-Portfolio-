import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-violet/5 blur-3xl float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--neon-green))] animate-pulse" />
            Available for work
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">
              Alex Chen
            </span>
          </h1>

          {/* Role */}
          <p className="animate-fade-in-up delay-200 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4">
            Full Stack Developer
          </p>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-300 text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10">
            I build exceptional digital experiences with modern technologies.
            Turning complex problems into elegant, scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="neon" size="lg" className="group">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="neon-outline" size="lg">
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up delay-500 flex items-center justify-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
