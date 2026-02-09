import { Code2, Rocket, Zap, Cpu, MapPin, Activity } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code2,
      title: t("about.modules.cleanCode.title"),
      description: t("about.modules.cleanCode.desc"),
    },
    {
      icon: Rocket,
      title: t("about.modules.fastDelivery.title"),
      description: t("about.modules.fastDelivery.desc"),
    },
    {
      icon: Zap,
      title: t("about.modules.modernStack.title"),
      description: t("about.modules.modernStack.desc"),
    },
  ];
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-neon-violet/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-md bg-primary/5 border border-primary/20">
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{t("about.subtitle")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 section-heading">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 font-mono text-sm">
              <span className="text-neon-cyan/50">//</span> {t("about.bio_title")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio */}
            <div className="space-y-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-transparent to-transparent hidden md:block" />

              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  {t("about.bio")}
                </p>
                <div className="p-6 glass-card border-l-2 border-l-primary/50 bg-primary/5 relative group">
                  <div className="absolute top-2 right-4 text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">{t("about.bio_status")}</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {t("about.bio_highlights")}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t("about.bio_focus")}
                </p>
              </div>

              {/* Status footer for bio */}
              <div className="flex gap-6 pt-4 font-mono text-[10px] uppercase text-muted-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                  {t("about.status")}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  {t("about.sync")}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card-hover p-6 flex items-start gap-6 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-neon-blue" />
                    <div className="absolute top-0 right-0 w-[1px] h-2 bg-neon-blue" />
                  </div>

                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 scale-in shadow-lg shadow-primary/5">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neon-blue/50 mb-1 group-hover:text-neon-blue transition-colors">
                      MODULE_0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
