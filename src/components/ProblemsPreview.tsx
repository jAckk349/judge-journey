import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, Trophy } from "lucide-react";

const ProblemsPreview = () => {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "47.1%",
      solved: true,
      premium: false,
      topics: ["Array", "Hash Table"]
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      acceptance: "35.6%",
      solved: false,
      premium: false,
      topics: ["Linked List", "Math"]
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "31.8%",
      solved: true,
      premium: false,
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "31.4%",
      solved: false,
      premium: true,
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      acceptance: "31.2%",
      solved: false,
      premium: false,
      topics: ["String", "Dynamic Programming"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-accent";
      case "Medium": return "text-warning";
      case "Hard": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curated Problem Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with carefully selected problems ranging from basic algorithms 
            to advanced data structures and system design.
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Problems</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Solved: 2/5
                </span>
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-border">
            {problems.map((problem) => (
              <div key={problem.id} className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {problem.solved ? (
                      <CheckCircle className="h-5 w-5 text-accent" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{problem.title}</span>
                        {problem.premium && (
                          <Badge variant="outline" className="text-warning border-warning/50">
                            <Trophy className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        {problem.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <span className={`font-medium ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <span className="text-muted-foreground">
                      {problem.acceptance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 border-t border-border text-center">
            <Button className="bg-primary hover:bg-primary/90">
              View All Problems
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProblemsPreview;