import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/magazine-hero.jpg";

export default function MagazineCover() {
  return (
    <div className="magazine-header relative overflow-hidden">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />
      
      <div className="relative z-10 space-y-6">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Pesquisa Censitária
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold rainbow-text mb-4">
          REVISTA LGBTQIAPN+
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          Grande ABC
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            "A cor dessa cidade sou eu,<br />
            O canto dessa cidade é meu."
          </p>
          <p className="text-sm text-muted-foreground mt-2 italic">
            MERCURY, Daniela. O Canto da Cidade. Álbum O Canto da Cidade. 1992
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          <Card className="p-6 animated-element text-center bg-card/90 backdrop-blur">
            <h3 className="font-bold text-2xl text-pride-purple mb-2">2,232</h3>
            <p className="text-sm text-muted-foreground">Respondentes adultos</p>
          </Card>
          
          <Card className="p-6 animated-element text-center bg-card/90 backdrop-blur">
            <h3 className="font-bold text-2xl text-pride-pink mb-2">7</h3>
            <p className="text-sm text-muted-foreground">Cidades do Grande ABC</p>
          </Card>
          
          <Card className="p-6 animated-element text-center bg-card/90 backdrop-blur">
            <h3 className="font-bold text-2xl text-pride-blue mb-2">289</h3>
            <p className="text-sm text-muted-foreground">Pessoas com nome social</p>
          </Card>
        </div>
      </div>
    </div>
  );
}