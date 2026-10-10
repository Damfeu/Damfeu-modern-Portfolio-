import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="font-display text-[clamp(96px,20vw,200px)] font-bold leading-none tracking-[-0.04em] text-gradient">404</h1>
      <p className="text-xl text-muted-foreground">{t("notFound.title")}</p>
      <Button variant="brand" size="xl" asChild>
        <a href="/">{t("notFound.back")}</a>
      </Button>
    </main>
  );
};

export default NotFound;
