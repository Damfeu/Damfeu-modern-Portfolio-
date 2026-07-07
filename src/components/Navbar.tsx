import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between md:justify-center relative">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* Language & Theme Switchers - Absolute on desktop to keep menu centered */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="font-mono text-[10px] gap-2 border border-white/5 hover:bg-white/5 px-2"
            >
              {theme === "dark" ? (
                <Sun size={14} className="text-neon-cyan" />
              ) : (
                <Moon size={14} className="text-neon-cyan" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-mono text-[10px] gap-2 border border-white/5 hover:bg-white/5"
            >
              <Globe size={14} className="text-neon-cyan" />
              {i18n.language.toUpperCase()}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button - Left aligned to keep visual balance if needed, or just standard right */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="font-mono text-[10px] gap-2 border border-white/5 px-2"
            >
              {theme === "dark" ? (
                <Sun size={14} className="text-neon-cyan" />
              ) : (
                <Moon size={14} className="text-neon-cyan" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-mono text-[10px] gap-2 border border-white/5"
            >
              <Globe size={14} className="text-neon-cyan" />
              {i18n.language.toUpperCase()}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
