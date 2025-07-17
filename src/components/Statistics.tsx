import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Statistics = () => {
  const stats = [
    {
      multiplier: "3x+",
      value: "1:04",
      rounds: "1 / 3",
      avgTime: "01:11",
      lastTime: "0:27",
      color: "text-info"
    },
    {
      multiplier: "5x+",
      value: "1:04",
      rounds: "1 / 6",
      avgTime: "2:08",
      lastTime: "4:14",
      color: "text-info"
    },
    {
      multiplier: "10x+",
      value: "1:04",
      rounds: "1 / 11",
      avgTime: "3:58",
      lastTime: "4:14",
      color: "text-info"
    },
    {
      multiplier: "20x+",
      value: "5:18",
      rounds: "12 / 20",
      avgTime: "7:45",
      lastTime: "2:26",
      color: "text-warning"
    },
    {
      multiplier: "30x+",
      value: "7:44",
      rounds: "19 / 30",
      avgTime: "18:40",
      lastTime: "21:16",
      color: "text-success"
    },
    {
      multiplier: "50x+",
      value: "29:00",
      rounds: "89 / 48",
      avgTime: "18:12",
      lastTime: "27:11",
      color: "text-destructive"
    }
  ];

  return (
    <Card className="bg-gradient-card border-border/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="h-5 w-5 text-accent" />
        <h2 className="text-lg font-semibold text-card-foreground">Estatísticas</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">{stat.multiplier}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rodadas:</span>
                <span className="text-foreground font-mono">{stat.rounds}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tempo Médio:</span>
                <span className="text-foreground font-mono">{stat.avgTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tempo ant.:</span>
                <span className="text-foreground font-mono">{stat.lastTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Statistics;