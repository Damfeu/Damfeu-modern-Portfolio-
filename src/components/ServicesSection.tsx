import { useTranslation } from "react-i18next";
import Reveal from "@/components/Reveal";

interface Service {
  title: string;
  desc: string;
}

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true }) as Service[];

  return (
    <section id="services" aria-labelledby="services-title" className="relative overflow-hidden border-y border-border">
      <div aria-hidden="true" className="blob blob-2 -left-[200px] top-[20%] h-[520px] w-[520px] bg-brand-2 !opacity-20" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:py-32">
        <Reveal className="mb-14 flex flex-col gap-4">
          <p className="kicker">{t("services.kicker")}</p>
          <h2
            id="services-title"
            className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.04em]"
          >
            {t("services.title")}
          </h2>
        </Reveal>

        <ol>
          {services.map((service, i) => (
            <li key={service.title}>
              <Reveal className="flex flex-wrap items-baseline gap-x-10 gap-y-3 border-t border-border py-8">
                <span className="flex-[0_0_60px] font-mono text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex-[1_1_320px] font-display text-[clamp(26px,3vw,40px)] font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="flex-[1_1_380px] text-muted-foreground">{service.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ServicesSection;
