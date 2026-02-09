import { useTranslation } from "react-i18next";

const skills = {
  frontend: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"
  ],
  backend: [
    "Laravel", "Node.js", "NestJS", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"
  ],
  tools: [
    "Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"
  ],
};

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Quantum Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* Floating particles background simulated via CSS Grid + animate */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-neon-cyan rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-neon-violet rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              {t("tech.title_start")}<span className="text-neon-cyan">{t("tech.title_end")}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light italic">
              "{t("tech.scanning")}"
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Frontend Cluster */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-10 bg-neon-blue/5 blur-3xl rounded-full" />
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-8 group overflow-visible">
                {/* Rotating decorative circles - Doubled */}
                <div className="absolute inset-0 rounded-full border border-neon-blue/30 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-neon-blue/10 animate-spin-slow-reverse" />
                <div className="absolute -inset-2 rounded-full border border-dashed border-neon-blue/20 scale-110 animate-spin-slow" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-dotted border-neon-blue/10 animate-spin-slow-reverse" style={{ animationDuration: '25s' }} />

                <div className="text-center z-20">
                  <h3 className="text-2xl font-bold text-neon-blue group-hover:scale-110 transition-transform">{t("tech.frontend")}</h3>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">{t("tech.labels.orbit")}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.frontend.map((skill, idx) => (
                  <span
                    key={skill}
                    className="skill-pill bg-neon-blue/5 border-neon-blue/20 hover:bg-neon-blue/20 hover:border-neon-blue/40 px-5 py-2 text-sm rounded-full float"
                    style={{ animationDelay: `${idx * 0.5}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Cluster */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-10 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-8 group">
                {/* Rotating decorative circles - Doubled */}
                <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin-slow-reverse" />
                <div className="absolute inset-2 rounded-full border border-accent/10 animate-spin-slow" />
                <div className="absolute -inset-2 rounded-full border border-dashed border-accent/20 scale-110 animate-spin-slow-reverse" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-dotted border-accent/10 animate-spin-slow" style={{ animationDuration: '25s' }} />

                <div className="text-center z-20">
                  <h3 className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform">{t("tech.backend")}</h3>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">{t("tech.labels.neural")}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.backend.map((skill, idx) => (
                  <span
                    key={skill}
                    className="skill-pill bg-accent/5 border-accent/20 hover:bg-accent/20 hover:border-accent/40 px-5 py-2 text-sm rounded-full float"
                    style={{ animationDelay: `${idx * 0.7}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Cluster */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-10 bg-neon-cyan/5 blur-3xl rounded-full" />
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-8 group">
                {/* Rotating decorative circles - Doubled */}
                <div className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-neon-cyan/10 animate-spin-slow-reverse" />
                <div className="absolute -inset-2 rounded-full border border-dashed border-neon-cyan/20 scale-110 animate-spin-slow" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-dotted border-neon-cyan/10 animate-spin-slow-reverse" style={{ animationDuration: '25s' }} />

                <div className="text-center z-20">
                  <h3 className="text-2xl font-bold text-neon-cyan group-hover:scale-110 transition-transform">{t("tech.tools")}</h3>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">{t("tech.labels.dev")}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={skill}
                    className="skill-pill bg-neon-cyan/5 border-neon-cyan/20 hover:bg-neon-cyan/20 hover:border-neon-cyan/40 px-5 py-2 text-sm rounded-full float"
                    style={{ animationDelay: `${idx * 0.3}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
