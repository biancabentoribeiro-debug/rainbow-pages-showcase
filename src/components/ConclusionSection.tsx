import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Target, Users, BookOpen } from "lucide-react";

const keyRecommendations = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Políticas de Empregabilidade",
    description: "Agências de intermediação no ABC, capacitação e cotas em programas municipais para mulheres trans e pessoas não-binárias.",
    priority: "Alta"
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Permanência Estudantil", 
    description: "Auxílio permanência, saúde mental e reconhecimento do nome social para estudantes negros, trans e não-binários.",
    priority: "Alta"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Proteção Social",
    description: "Ampliar busca ativa para benefícios sociais junto a pessoas trans e mulheres trans, que apresentam maiores taxas de dependência.",
    priority: "Crítica"
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Combate à Violência",
    description: "Estratégias específicas para grupos mais vulnerabilizados, especialmente jovens LGBTQIAPN+ e pessoas trans.",
    priority: "Crítica"
  }
];

const impactMetrics = [
  { label: "Invisibilidade Quebrada", value: "2.232 pessoas", description: "se identificaram nominalmente" },
  { label: "Diversidade Regional", value: "7 cidades", description: "do Grande ABC mapeadas" },
  { label: "Representatividade Trans", value: "289 pessoas", description: "com nome social declarado" },
  { label: "Engajamento Político", value: "82,9%", description: "conhecem legislação LGBT" }
];

export default function ConclusionSection() {
  return (
    <div className="section-spacing">
      <div className="magazine-header">
        <h2 className="text-3xl font-bold rainbow-text mb-4">Conclusão</h2>
        <p className="text-lg text-muted-foreground">
          Síntese dos achados e recomendações para políticas públicas inclusivas
        </p>
      </div>

      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-purple flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Registro Histórico e Legitimação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            A Pesquisa Censitária LGBTQIAPN+ do Grande ABC representa um marco inédito na produção de conhecimento 
            sobre diversidade sexual e de gênero em âmbito nacional a partir de um recorte regionalizado. 
            Mais do que números, esta pesquisa materializa um processo participativo que traduz a diversidade 
            e complexidade das experiências vividas pela população LGBTQIAPN+ da região.
          </p>
          
          <div className="data-highlight">
            <p className="font-semibold text-pride-pink mb-2">Quebra de Invisibilidade Histórica</p>
            <p className="leading-relaxed">
              O fato de mais de 2.000 pessoas terem se identificado nominalmente contraria expectativas sobre 
              anonimato e representa um ato político de visibilidade, coragem e afirmação identitária que 
              transcende a simples coleta de dados.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-blue">Impacto e Números-Chave</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="p-4 border-l-4 border-pride-blue bg-blue-50/30">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-pride-blue border-pride-blue">
                    {metric.label}
                  </Badge>
                  <p className="text-2xl font-bold text-pride-purple">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-green">Recomendações Estratégicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            A partir dos achados da pesquisa, apresentamos recomendações concretas para a construção de 
            políticas regionais e estaduais que respondam às demandas específicas da população LGBTQIAPN+:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyRecommendations.map((rec, index) => (
              <Card key={index} className="p-4 animated-element hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-pride-purple mt-1">
                    {rec.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="font-bold">{rec.title}</h5>
                      <Badge 
                        variant={rec.priority === "Crítica" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="animated-element">
        <CardHeader>
          <CardTitle className="text-2xl rainbow-text">Perspectivas Futuras</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Esta pesquisa não se encerra em si mesma. Ao contrário, inaugura um processo contínuo de 
            monitoramento, avaliação e aprimoramento das políticas públicas voltadas à população LGBTQIAPN+. 
            Os dados aqui apresentados devem ser revisitados periodicamente, permitindo acompanhar a 
            evolução das condições de vida, participação política e segurança da comunidade.
          </p>
          
          <div className="data-highlight">
            <p className="font-semibold text-pride-purple mb-2">Compromisso com a Continuidade</p>
            <p className="leading-relaxed">
              A revista se coloca como instrumento de registro histórico, de legitimação das vozes e 
              experiências LGBTQIAPN+ e de fortalecimento das lutas coletivas por cidadania plena, 
              equidade e justiça social.
            </p>
          </div>
          
          <div className="text-center pt-6 border-t border-border">
            <p className="text-lg italic text-muted-foreground mb-2">
              "A cor dessa cidade sou eu, O canto dessa cidade é meu."
            </p>
            <p className="text-sm text-muted-foreground">
              Esta pesquisa ecoa as palavras de Daniela Mercury: somos as cores e os cantos das nossas cidades.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}