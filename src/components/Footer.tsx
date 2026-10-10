import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-6 py-7 font-mono text-[13px] text-muted-foreground">
        <span>
          © {currentYear} Adododji Damaz · {t("footer.location")}
        </span>
        <span>{t("footer.tagline")}</span>
      </div>
    </footer>
  );
};

export default Footer;
