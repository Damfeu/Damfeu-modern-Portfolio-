import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { featuredProjects, projectLink, projectLinkType } from "@/data/projects";
import { cn } from "@/lib/utils";

const STICKY_TOP = 104;
const STICKY_STEP = 18;

/**
 * Cards are sticky; as the next card slides over one, it shrinks and dims.
 * Driven by scroll position so it works in every browser.
 */
function useStackedCards() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = cardsRef.current;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!card) return;
        if (!next) {
          card.style.transform = "";
          card.style.filter = "";
          return;
        }
        const nextStickyTop = STICKY_TOP + (i + 1) * STICKY_STEP;
        const distance = next.getBoundingClientRect().top - nextStickyTop;
        const progress = Math.min(Math.max(1 - distance / card.offsetHeight, 0), 1);
        card.style.transform = `scale(${1 - progress * 0.08})`;
        card.style.filter = progress > 0 ? `brightness(${1 - progress * 0.45})` : "";
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return cardsRef;
}

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const cardsRef = useStackedCards();
  const total = String(featuredProjects.length).padStart(2, "0");

  return (
    <section id="travaux" aria-labelledby="featured-title" className="mx-auto max-w-[1200px] px-6 pb-20 pt-10">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <p className="kicker">{t("featured.kicker")}</p>
          <h2
            id="featured-title"
            className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.04em]"
          >
            {t("featured.title")}
          </h2>
        </div>
        <p className="max-w-[380px] text-muted-foreground">{t("featured.hint")}</p>
      </Reveal>

      <div className="flex flex-col gap-8">
        {featuredProjects.map((project, i) => {
          const linkType = projectLinkType(project);
          const title = t(`projects.list.${project.key}.title`);
          return (
            <article
              key={project.key}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ top: STICKY_TOP + i * STICKY_STEP }}
              className="sticky flex min-h-[560px] origin-top flex-wrap overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.45)] will-change-transform"
            >
              <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px] p-7 md:p-12">
                <div className="flex justify-between gap-3 font-mono text-[13px] text-muted-foreground">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                  <span className="text-brand">{t(`projects.kinds.${project.category}`)}</span>
                </div>
                <h3 className="font-display text-[clamp(36px,4vw,56px)] font-semibold leading-none tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="text-lg">{t(`projects.list.${project.key}.subtitle`)}</p>
                <p className="text-muted-foreground">{t(`projects.list.${project.key}.desc`)}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
                {linkType !== "private" && (
                  <Button variant="glass" size="xl" className="self-start" asChild>
                    <a href={projectLink(project)} target="_blank" rel="noopener noreferrer">
                      {t(`projects.cta.${linkType}`)}
                      <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </div>

              <div
                className={cn(
                  "relative min-h-[320px] min-w-0 flex-[1.3_1_420px] overflow-hidden",
                  project.mobile ? "bg-gradient-to-br from-brand-2/25 via-background to-brand/10" : "bg-background",
                )}
              >
                <img
                  src={project.image}
                  alt={t("projects.screenshot", { title })}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full",
                    project.mobile ? "object-contain p-10" : "object-cover object-top",
                  )}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
