import { ExternalLink, Github, Database, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Project Images
import imgSuperM from "@/assets/super-m.png";
import imgRodFluidity from "@/assets/rod-fluidity-dashboard.png";
import imgCafe from "@/assets/cafe-ecommerce.png";
import imgCommerceTracking from "@/assets/commerce-tracking-admin.png";
import imgCV from "@/assets/cv-generator.png";
import imgIA from "@/assets/ia-perfect-research.jpg";
import imgDSend from "@/assets/d-send.jpg";
import imgTodo from "@/assets/todo-mobile.jpg";
import imgBovan from "@/assets/BovanGroup.png";
import imgCocec from "@/assets/COCEC.png";
import imgDamAI from "@/assets/Dam-AI.png";

const projects = [
  {
    title: "Dam AI",
    tKey: "damAI",
    tech: ["Next.js 15", "TypeScript", "Tailwind 4", "RAG", "Llama 3.3"],
    image: imgDamAI,
    id: "DATA_CORE_DA_00",
    status: "LIVE",
    github: "#",
    demo: "https://dam-ai.vercel.app/",
  },
  {
    title: "COCEC Togo",
    tKey: "cocec",
    tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
    image: imgCocec,
    id: "DATA_CORE_CC_02",
    status: "STABLE",
    github: "#",
    demo: "https://www.cocectogo.org/",
  },
  {
    title: "Bovan Group",
    tKey: "bovanGroup",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: imgBovan,
    id: "DATA_CORE_BG_01",
    status: "LIVE",
    github: "#",
    demo: "https://proposition-bovan-group-mo17.vercel.app/",
  },
  
  {
    title: "Rod Fluidity",
    tKey: "rodFluidity",
    tech: ["React", "TypeScript", "Chart.js", "Tailwind", "SheetJS"],
    image: imgRodFluidity,
    id: "DATA_CORE_RF_03",
    status: "ACTIVE",
    github: "#",
    demo: "https://platform-dev.freetrade-ofr.com/",
  },
  {
    title: "CommerceTracking",
    tKey: "commerceTracking",
    tech: ["React", "tailwind", "SheetJS"],
    image: imgCommerceTracking,
    id: "DATA_CORE_CT_04",
    status: "STABLE",
    github: "#",
    demo: "https://tradeflow-admin.freetrade-ofr.com/signin",
  },
  {
    title: "Super M",
    tKey: "superM",
    tech: ["Laravel", "MySQL", "CSS"],
    image: imgSuperM,
    id: "DATA_CORE_SM_05",
    status: "STABLE",
    github: "https://github.com/Daniel79M/Super-m.git",
    demo: "#",
  },
  {
    title: "CV Generator",
    tKey: "cvGenerator",
    tech: ["Next", "PDFLib", "Tailwind"],
    image: imgCV,
    id: "DATA_CORE_CV_06",
    status: "RELEASED",
    github: "#",
    demo: "https://dam-cv.vercel.app/",
  },
  {
    title: "IA Perfect Research",
    tKey: "iaResearch",
    tech: ["Next", "OpenAI API", "tailwind"],
    image: imgIA,
    id: "DATA_CORE_IA_07",
    status: "BETA",
    github: "#",
    demo: "https://docs.perfectresearch.app/",
  },
  {
    title: "Café E-commerce",
    tKey: "cafe",
    tech: ["Wordpress", "Stripe", "MySQL"],
    image: imgCafe,
    id: "DATA_CORE_CF_08",
    status: "LIVE",
    github: "https://github.com/Damfeu/Ecommer-e-Wordpress",
    demo: "#",
  },
  {
    title: "D-Send",
    tKey: "dSend",
    tech: ["PHP", "MySQL"],
    image: imgDSend,
    id: "DATA_CORE_DS_09",
    status: "ENCRYPTED",
    github: "https://github.com/Damfeu/Messagerie-inst",
    demo: "#",
  },
  {
    title: "Todo Mobile",
    tKey: "todoMobile",
    tech: ["Kotlin", "Firebase"],
    image: imgTodo,
    id: "DATA_CORE_TM_10",
    status: "STABLE",
    github: "https://github.com/Damfeu/ToDoList-Kotlin",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Visual Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-neon-blue" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{t("projects.subtitle")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold section-heading">
                {t("projects.title_start")}<span className="text-neon-cyan">{t("projects.title_end")}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md font-mono text-sm border-l-2 border-neon-blue/30 pl-6 py-2">
              {t("projects.mining")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <article
                key={project.id}
                className="glass-card group flex flex-col relative border border-white/5 hover:border-neon-blue/30 transition-all duration-500 overflow-visible"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* ID Badge */}
                <div className="absolute -top-3 left-4 px-2 py-0.5 bg-background border border-border/50 text-[9px] font-mono text-muted-foreground z-20 group-hover:text-neon-blue transition-colors">
                  {project.id}
                </div>

                {/* Project Image Interface */}
                <div className="relative aspect-video bg-muted/20 overflow-hidden scanline-overlay group-hover:after:opacity-20 transition-all duration-500">
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />

                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm">
                    <span className="w-1 h-1 bg-neon-cyan animate-pulse rounded-full" />
                    <span className="text-[10px] font-mono text-white/80">{t(`projects.status.${project.status.toLowerCase()}`)}</span>
                  </div>
                </div>

                {/* Content HUD */}
                <div className="p-6 pt-4 flex-1 flex flex-col relative">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors font-mono">
                        {t(`projects.list.${project.tKey}.title`)}
                      </h3>
                      <p className="text-[10px] font-mono text-neon-blue/60 uppercase tracking-tight">
                        {t(`projects.list.${project.tKey}.subtitle`)}
                      </p>
                    </div>
                    <Database className="w-4 h-4 text-muted-foreground/30 group-hover:text-neon-blue/50 transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 flex-1 italic font-light leading-relaxed">
                    {t(`projects.list.${project.tKey}.desc`)}
                  </p>

                  {/* Tech Stack Matrix */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-secondary/20 border border-border/50 text-muted-foreground group-hover:border-neon-blue/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action UI */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Button variant="ghost" size="sm" asChild className="h-8 border border-transparent hover:border-white/5 hover:bg-white/5 font-mono text-[11px] px-3">
                      <a href={project.github} className="gap-2">
                        <Github size={14} className="text-neon-violet" />
                        {t("projects.srcCode")}
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="h-8 border border-transparent hover:border-white/5 hover:bg-white/5 font-mono text-[11px] px-3">
                      <a href={project.demo} className="gap-2">
                        <ExternalLink size={14} className="text-neon-cyan" />
                        {t("projects.liveSys")}
                      </a>
                    </Button>

                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <Layers className="w-4 h-4 text-neon-blue animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Laser Corner - Mobile hidden/Desktop visible */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </article>
            ))}
          </div>

          {/* View All Terminal */}
          <div className="text-center mt-20 relative">
            {!showAll && (
              <>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <Button
                  variant="neon-outline"
                  size="lg"
                  className="relative z-10 font-mono tracking-widest bg-background px-10"
                  onClick={() => setShowAll(true)}
                >
                  {t("projects.viewAll")}
                </Button>
              </>
            )}
            {showAll && (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-neon-blue font-mono text-[10px] tracking-widest opacity-50 hover:opacity-100"
                onClick={() => setShowAll(false)}
              >
                [ {t("projects.viewAll").includes("ACCÉDER") ? "RÉDUIRE L'ARCHIVE" : "REDUCE ARCHIVE"} ]
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
