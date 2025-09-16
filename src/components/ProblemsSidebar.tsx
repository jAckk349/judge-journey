import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, List, Building2, Trophy, BarChart3 } from "lucide-react";

const ProblemsSidebar = () => {
  const stats = [
    { difficulty: "Easy", solved: 7, total: 60, color: "text-easy" },
    { difficulty: "Medium", solved: 8, total: 155, color: "text-medium" },
    { difficulty: "Hard", solved: 0, total: 35, color: "text-hard" }
  ];

  return (
    <div className="w-60 bg-card border-r border-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">Menu</h2>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        <Card className="p-4 bg-secondary/80 border-primary/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-primary/20">
              <List className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Practice Problems</span>
          </div>
        </Card>

        <Card className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-muted">
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <span className="font-medium">Company Tagged</span>
              <Badge variant="secondary" className="ml-2 text-xs">New</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer opacity-60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-muted">
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="font-medium">Quizzes</span>
          </div>
        </Card>

        {/* Stats Section */}
        <div className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-muted">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="font-medium">Stats</span>
          </div>

          <div className="space-y-4 pl-2">
            {stats.map((stat) => (
              <div key={stat.difficulty}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${stat.color}`}>
                    {stat.difficulty}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.solved} / {stat.total}
                  </span>
                </div>
                <Progress 
                  value={(stat.solved / stat.total) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSidebar;