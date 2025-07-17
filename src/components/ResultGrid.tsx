import { cn } from "@/lib/utils";

interface Result {
  value: number;
  time: string;
  id: string;
}

interface ResultGridProps {
  results: Result[];
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

const getResultColor = (value: number) => {
  if (value >= 10) return "bg-rose-500 text-white"; // Rose
  if (value >= 2) return "bg-purple-500 text-white"; // Purple  
  if (value >= 1) return "bg-blue-500 text-white"; // Blue
  return "bg-muted text-muted-foreground"; // Gray
};

const getResultAnimation = (value: number) => {
  if (value >= 10) return "animate-pulse"; // Blink for high values
  return "";
};

const ResultGrid = ({ results, onLoadMore, hasMore = true, loading }: ResultGridProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      <h2 className="text-xl font-bold text-primary mb-4">
        Histórico de Resultados
      </h2>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 mb-6">
        {results.map((result) => (
          <div
            key={result.id}
            className={cn(
              "p-3 rounded-lg text-center font-bold shadow-sm transition-all duration-200 hover:scale-105",
              getResultColor(result.value),
              getResultAnimation(result.value)
            )}
          >
            <div className="text-sm font-bold">
              {result.value.toFixed(2)}x
            </div>
            <div className="text-xs opacity-80 mt-1">
              {result.time}
            </div>
          </div>
        ))}
      </div>

      {hasMore && onLoadMore && (
        <div className="text-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium hover:bg-destructive/90 disabled:opacity-50 transition-colors"
          >
            {loading ? "Carregando..." : "Carregar Mais Resultados"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultGrid;