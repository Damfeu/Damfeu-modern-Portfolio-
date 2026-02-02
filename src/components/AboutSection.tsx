import { Code2, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Turning ideas into production-ready applications efficiently.",
  },
  {
    icon: Zap,
    title: "Modern Stack",
    description: "Using cutting-edge technologies for optimal performance.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              Passionate about creating impactful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a full-stack developer with <span className="text-primary font-medium">5+ years</span> of experience 
                building web applications. My journey started with curiosity about how things work on the internet, 
                and it evolved into a passion for crafting exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and cloud technologies. When I'm not coding, 
                you'll find me exploring new frameworks, contributing to open source, or 
                sharing knowledge through technical writing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently focused on building AI-powered applications and exploring the 
                intersection of machine learning and web development.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card-hover p-6 flex items-start gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
