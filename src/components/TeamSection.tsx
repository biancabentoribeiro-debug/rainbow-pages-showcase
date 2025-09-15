import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamData = {
  coordination: [
    { name: "Carlos Vinicius Ribeiro Pinheiro", role: "Coordenação, Relatoria, Questionário" },
    { name: "Mayra Ribeiro Pinheiro", role: "Aplicação e Implementação" }
  ],
  projection: [
    { name: "Roberta Peres", organization: "NEG - UFABC" },
    { name: "Alberto Canseco", organization: "NEG - UFABC" },
    { name: "Bruna Mendes", organization: "NEG - UFABC" }
  ],
  revision: [
    { name: "Ivo Hirata", role: "Revisão" }
  ],
  tech: [
    { name: "Bianca Bento", role: "Data, Design e T.I." },
    { name: "Renan Moraes Neves", role: "Data, Design e T.I." }
  ]
};

const acknowledgments = [
  "Nada desta História teria sido escrita se não fosse pelo nosso fato histórico Neon Cunha",
  "À eterna Deputada Érica Malunguinho, ao Gabinete Mandata Quilombo e à Frente Parlamentar LGBT, pelo compromisso histórico com as pautas de diversidade e equidade",
  "Ao Consórcio Intermunicipal do Grande ABC, em especial à Maria Gracelly e ao Aroaldo, secretário executivo, pela dedicação institucional",
  "Ao GT LGBT, que recentemente se consolidou como Coordenadoria Regional de Políticas da Diversidade Sexual, fortalecendo a articulação intermunicipal",
  "À Secretaria de Justiça e Cidadania e à Coordenadoria Estadual de Políticas da Diversidade do Governo do Estado de São Paulo, nominalmente, ao caro Rafael Calumby, pela parceria e apoio no desenvolvimento desta iniciativa"
];

export default function TeamSection() {
  return (
    <div className="section-spacing">
      <div className="magazine-header">
        <h2 className="text-3xl font-bold rainbow-text mb-4">Equipe Responsável</h2>
        <p className="text-lg text-muted-foreground">
          Uma equipe multidisciplinar dedicada à produção de conhecimento sobre diversidade sexual e de gênero
        </p>
      </div>

      <div className="team-grid">
        <Card className="animated-element">
          <CardHeader>
            <CardTitle className="text-pride-purple">Desenvolvimento e Implementação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamData.coordination.map((member, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animated-element">
          <CardHeader>
            <CardTitle className="text-pride-pink">Projeção Acadêmica</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline" className="mb-2">
              Núcleo Esperança Garcia de Estudos de Gênero da UFABC
            </Badge>
            {teamData.projection.map((member, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.organization}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animated-element">
          <CardHeader>
            <CardTitle className="text-pride-blue">Revisão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamData.revision.map((member, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animated-element">
          <CardHeader>
            <CardTitle className="text-pride-green">Tecnologia e Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamData.tech.map((member, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 animated-element">
        <CardHeader>
          <CardTitle className="text-2xl rainbow-text">Agradecimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium mb-4">
            A revista da Pesquisa Censitária LGBTQIAPN+ expressa profundo reconhecimento:
          </p>
          <div className="space-y-4">
            {acknowledgments.map((acknowledgment, index) => (
              <div key={index} className="data-highlight">
                <p className="leading-relaxed">{acknowledgment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}