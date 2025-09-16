import ProblemsSidebar from "@/components/ProblemsSidebar";
import ProblemsTable from "@/components/ProblemsTable";

const Problems = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <ProblemsSidebar />
      <ProblemsTable />
    </div>
  );
};

export default Problems;