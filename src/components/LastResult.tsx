import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const LastResult = () => {
  return (
    <Card className="bg-gradient-card border-border/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-info" />
        <h2 className="text-lg font-semibold text-card-foreground">Último Resultado</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <span className="text-sm text-muted-foreground">Multiplicador:</span>
          <div className="text-2xl font-bold text-success">1.23x</div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <span className="text-sm text-muted-foreground">Horário:</span>
          <div className="text-2xl font-bold text-foreground">17:14:00</div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <span className="text-sm text-muted-foreground">Data:</span>
          <div className="text-2xl font-bold text-foreground">17/07/2025</div>
        </div>
      </div>
    </Card>
  );
};

export default LastResult;