import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Copy, Settings } from "lucide-react";

const CodeEditor = () => {
  const codeExample = `def two_sum(nums, target):
    """
    Given array of integers, return indices of two numbers
    that add up to target.
    """
    hash_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    
    return []

# Test cases
print(two_sum([2, 7, 11, 15], 9))  # Output: [0, 1]`;

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Code in Your Favorite Language
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Write, test, and submit solutions with our powerful online IDE supporting 15+ programming languages.
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto border-border/50 shadow-2xl shadow-background/20">
          {/* Editor Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Python 3</Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Two Sum</span>
                <span>•</span>
                <span className="text-accent">Easy</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                <Play className="h-4 w-4 mr-2" />
                Run Code
              </Button>
            </div>
          </div>
          
          {/* Editor Content */}
          <div className="relative">
            <pre className="p-6 bg-code-bg text-sm leading-relaxed overflow-x-auto">
              <code className="text-foreground font-mono">{codeExample}</code>
            </pre>
            
            {/* Line numbers */}
            <div className="absolute left-0 top-0 p-6 pr-4 text-muted-foreground/50 text-sm font-mono leading-relaxed select-none">
              {Array.from({ length: 17 }, (_, i) => (
                <div key={i + 1}>{i + 1}</div>
              ))}
            </div>
          </div>
          
          {/* Output */}
          <div className="border-t border-border p-4 bg-secondary/20">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium">Output:</span>
              <Badge variant="outline" className="text-success border-success/50">Success</Badge>
            </div>
            <pre className="text-sm font-mono text-muted-foreground">[0, 1]</pre>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CodeEditor;