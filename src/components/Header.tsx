import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold">
              CodeTrack
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/practice" className="text-foreground hover:text-primary transition-colors">Practice</a>
            <a href="/roadmap" className="text-foreground hover:text-primary transition-colors">Roadmap</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <span>💎</span>
            Pro
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;