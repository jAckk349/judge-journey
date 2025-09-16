import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";
import ProblemsPreview from "@/components/ProblemsPreview";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CodeEditor />
        <ProblemsPreview />
        <Pricing />
      </main>
      
      <footer className="border-t border-border bg-secondary/20 py-12">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CodeTrack
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Master coding interviews and competitive programming
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 CodeTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;