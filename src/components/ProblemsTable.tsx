import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Circle, Star, Video, Search, Grid3X3, Shuffle, Trash2, HelpCircle } from "lucide-react";

const ProblemsTable = () => {
  const categories = [
    { name: "Arrays & Hashing", solved: 5, total: 22, progress: 23 },
    { name: "Two Pointers", solved: 2, total: 13, progress: 15 },
    { name: "Sliding Window", solved: 2, total: 9, progress: 22 }
  ];

  const problems = [
    { 
      id: 1, 
      title: "Concatenation of Array", 
      difficulty: "Easy", 
      solved: false, 
      starred: true,
      hasVideo: true 
    },
    { 
      id: 2, 
      title: "Contains Duplicate", 
      difficulty: "Easy", 
      solved: true, 
      starred: true,
      hasVideo: true 
    },
    { 
      id: 3, 
      title: "Valid Anagram", 
      difficulty: "Easy", 
      solved: true, 
      starred: true,
      hasVideo: true 
    },
    { 
      id: 4, 
      title: "Two Sum", 
      difficulty: "Easy", 
      solved: true, 
      starred: true,
      hasVideo: true 
    },
    { 
      id: 5, 
      title: "Longest Common Prefix", 
      difficulty: "Easy", 
      solved: false, 
      starred: true,
      hasVideo: true 
    },
    { 
      id: 6, 
      title: "Group Anagrams", 
      difficulty: "Medium", 
      solved: true, 
      starred: true,
      hasVideo: true 
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-easy";
      case "Medium": return "text-medium"; 
      case "Hard": return "text-hard";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="core-skills" className="w-full">
            <TabsList className="bg-muted">
              <TabsTrigger value="core-skills" className="flex items-center gap-2">
                <span>🎯</span> Core Skills
              </TabsTrigger>
              <TabsTrigger value="neetcode-250" className="flex items-center gap-2">
                <span>🏆</span> NeetCode 250
              </TabsTrigger>
              <TabsTrigger value="system-design" className="flex items-center gap-2">
                <span>⚙️</span> System Design
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">15 / 250</h1>
          <div className="max-w-md mx-auto mb-4">
            <Progress value={6} className="h-2" />
          </div>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            The Neetcode 250 is the Neetcode 150 plus 100 more problems. 
            It's the most beginner friendly list, intended for people completely new to algorithms.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64 bg-secondary border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="bg-destructive/20 text-destructive hover:bg-destructive/30">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-6 space-y-4">
        {categories.map((category) => (
          <Card key={category.name} className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <Progress value={category.progress} className="h-2" />
              </div>
              <div className="text-right ml-4">
                <span className="text-sm text-muted-foreground">
                  ({category.solved} / {category.total})
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Expanded Category - Arrays & Hashing */}
      <div className="px-6 pb-6">
        <Card>
          <div className="p-4 border-b border-border bg-secondary/30">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Arrays & Hashing</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">(5 / 22)</span>
                <Progress value={23} className="w-48 h-2" />
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground mb-4">
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Star</div>
              <div className="col-span-6">Problem</div>
              <div className="col-span-2">Difficulty</div>
              <div className="col-span-2">Solution</div>
            </div>

            <div className="space-y-2">
              {problems.map((problem) => (
                <div 
                  key={problem.id} 
                  className="grid grid-cols-12 gap-4 py-3 hover:bg-secondary/30 rounded transition-colors cursor-pointer items-center"
                >
                  <div className="col-span-1">
                    {problem.solved ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="col-span-1">
                    <Star className={`h-4 w-4 ${problem.starred ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="col-span-6">
                    <span className="font-medium hover:text-primary transition-colors">
                      {problem.title}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <Badge 
                      variant="secondary" 
                      className={`${getDifficultyColor(problem.difficulty)} border-0`}
                    >
                      {problem.difficulty}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    {problem.hasVideo && (
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Video className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProblemsTable;