import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

type HomeIntroProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    stat?: {
      label?: string;
      value?: string;
      text?: string;
    };
    points?: Array<{
      title?: string;
      text?: string;
    }>;
  };
};

const fallbackPoints = [
  {
    title: "Lavaggio a mano",
    text: "Ogni veicolo viene trattato con cura manuale, attenzione ai dettagli e prodotti selezionati."
  },
  {
    title: "Auto e mezzi industriali",
    text: "Servizi per autovetture, furgoni, camion, veicoli commerciali e mezzi da lavoro."
  },
  {
    title: "Impianto videosorvegliato",
    text: "Un’area organizzata e controllata, pensata per offrire un servizio pratico e affidabile."
  },
  {
    title: "Gestione acque reflue",
    text: "Utilizzo di depuratori e attenzione al corretto trattamento delle acque di lavaggio."
  }
];

const fallbackStat = {
  label: "Esperienza",
  value: "20+",
  text:
    "Anni di attività nel lavaggio manuale, con servizi dedicati sia ai privati sia alle aziende con parchi auto e mezzi da lavoro."
};

export function HomeIntro({ data }: HomeIntroProps) {
  const points = data?.points?.length ? data.points : fallbackPoints;
  const stat = data?.stat || fallbackStat;

  return (
    <Section className="home-intro-shell">
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">{data?.eyebrow || "Autolavaggio Iorio"}</span>
            <h2 className="section-heading">
              {data?.title || "A Napoli Nord, un servizio di lavaggio costruito sull’esperienza."}
            </h2>
            <p className="section-lead">
              {data?.text ||
                "Autolavaggio Iorio opera in zona Agnano con un’esperienza più che ventennale nel lavaggio manuale di autoveicoli, mezzi industriali e veicoli per l’igiene urbana."}
            </p>
          </div>

          <div className="intro-media-card">
            <div className="intro-media-content">
              <span className="intro-kicker">{stat.label || fallbackStat.label}</span>
              <strong className="intro-big-number">{stat.value || fallbackStat.value}</strong>
              <p>{stat.text || fallbackStat.text}</p>
            </div>
          </div>
        </div>

        <div className="intro-points-grid">
          {points.map((point, index) => (
            <article className="feature-card" key={`${point.title}-${index}`}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}