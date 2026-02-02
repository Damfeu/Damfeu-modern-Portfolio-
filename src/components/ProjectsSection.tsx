import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectAiDashboard from "@/assets/project-ai-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDevops from "@/assets/project-devops.jpg";

const projects = [
  {
    title: "AI Dashboard",
    description: "Real-time analytics dashboard powered by machine learning for predictive insights and data visualization.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: projectAiDashboard,
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online marketplace with payment processing, inventory management, and admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: projectEcommerce,
    github: "#",
    demo: "#",
  },
  {
    title: "DevOps Toolkit",
    description: "Automated deployment pipeline with monitoring, logging, and infrastructure as code capabilities.",
    tech: ["Node.js", "Docker", "Kubernetes", "AWS"],
    image: projectDevops,
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              A selection of my recent work and side projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass-card-hover group overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/60 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} className="gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} className="gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="neon-outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
