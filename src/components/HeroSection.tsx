import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { allProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import imgTodo from "@/assets/todo-mobile-cutout.webp";

const SHOWCASE_KEYS = ["dorcas", "patapay", "wisdomac", "cocec", "yadah", "anthonyMentor", "damAI", "bangui24"];
const SHOWCASE_INTERVAL = 4000;

const showcase = SHOWCASE_KEYS.map((key) => allProjects.find((p) => p.key === key)!).map((project) => ({
  ...project,
  domain: new URL(project.url!).hostname.replace(/^www\./, ""),
}));

/** Cycles through the showcase, paused while the tab is hidden and disabled for reduced motion */
function useShowcaseIndex() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % showcase.length);
    }, SHOWCASE_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return index;
}

const HeroSection = () => {
  const { t } = useTranslation();
  const words = t("hero.words", { returnObjects: true }) as string[];
  const index = useShowcaseIndex();
  const current = showcase[index];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1 -left-[120px] -top-20 h-[560px] w-[560px] bg-brand" />
        <div className="blob blob-2 -right-40 top-[120px] h-[620px] w-[620px] bg-brand-2" />
        <div className="blob blob-3 -bottom-[220px] left-[38%] h-[420px] w-[420px] bg-brand-2 !opacity-35" />
        <div className="gridlines" />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-[1200px] flex-wrap items-center gap-12">
        <div className="flex min-w-0 flex-[999_1_540px] flex-col gap-7 animate-fade-in-up">
          <div className="glass inline-flex items-center gap-2.5 self-start rounded-full border border-border px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_hsl(var(--brand))]" />
            {t("hero.badge")}
          </div>

          <h1
            id="hero-title"
            className="font-display text-[clamp(36px,7vw,92px)] font-semibold leading-[1.02] tracking-[-0.04em]"
          >
            {t("hero.titleStart")}
            <span className="ticker" aria-hidden="true">
              <span className="ticker-track">
                {[...words, words[0]].map((word, i) => (
                  <span key={i}>
                    <span className="text-gradient">{word}</span>
                  </span>
                ))}
              </span>
            </span>
            <span className="sr-only">{words.join(", ")}</span>
            {t("hero.titleEnd")}
          </h1>

          <p className="max-w-[540px] text-[19px] text-muted-foreground">{t("hero.desc")}</p>

          <div className="flex flex-wrap gap-3">
            <Button variant="brand" size="xl" asChild>
              <a href="#travaux">
                {t("hero.ctaPrimary")}
                <ArrowDown />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="stage relative h-[440px] min-w-0 flex-[1_1_420px] sm:h-[520px]">
          <div className="stage-browser absolute right-0 top-5 w-[92%] overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-9 items-center gap-[7px] border-b border-border px-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span key={current.domain} className="ml-3 animate-fade-in font-mono text-[11px] text-muted-foreground">
                {current.domain}
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
              {showcase.map((project, i) => (
                <img
                  key={project.key}
                  src={project.image}
                  alt=""
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-out",
                    i === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                  )}
                />
              ))}
              <span
                key={index}
                className="showcase-progress absolute bottom-0 left-0 h-[3px] bg-brand"
                style={{ animationDuration: `${SHOWCASE_INTERVAL}ms` }}
              />
            </div>
          </div>

          <div className="stage-phone absolute -bottom-6 left-0 w-[150px] sm:-left-6 sm:w-[200px]">
            <img
              src={imgTodo}
              alt=""
              className="h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="glass absolute bottom-6 right-3 flex flex-col gap-0.5 rounded-2xl border border-border px-3.5 py-2.5 font-mono text-xs">
            <span className="text-muted-foreground">{t("hero.deployed")}</span>
            <span key={current.key} className="animate-fade-in text-sm">
              {t(`projects.list.${current.key}.title`)}
            </span>
          </div>
        </div>
      </div>

      <a
        href="#disciplines"
        className="absolute bottom-7 left-1/2 flex min-h-11 -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-muted-foreground"
      >
        {t("hero.scroll")}
        <span className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
      </a>
    </section>
  );
};

export default HeroSection;
