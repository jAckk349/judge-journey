import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CheckCircle, 
  Settings, 
  Maximize2, 
  RotateCcw, 
  Play,
  ChevronDown
} from "lucide-react";

const ProblemInterface = () => {
  const submissions = [
    {
      id: 1,
      status: "Accepted",
      language: "Python",
      date: "09/09/2025",
      runtime: "45ms",
      memory: "16.2MB"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel - Problem Description */}
      <div className="w-1/2 border-r border-border">
        <div className="p-4 border-b border-border">
          <Tabs defaultValue="question" className="w-full">
            <TabsList className="bg-muted">
              <TabsTrigger value="question">Question</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <TabsContent value="question" className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Two Sum</h1>
              <div className="flex items-center gap-2">
                <span className="text-success">Solved</span>
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-easy/20 text-easy border-easy/30">Easy</Badge>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground">
                Given an array of integers <code className="bg-secondary px-1 rounded text-foreground">nums</code> and an integer <code className="bg-secondary px-1 rounded text-foreground">target</code>, return the indices <code className="bg-secondary px-1 rounded text-foreground">i</code> and <code className="bg-secondary px-1 rounded text-foreground">j</code>
              </p>
              <p className="text-muted-foreground">
                such that <code className="bg-secondary px-1 rounded text-foreground">nums[i] + nums[j] == target</code> and <code className="bg-secondary px-1 rounded text-foreground">i != j</code>.
              </p>
              <p className="text-muted-foreground">
                You may assume that <em>every</em> input has exactly one pair of indices <code className="bg-secondary px-1 rounded text-foreground">i</code> and <code className="bg-secondary px-1 rounded text-foreground">j</code> that satisfy the condition.
              </p>
              <p className="text-muted-foreground">
                Return the answer with the smaller index first.
              </p>

              <h3 className="text-foreground">Example 1:</h3>
              <div className="bg-secondary p-4 rounded">
                <div className="text-success">Input:</div>
                <div className="text-foreground">nums = [3,4,5,6], target = 7</div>
                <div className="text-success mt-2">Output:</div>
                <div className="text-foreground">[0,1]</div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="submissions" className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border">
              <div>Submission</div>
              <div>Language</div>
              <div>Code</div>
              <div>Analysis</div>
              <div></div>
            </div>

            {submissions.map((submission) => (
              <div key={submission.id} className="grid grid-cols-5 gap-4 py-3 items-center">
                <div>
                  <div className="text-success font-medium">Accepted</div>
                  <div className="text-xs text-muted-foreground">{submission.date}</div>
                </div>
                <div className="text-foreground">{submission.language}</div>
                <div>
                  <Button variant="link" className="p-0 h-auto text-info">
                    View
                  </Button>
                </div>
                <div>
                  <Button variant="link" className="p-0 h-auto text-info">
                    Analyze Complexity
                  </Button>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </TabsContent>
      </div>

      {/* Right Panel - Code Editor */}
      <div className="w-1/2 flex flex-col">
        {/* Editor Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select defaultValue="python">
              <SelectTrigger className="w-32 bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 bg-code-bg p-4 font-mono text-sm">
          <div className="space-y-1">
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">1</span>
              <span>
                <span className="text-info">class</span>{' '}
                <span className="text-foreground">Solution:</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">2</span>
              <span className="ml-4">
                <span className="text-info">def</span>{' '}
                <span className="text-primary">twoSum</span>
                <span className="text-foreground">(</span>
                <span className="text-info">self</span>
                <span className="text-foreground">, </span>
                <span className="text-foreground">nums: </span>
                <span className="text-info">List</span>
                <span className="text-foreground">[</span>
                <span className="text-info">int</span>
                <span className="text-foreground">], target: </span>
                <span className="text-info">int</span>
                <span className="text-foreground">) -&gt; </span>
                <span className="text-info">List</span>
                <span className="text-foreground">[</span>
                <span className="text-info">int</span>
                <span className="text-foreground">]:</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">3</span>
              <span className="ml-8">
                <span className="text-foreground">mp={}</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">4</span>
              <span className="ml-8">
                <span className="text-info">for</span>{' '}
                <span className="text-foreground">i,n </span>
                <span className="text-info">in</span>{' '}
                <span className="text-primary">enumerate</span>
                <span className="text-foreground">(nums):</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">5</span>
              <span className="ml-12">
                <span className="text-foreground">diff=target-n</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">6</span>
              <span className="ml-12">
                <span className="text-info">if</span>{' '}
                <span className="text-foreground">diff </span>
                <span className="text-info">in</span>{' '}
                <span className="text-foreground">mp:</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">7</span>
              <span className="ml-16">
                <span className="text-info">return</span>{' '}
                <span className="text-foreground">[mp[diff],i]</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">8</span>
              <span className="ml-12">
                <span className="text-foreground">mp[n]=i</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground w-8 text-right mr-4">9</span>
              <span className="ml-8">
                <span className="text-info">return</span>{' '}
                <span className="text-foreground">[]</span>
              </span>
            </div>
          </div>
        </div>

        {/* Console */}
        <div className="border-t border-border">
          <div className="p-4 bg-secondary/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">Console</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  Run
                </Button>
                <Button size="sm" className="bg-success hover:bg-success/90">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemInterface;