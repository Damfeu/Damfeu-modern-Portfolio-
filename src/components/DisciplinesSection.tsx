import { Monitor, Smartphone, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface Discipline {
  id: "web" | "mobile";
  icon: LucideIcon;
  stack: string[];
  tone: string;
}

const disciplines: Discipline[] = [
  { id: "web", icon: Monitor, stack: ["React", "Next.js", "Laravel", "Node.js", "Stripe"], tone: "brand" },
  { id: "mobile", icon: Smartphone, stack: ["Kotlin", "Flutter", "Firebase"], tone: "brand-2" },
];

const DisciplinesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="disciplines" aria-labelledby="disciplines-title" className="mx-auto max-w-[1200px] px-6 py-28 md:py-32">
      <Reveal className="mb-14 flex max-w-[820px] flex-col gap-4">
        <p className="kicker">{t("disciplines.kicker")}</p>
        <h2
          id="disciplines-title"
          className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.04em]"
        >
          {t("disciplines.titleStart")} <span className="text-gradient">{t("disciplines.titleAnd")}</span>{" "}
          {t("disciplines.titleEnd")}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {disciplines.map(({ id, icon: Icon, stack, tone }) => (
          <Reveal
            key={id}
            className="relative flex min-h-[340px] md:min-h-[420px] flex-col justify-between gap-8 overflow-hidden rounded-[28px] border border-border bg-card p-8 transition-colors hover:border-brand md:p-10"
          >
            <div
              aria-hidden="true"
              className={cn(
                "blob -right-24 -top-24 h-[300px] w-[300px] !opacity-20",
                tone === "brand" ? "bg-brand" : "bg-brand-2",
              )}
            />
            <div className="relative flex flex-col gap-3.5">
              <Icon size={40} strokeWidth={1.5} aria-hidden="true" className={tone === "brand" ? "text-brand" : "text-brand-2"} />
              <h3 className="font-display text-4xl font-semibold tracking-tight">{t(`disciplines.${id}.title`)}</h3>
              <p className="max-w-[420px] text-muted-foreground">{t(`disciplines.${id}.desc`)}</p>
            </div>
            <ul className="relative flex flex-wrap gap-2">
              {stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default DisciplinesSection;
