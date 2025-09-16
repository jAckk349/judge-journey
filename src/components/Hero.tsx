import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Code, Trophy, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="secondary" className="px-4 py-2">
            <Play className="w-4 h-4 mr-2" />
            Master coding interviews & competitive programming
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Code, Practice, and{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excel
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join thousands of developers improving their coding skills with our curated problems, 
            real-time code execution, and comprehensive progress tracking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Start Coding Now
              <Code className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Problems
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-accent" />
              <span>500+ Problems</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-info" />
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