import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { archiveProjects, projectLink, projectLinkType, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const FILTERS: Filter[] = ["all", "web", "mobile", "saas", "data"];

const ProjectTile = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const ref = useReveal<HTMLDivElement>();
  const linkType = projectLinkType(project);
  const href = projectLink(project);
  const title = t(`projects.list.${project.key}.title`);

  const content = (
    <>
      <div className={cn("aspect-[16/11] overflow-hidden", project.mobile ? "bg-gradient-to-br from-brand-2/25 via-background to-brand/10" : "bg-background")}>
        <img
          src={project.image}
          alt={t("projects.screenshot", { title })}
          loading="lazy"
          className={cn("block h-full w-full object-top", project.mobile ? "object-contain p-4" : "object-cover")}
        />
      </div>
      {href && (
        <span
          aria-hidden="true"
          className="tile-go absolute right-4 top-4 flex h-11 w-11 scale-[0.6] items-center justify-center rounded-full bg-brand text-brand-foreground opacity-0 transition-all duration-300"
        >
          <ArrowUpRight size={18} />
        </span>
      )}
      <div className="flex flex-col gap-1.5 px-[22px] py-5">
        <div className="flex justify-between font-mono text-xs text-muted-foreground">
          <span>{t(`projects.kinds.${project.category}`)}</span>
          <span>
            {t(`projects.links.${linkType}`)}
            {href && " ↗"}
          </span>
        </div>
        <span className="font-display text-[22px] font-semibold tracking-tight">{title}</span>
        <span className="text-[15px] text-muted-foreground">{t(`projects.list.${project.key}.subtitle`)}</span>
      </div>
    </>
  );

  const tileClass =
    "tile relative block overflow-hidden rounded-[20px] border border-border bg-card transition-[transform,border-color] duration-300";

  return (
    <div ref={ref} className="reveal">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(tileClass, "hover:-translate-y-1.5 hover:border-brand")}
        >
          {content}
        </a>
      ) : (
        <div className={tileClass}>{content}</div>
      )}
    </div>
  );
};

const ProjectsGrid = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = archiveProjects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section aria-labelledby="archive-title" className="mx-auto max-w-[1200px] px-6 pb-32 pt-20">
      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-5">
        <h2 id="archive-title" className="font-display text-[clamp(28px,3vw,40px)] font-semibold tracking-tight">
          {t("projects.title")} <span className="text-muted-foreground">({visible.length})</span>
        </h2>
        <div role="group" aria-label={t("projects.filterLabel")} className="flex flex-wrap gap-2">
          {FILTERS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={cn(
                "min-h-11 rounded-full border px-[18px] text-sm font-medium transition-colors",
                filter === id
                  ? "border-brand bg-brand text-brand-foreground"
                  : "glass border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {t(`projects.filters.${id}`)}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-5">
        {visible.map((project) => (
          <ProjectTile key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
