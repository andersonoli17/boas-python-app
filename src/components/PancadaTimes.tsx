import { Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PancadaTimes = () => {
  const times = [
    { time: "17:02", active: true },
    { time: "17:08", active: true }
  ];

  return (
    <Card className="bg-gradient-card border-border/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-warning" />
        <h2 className="text-lg font-semibold text-card-foreground">Horários Pancada!</h2>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Assine o Plano Pancada para ter acesso a lista completa.
      </p>
      
      <div className="flex gap-3">
        {times.map((item, index) => (
          <div
            key={index}
            className={`
              px-4 py-2 rounded-lg font-mono text-lg font-bold
              ${item.active 
                ? 'bg-success text-success-foreground' 
                : 'bg-muted text-muted-foreground'
              }
            `}
          >
            {item.time}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PancadaTimes;