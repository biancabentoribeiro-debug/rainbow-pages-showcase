import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, BookOpen, Users, BarChart3, AlertTriangle } from "lucide-react";

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  sections?: string[];
}

const navigationItems: NavigationItem[] = [
  {
    id: "cover",
    title: "Capa e Apresentação",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: "team",
    title: "Equipe e Agradecimentos", 
    icon: <Users className="w-4 h-4" />,
    sections: ["Equipe Responsável", "Agentes de Pesquisa", "Agradecimentos"]
  },
  {
    id: "methodology",
    title: "Metodologia",
    icon: <BarChart3 className="w-4 h-4" />,
    sections: ["Introdução", "Metodologia", "Abreviaturas"]
  },
  {
    id: "results",
    title: "Resultados e Discussões",
    icon: <BarChart3 className="w-4 h-4" />,
    sections: ["Perfil Socioeconômico", "Participação Política", "Vitimização LGBT"]
  },
  {
    id: "conclusion",
    title: "Conclusão",
    icon: <AlertTriangle className="w-4 h-4" />,
  }
];

interface MagazineNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function MagazineNavigation({ currentSection, onSectionChange }: MagazineNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <Card className="p-4 sticky top-4 animated-element">
      <h3 className="font-bold text-lg rainbow-text mb-4">Sumário</h3>
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <div key={item.id}>
            <Button
              variant={currentSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-2 ${
                currentSection === item.id ? "pride-gradient text-white" : ""
              }`}
              onClick={() => {
                onSectionChange(item.id);
                if (item.sections) {
                  toggleExpanded(item.id);
                }
              }}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.title}</span>
              {item.sections && (
                expandedItems.includes(item.id) ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
            
            {item.sections && expandedItems.includes(item.id) && (
              <div className="ml-6 mt-2 space-y-1">
                {item.sections.map((section, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => onSectionChange(`${item.id}-${index}`)}
                  >
                    {section}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </Card>
  );
}