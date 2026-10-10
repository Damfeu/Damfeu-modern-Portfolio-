import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import DisciplinesSection from "@/components/DisciplinesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectsGrid from "@/components/ProjectsGrid";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <DisciplinesSection />
        <FeaturedProjects />
        <ProjectsGrid />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
