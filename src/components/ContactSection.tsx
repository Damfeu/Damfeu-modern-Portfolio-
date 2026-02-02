import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-6">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to new ideas and collaborations.
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Email */}
              <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@alexchen.dev"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    hello@alexchen.dev
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span className="text-foreground font-medium">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground">
                Ready to start your next project?
              </p>
              <Button variant="neon" size="lg" className="group">
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
