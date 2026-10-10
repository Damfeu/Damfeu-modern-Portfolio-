import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const EMAIL = "adododji7@gmail.com";

const ContactSection = () => {
  const { t } = useTranslation();
  const marquee = t("contact.marquee");

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden pb-20 pt-28 md:pt-32">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="blob blob-1 left-[10%] top-[10%] h-[600px] w-[600px] bg-brand !opacity-30" />
        <div className="blob blob-3 -bottom-[10%] right-[5%] h-[600px] w-[600px] bg-brand-2 !opacity-35" />
      </div>

      <div aria-hidden="true" className="marquee relative mb-14">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="marquee-track font-display text-[clamp(64px,11vw,160px)] font-bold leading-none tracking-[-0.04em]"
          >
            {[0, 1].map((i) => (
              <span key={i} className="whitespace-nowrap">
                {marquee} <span className="text-gradient">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <Reveal className="relative mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-10 px-6">
        <div className="flex flex-[1_1_420px] flex-col gap-4">
          <h2
            id="contact-title"
            className="font-display text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em]"
          >
            {t("contact.title")}
          </h2>
          <p className="max-w-[480px] text-lg text-foreground/80">{t("contact.desc")}</p>
        </div>

        <div className="flex flex-[1_1_360px] flex-col gap-3">
          <Button variant="brand" size="xl" className="justify-between" asChild>
            <a href={t("contact.whatsappLink")} target="_blank" rel="noopener noreferrer">
              {t("contact.whatsapp")}
              <ArrowRight />
            </a>
          </Button>
          <Button variant="glass" size="xl" className="justify-between" asChild>
            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
              <Mail />
            </a>
          </Button>
          <div className="flex gap-3">
            <Button variant="glass" size="xl" className="flex-1" asChild>
              <a href="https://www.linkedin.com/in/kokouvi-damaz-adododji-8b5424285" target="_blank" rel="noopener noreferrer">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button variant="glass" size="xl" className="flex-1" asChild>
              <a href="https://github.com/Damfeu" target="_blank" rel="noopener noreferrer">
                <Github />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
