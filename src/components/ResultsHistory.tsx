import { History, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResultsHistory = () => {
  // Mock data baseado na imagem
  const results = [
    [
      { value: "1.23x", time: "17:14:00", status: "low" },
      { value: "13.88x", time: "17:13:17", status: "high" },
      { value: "4.05x", time: "17:12:50", status: "medium" },
      { value: "2.27x", time: "17:12:30", status: "low" },
      { value: "1.00x", time: "17:12:20", status: "crash" },
      { value: "4.98x", time: "17:11:50", status: "medium" },
      { value: "2.30x", time: "17:11:29", status: "low" },
      { value: "2.79x", time: "17:11:09", status: "low" },
      { value: "2.93x", time: "17:10:45", status: "low" },
      { value: "1.00x", time: "17:10:32", status: "crash" },
      { value: "4.70x", time: "17:10:04", status: "medium" },
      { value: "1.12x", time: "17:09:53", status: "low" }
    ],
    [
      { value: "24.80x", time: "17:09:08", status: "very-high" },
      { value: "1.04x", time: "17:08:53", status: "low" },
      { value: "1.23x", time: "17:08:40", status: "low" },
      { value: "1.04x", time: "17:08:28", status: "low" },
      { value: "1.45x", time: "17:08:14", status: "low" },
      { value: "6.09x", time: "17:07:42", status: "medium" },
      { value: "1.04x", time: "17:07:32", status: "low" },
      { value: "41.18x", time: "17:06:37", status: "very-high" },
      { value: "4.99x", time: "17:06:08", status: "medium" },
      { value: "1.00x", time: "17:05:55", status: "crash" },
      { value: "1.92x", time: "17:05:36", status: "low" },
      { value: "3.33x", time: "17:05:16", status: "low" }
    ],
    [
      { value: "1.01x", time: "17:04:59", status: "low" },
      { value: "1.89x", time: "17:04:41", status: "low" },
      { value: "2.12x", time: "17:04:21", status: "low" },
      { value: "1.02x", time: "17:04:11", status: "low" },
      { value: "10.41x", time: "17:03:33", status: "high" },
      { value: "1.18x", time: "17:03:21", status: "low" },
      { value: "1.53x", time: "17:03:05", status: "low" },
      { value: "5.16x", time: "17:02:35", status: "medium" },
      { value: "1.47x", time: "17:02:20", status: "low" },
      { value: "1.20x", time: "17:02:08", status: "low" },
      { value: "4.74x", time: "17:01:40", status: "medium" },
      { value: "9.45x", time: "17:01:02", status: "high" }
    ]
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "crash":
        return "bg-destructive text-destructive-foreground";
      case "low":
        return "bg-muted text-muted-foreground";
      case "medium":
        return "bg-info text-info-foreground";
      case "high":
        return "bg-warning text-warning-foreground";
      case "very-high":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-card-foreground">Histórico de Resultados</h2>
        </div>
        
        <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Recomendamos a proteção em 1.49x e buscar de 2 a 3x
        </div>
      </div>
      
      <div className="space-y-3">
        {results.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {row.map((result, colIndex) => (
              <div
                key={colIndex}
                className={`
                  ${getStatusColor(result.status)}
                  rounded-lg p-3 text-center transition-all hover:scale-105 cursor-pointer
                `}
              >
                <div className="font-bold text-sm mb-1">{result.value}</div>
                <div className="text-xs opacity-75">{result.time}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
          <RefreshCw className="h-4 w-4 mr-2" />
          Carregar Mais Resultados
        </Button>
      </div>
    </Card>
  );
};

export default ResultsHistory;