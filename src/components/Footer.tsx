import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t("footer.builtBy")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/Damfeu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kokouvi-damaz-adododji-8b5424285", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
