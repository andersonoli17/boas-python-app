import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Resultados", path: "/resultados" },
    { label: "Simulação de Ganho", path: "/simulacao" },
    { label: "Velas Altas", path: "/velas-altas" },
    { label: "Sair", path: "/logout" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div 
        className={cn(
          "bg-sidebar border-r border-sidebar-border transition-all duration-300 min-h-screen",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full mb-6 p-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            {isCollapsed ? "☰" : "← Menu"}
          </button>
          
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-sidebar-foreground mb-4">
              GoathBet
            </h2>
          )}
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive(item.path)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                {isCollapsed ? item.label.charAt(0) : item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;