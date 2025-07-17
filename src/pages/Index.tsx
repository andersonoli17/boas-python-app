import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import DateSelector from "@/components/DateSelector";
import ResultGrid from "@/components/ResultGrid";

// Simulated data - replace with real API calls
const generateMockData = (count: number = 40) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    results.push({
      id: `result-${Date.now()}-${i}`,
      value: Math.random() * 15 + 0.5, // Random between 0.5 and 15.5
      time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    });
  }
  return results.sort((a, b) => b.time.localeCompare(a.time));
};

const Index = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [results, setResults] = useState(generateMockData());
  const [offset, setOffset] = useState(40);
  const [loading, setLoading] = useState(false);
  const [lastResult, setLastResult] = useState(results[0]);

  // Auto-update every 10 seconds (simulated)
  useEffect(() => {
    const interval = setInterval(() => {
      const newResult = generateMockData(1)[0];
      setResults(prev => [newResult, ...prev]);
      setLastResult(newResult);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setResults(generateMockData());
    setOffset(40);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const moreResults = generateMockData(40);
      setResults(prev => [...prev, ...moreResults]);
      setOffset(prev => prev + 40);
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-success">
          GoathBet - Painel Visual de Multiplicadores
        </h1>

        <DateSelector 
          onDateChange={handleDateChange}
          selectedDate={selectedDate}
        />

        {results.length > 0 && (
          <>
            {/* Last Result */}
            <div className="inline-block bg-card rounded-xl shadow-sm border p-4 mb-6">
              <span className="text-lg font-medium">
                <strong>Último Resultado:</strong>
              </span>
              <span className="ml-2 text-xl font-bold text-success">
                {lastResult.value.toFixed(2)}x
              </span>
              <span className="ml-3 text-base text-muted-foreground">
                às {lastResult.time}
              </span>
            </div>

            {/* Results Grid */}
            <ResultGrid 
              results={results}
              onLoadMore={handleLoadMore}
              loading={loading}
            />
          </>
        )}

        {results.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Nenhum dado encontrado para a data selecionada.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Index;
