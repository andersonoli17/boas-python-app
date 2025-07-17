import Header from "@/components/Header";
import LastResult from "@/components/LastResult";
import PancadaTimes from "@/components/PancadaTimes";
import Statistics from "@/components/Statistics";
import ResultsHistory from "@/components/ResultsHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LastResult />
          <PancadaTimes />
        </div>
        
        <Statistics />
        
        <ResultsHistory />
      </main>
    </div>
  );
};

export default Index;
