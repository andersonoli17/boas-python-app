import { Plane, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const currentTime = new Date().toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <header className="bg-primary shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-foreground p-2 rounded-lg">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <div className="text-primary-foreground">
              <span className="text-sm font-medium">DASHBOARD</span>
              <h1 className="text-xl font-bold">DO CIFRÃO</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Analisar Gatilhos
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Analisar Vela Rosa
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Calculadora
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
              Planos de Acesso
            </Button>
          </nav>

          {/* Time */}
          <div className="flex items-center gap-2 text-primary-foreground">
            <Clock className="h-4 w-4" />
            <span className="font-mono text-lg">{currentTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;