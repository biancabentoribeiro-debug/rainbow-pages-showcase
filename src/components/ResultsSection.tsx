import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const demographicData = [
  { age: "18–24 anos", count: 727, percentage: 32.6, color: "text-pride-red" },
  { age: "25–29 anos", count: 499, percentage: 22.4, color: "text-pride-orange" },
  { age: "30–39 anos", count: 649, percentage: 29.1, color: "text-pride-blue" },
  { age: "40+ anos", count: 357, percentage: 16.0, color: "text-pride-purple" },
];

const cityData = [
  { city: "São Bernardo do Campo", count: 598, percentage: 29.1, color: "border-pride-red" },
  { city: "Santo André", count: 586, percentage: 28.5, color: "border-pride-orange" },
  { city: "Diadema", count: 362, percentage: 17.9, color: "border-pride-yellow" },
  { city: "Mauá", count: 217, percentage: 10.7, color: "border-pride-green" },
  { city: "São Caetano do Sul", count: 175, percentage: 8.6, color: "border-pride-blue" },
];

const employmentData = [
  { category: "CLT", count: 978, percentage: 43.7, description: "Empregos formais com carteira assinada" },
  { category: "Estudantes", count: 445, percentage: 19.9, description: "Pessoas em formação acadêmica" },
  { category: "MEI/PJ", count: 258, percentage: 11.6, description: "Microempreendedores individuais" },
  { category: "Servidor Público", count: 205, percentage: 9.2, description: "Funcionários públicos" },
];

const politicalEngagement = [
  { activity: "Conhecem Lei Estadual 10.948/01", percentage: 82.9, color: "bg-pride-purple" },
  { activity: "Participaram da Parada SP", percentage: 59.8, color: "bg-pride-pink" },
  { activity: "Eventos LGBTQIAPN+ no ABC", percentage: 36.0, color: "bg-pride-blue" },
  { activity: "Conhecem legislação municipal", percentage: 16.8, color: "bg-pride-green" },
  { activity: "Vínculo com coletivos", percentage: 13.7, color: "bg-pride-orange" },
];

export default function ResultsSection() {
  return (
    <div className="section-spacing">
      <div className="magazine-header">
        <h2 className="text-3xl font-bold rainbow-text mb-4">Resultados e Discussões</h2>
        <p className="text-lg text-muted-foreground">
          Análise integrada dos dados coletados nos três eixos metodológicos
        </p>
      </div>

      <div className="data-highlight mb-8">
        <h3 className="text-xl font-bold text-pride-purple mb-3">Destaque Metodológico</h3>
        <p className="text-lg leading-relaxed">
          <strong>Mais de 2.000 pessoas</strong> responderam ao questionário se identificando com nome próprio (nome civil, completo ou parcial), contrariando expectativas sobre anonimato e demonstrando um ato de coragem e visibilidade política.
        </p>
        <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
          <p className="font-semibold text-pride-pink">
            289 pessoas declararam uso de nome social (mais de 10% das respostas totais)
          </p>
        </div>
      </div>

      {/* Demographic Profile */}
      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-red">Eixo 1: Perfil Socioeconômico e Condições de Vida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Distribuição Etária (Base: 2.232 respondentes adultos)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demographicData.map((item, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-pride-red">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{item.age}</span>
                    <Badge variant="outline" className={item.color}>
                      {item.percentage}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{item.count} pessoas</span>
                    <Progress value={item.percentage} className="w-20 h-2" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Distribuição por Cidade</h4>
            <div className="space-y-3">
              {cityData.map((item, index) => (
                <Card key={index} className={`p-4 border-l-4 ${item.color}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.city}</p>
                      <p className="text-sm text-muted-foreground">{item.count} respostas</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{item.percentage}%</Badge>
                      <Progress value={item.percentage} className="w-24 h-2 mt-1" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="data-highlight">
            <h5 className="font-bold text-pride-blue mb-2">Empregabilidade e Geração de Renda</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {employmentData.map((item, index) => (
                <div key={index} className="p-3 bg-white/50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">{item.category}</span>
                    <Badge>{item.percentage}%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-lg font-bold text-pride-purple">{item.count} pessoas</p>
                </div>
              ))}
            </div>
          </div>

          <div className="data-highlight">
            <h5 className="font-bold text-pride-green mb-3">Descoberta Importante: CLT entre Pessoas Negras</h5>
            <p className="leading-relaxed mb-3">
              Na amostra, a taxa de CLT entre pessoas negras <strong>(48,3%)</strong> supera a de brancas <strong>(41,4%)</strong>. 
              Este resultado, aparentemente paradoxal, reflete o forte movimento negro na região, vinculado aos movimentos 
              sindicais e programas de fortalecimento à juventude negra através de formações profissionalizantes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-pride-green">48,3%</p>
                <p className="text-sm">Pessoas Negras em CLT</p>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-pride-blue">41,4%</p>
                <p className="text-sm">Pessoas Brancas em CLT</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Political Participation */}
      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-blue">Eixo 2: Participação Política e Social</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Indicadores de Engajamento</h4>
            <div className="space-y-4">
              {politicalEngagement.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.activity}</span>
                    <Badge variant="outline">{item.percentage}%</Badge>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="data-highlight">
            <h5 className="font-bold text-pride-pink mb-3">Nome Social: Uso e Respeito</h5>
            <p className="mb-3">Entre pessoas trans, <strong>83,0%</strong> indicaram usar nome social.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-white/50 rounded-lg">
                <p className="text-xl font-bold text-pride-green">36,6%</p>
                <p className="text-xs">Sempre/Quase sempre respeitado</p>
              </div>
              <div className="p-3 bg-white/50 rounded-lg">
                <p className="text-xl font-bold text-pride-orange">61,7%</p>
                <p className="text-xs">Às vezes respeitado</p>
              </div>
              <div className="p-3 bg-white/50 rounded-lg">
                <p className="text-xl font-bold text-pride-red">1,7%</p>
                <p className="text-xs">Raramente/Nunca respeitado</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Victimization */}
      <Card className="animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-purple">Eixo 3: Vitimização e LGBTfobia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="data-highlight">
            <h5 className="font-bold text-pride-red mb-3">Intersecções que Mais Concentram Violência</h5>
            <p className="leading-relaxed mb-4">
              A análise interseccional revela que determinados grupos enfrentam níveis desproporcionais de violência, 
              especialmente pessoas trans e travestis, lésbicas negras, jovens e pessoas em situação de rua.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 border-l-4 border-pride-red bg-red-50/50">
                <h6 className="font-bold text-pride-red mb-2">Grupos Mais Vulnerabilizados</h6>
                <ul className="space-y-1 text-sm">
                  <li>• Mulheres trans e travestis</li>
                  <li>• Lésbicas negras</li>
                  <li>• Jovens LGBTQIAPN+ (18-24 anos)</li>
                  <li>• Pessoas não-binárias</li>
                </ul>
              </Card>
              
              <Card className="p-4 border-l-4 border-pride-orange bg-orange-50/50">
                <h6 className="font-bold text-pride-orange mb-2">Principais Contextos de Violência</h6>
                <ul className="space-y-1 text-sm">
                  <li>• Espaços familiares</li>
                  <li>• Ambiente escolar</li>
                  <li>• Locais de trabalho</li>
                  <li>• Serviços de saúde</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="data-highlight">
            <h5 className="font-bold text-pride-blue mb-3">Padrões Etários de Violência</h5>
            <p className="leading-relaxed">
              A pesquisa identificou que a incidência de violência varia significativamente por faixa etária, 
              com concentração entre jovens adultos, refletindo processos de descoberta identitária e maior exposição social.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}