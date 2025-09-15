import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const abbreviations = [
  { abbr: "LGBTQIAPN+", full: "Lésbicas, Gays, Bissexuais, Travestis e pessoas Transexuais, Queer, Intersexo, Assexuais, Pansexuais, Neutros e outras identidades" },
  { abbr: "Grande ABC", full: "Região das cidades: Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Rio Grande da Serra e Ribeirão Pires" },
  { abbr: "CIGABC", full: "Consórcio Intermunicipal do Grande ABC" },
  { abbr: "NEG", full: "Núcleo de Estudo de Gênero 'Esperança Garcia'" },
  { abbr: "UFABC", full: "Universidade Federal do ABC" },
  { abbr: "CRPD", full: "Coordenadoria Regional de Políticas da Diversidade" },
  { abbr: "CRAS", full: "Centro de Referência de Assistência Social" },
  { abbr: "CREAS", full: "Centro de Referência Especializado de Assistência Social" },
  { abbr: "OAB", full: "Ordem dos Advogados do Brasil" },
];

export default function MethodologySection() {
  return (
    <div className="section-spacing">
      <div className="magazine-header">
        <h2 className="text-3xl font-bold rainbow-text mb-4">Introdução e Metodologia</h2>
        <p className="text-lg text-muted-foreground">
          Fundamentos científicos e metodológicos da pesquisa censitária LGBTQIAPN+
        </p>
      </div>

      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-purple">Introdução</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            A ausência de dados oficiais e regulares sobre a população LGBTQIAPN+ no Brasil constitui um dos maiores entraves à formulação e implementação de políticas públicas efetivas. Historicamente invisibilizadas pelos censos demográficos nacionais, as pessoas LGBTQIAPN+ permanecem à margem de estatísticas governamentais, o que reforça processos de exclusão, preconceito e vulnerabilidade social.
          </p>
          
          <div className="data-highlight">
            <p className="leading-relaxed">
              Nesse contexto, o Grande ABC — região metropolitana marcada por sua diversidade cultural, histórica e industrial — emerge como território estratégico para a realização de um levantamento censitário pioneiro.
            </p>
          </div>
          
          <p className="leading-relaxed">
            A proposta da pesquisa vai além da simples quantificação. Seu objetivo é revelar um retrato multidimensional das vidas LGBTQIAPN+, abrangendo questões de identidade, orientação, condições socioeconômicas, experiências de violência, acesso a serviços públicos, saúde, educação, cultura, trabalho e participação política.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-pink">Metodologia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            A metodologia da Pesquisa Censitária LGBTQIAPN+ do Grande ABC foi concebida para articular rigor científico e participação comunitária, de modo a produzir dados que refletissem de forma fidedigna a realidade vivida pela população LGBTQIAPN+.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 border-l-4 border-pride-red">
              <h4 className="font-bold text-pride-red mb-2">Eixo 1</h4>
              <h5 className="font-semibold mb-2">Perfil e Condições de Vida</h5>
              <p className="text-sm text-muted-foreground">
                Informações sociodemográficas, identidade de gênero, orientação sexual, raça/cor, escolaridade, trabalho, renda e moradia.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-pride-blue">
              <h4 className="font-bold text-pride-blue mb-2">Eixo 2</h4>
              <h5 className="font-semibold mb-2">Participação Política e Cidadania</h5>
              <p className="text-sm text-muted-foreground">
                Engajamento social e político, movimentos sociais, conselhos municipais e percepções sobre políticas de diversidade.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-pride-purple">
              <h4 className="font-bold text-pride-purple mb-2">Eixo 3</h4>
              <h5 className="font-semibold mb-2">Vitimização e LGBTfobia</h5>
              <p className="text-sm text-muted-foreground">
                Experiências de violência e discriminação, canais de denúncia e identificação de grupos vulnerabilizados.
              </p>
            </Card>
          </div>

          <div className="data-highlight">
            <p className="leading-relaxed">
              <strong>Inovação Metodológica:</strong> A escolha de agentes de campo oriundos da própria comunidade, que não se limitaram ao papel de pesquisadores acadêmicos, mas atuaram como articuladores sociais, criando vínculos de confiança com respondentes e assegurando linguagem inclusiva.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="animated-element">
        <CardHeader>
          <CardTitle className="text-2xl text-pride-green">Lista de Abreviaturas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {abbreviations.map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/30 border-l-2 border-pride-green">
                <div className="flex flex-col gap-1">
                  <Badge variant="outline" className="w-fit text-pride-green border-pride-green">
                    {item.abbr}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.full}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}