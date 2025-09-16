import { Button } from "@/components/ui/button";
import { Code2, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeTrack
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#problems" className="text-foreground/60 hover:text-foreground transition-colors">Problems</a>
            <a href="#contest" className="text-foreground/60 hover:text-foreground transition-colors">Contest</a>
            <a href="#discuss" className="text-foreground/60 hover:text-foreground transition-colors">Discuss</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;