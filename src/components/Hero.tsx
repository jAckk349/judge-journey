import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Code, Trophy, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="text-6xl font-bold mb-8">
            CodeTrack
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            A better way to prepare{" "}
            <br />
            <span className="text-muted-foreground">
              for coding interviews.
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get Pro
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span>500+ Problems</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-primary" />
              <span>15+ Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>50k+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;