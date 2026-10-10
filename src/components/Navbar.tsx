import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const LANGUAGES = ["fr", "en"] as const;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = resolvedTheme !== "light";
  const currentLang = i18n.resolvedLanguage ?? "fr";

  const navLinks = [
    { href: "#travaux", label: t("nav.work") },
    { href: "#disciplines", label: t("nav.disciplines") },
    { href: "#services", label: t("nav.services") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label={t("nav.home")}
        className="glass relative mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-4 rounded-full border border-border pl-[18px] pr-2.5"
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-[17px] font-bold tracking-tight">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand text-sm text-brand-foreground">
            AD
          </span>
          <span>Damaz</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div role="group" aria-label={t("nav.language")} className="flex rounded-full border border-border p-[3px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => i18n.changeLanguage(lang)}
                aria-pressed={currentLang === lang}
                className={cn(
                  "min-h-9 min-w-10 rounded-full font-mono text-xs font-medium uppercase transition-colors",
                  currentLang === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? t("nav.themeLight") : t("nav.themeDark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "glass absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-3xl border border-border p-3 transition-all duration-300 md:hidden",
            isMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
