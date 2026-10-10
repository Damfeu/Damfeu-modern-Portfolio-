import { useTranslation } from "react-i18next";
import { techMarquee } from "@/data/projects";
import { cn } from "@/lib/utils";

const MarqueeRow = ({ items, reverse }: { items: string[]; reverse?: boolean }) => (
  <div aria-hidden="true" className={cn("marquee", reverse && "marquee-reverse")}>
    {[0, 1].map((copy) => (
      <div
        key={copy}
        className={cn(
          "marquee-track font-display text-[clamp(28px,4vw,40px)] font-semibold tracking-tight",
          reverse && "text-muted-foreground",
        )}
      >
        {items.map((item) => (
          <span key={item} className="whitespace-nowrap">
            {item} <span className={reverse ? "text-brand-2" : "text-brand"}>✦</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

const TechMarquee = () => {
  const { t } = useTranslation();

  return (
    <section aria-label={t("marquee.label")} className="flex flex-col gap-5 border-y border-border py-10">
      <MarqueeRow items={techMarquee.primary} />
      <MarqueeRow items={techMarquee.secondary} reverse />
      <p className="sr-only">{[...techMarquee.primary, ...techMarquee.secondary].join(", ")}</p>
    </section>
  );
};

export default TechMarquee;
