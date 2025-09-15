import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import MagazineNavigation from "@/components/MagazineNavigation";
import MagazineCover from "@/components/MagazineCover";
import TeamSection from "@/components/TeamSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import ConclusionSection from "@/components/ConclusionSection";

const sections = [
  { id: "cover", title: "Capa", component: MagazineCover },
  { id: "team", title: "Equipe", component: TeamSection },
  { id: "methodology", title: "Metodologia", component: MethodologySection },
  { id: "results", title: "Resultados", component: ResultsSection },
  { id: "conclusion", title: "Conclusão", component: ConclusionSection },
];

export default function MagazineApp() {
  const [currentSection, setCurrentSection] = useState("cover");
  
  const currentIndex = sections.findIndex(section => section.id === currentSection);
  const CurrentComponent = sections[currentIndex]?.component || MagazineCover;
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };
  
  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSection("cover")}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Revista LGBTQIAPN+</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentIndex === sections.length - 1}
              className="gap-2"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <MagazineNavigation
              currentSection={currentSection}
              onSectionChange={setCurrentSection}
            />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <main className="max-w-4xl">
              <CurrentComponent />
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold rainbow-text">
              Pesquisa Censitária LGBTQIAPN+ do Grande ABC
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Uma iniciativa do Consórcio Intermunicipal do Grande ABC, Secretaria de Justiça e Cidadania 
              do Estado de São Paulo, e Coordenadoria Estadual de Políticas da Diversidade Sexual.
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
              <span>© 2024 Grande ABC</span>
              <span>•</span>
              <span>Orgulho e Diversidade</span>
              <span>•</span>
              <span>Dados para Políticas Inclusivas</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}