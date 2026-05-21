import { Container } from "@/components/ui/Container/Container";
import styles from "./GalleryVideo.module.css";

type GalleryVideoProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    youtubeUrl?: string;
    videoTitle?: string;
  };
};

function getYouTubeEmbedUrl(value?: string) {
  if (!value) {
    return "";
  }

  const trimmed = value.trim();

  if (trimmed.includes("youtube.com/embed/")) {
    return trimmed;
  }

  const watchMatch = trimmed.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const shortMatch = trimmed.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  return "";
}

export function GalleryVideo({ data }: GalleryVideoProps) {
  const embedUrl = getYouTubeEmbedUrl(data?.youtubeUrl);

  return (
    <section className={styles.section} id="video">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || "Video"}</span>
          <h2>{data?.title || "Il video dell’autolavaggio, ora integrato nella Gallery."}</h2>
          <p>
            {data?.text ||
              "Il contenuto video del vecchio sito viene mantenuto e valorizzato in questa pagina, evitando una sezione separata e rendendo la Gallery più completa."}
          </p>
        </div>

        <div className={styles.videoShell}>
          <div className={styles.videoFrame}>
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={data?.videoTitle || "Video Autolavaggio Iorio"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className={styles.videoPlaceholder}>
                <div>
                  <strong>Video YouTube da Sanity</strong>
                  <p>
                    Inserisci nel CMS il link del video YouTube presente nel vecchio sito, così
                    verrà mostrato qui nella pagina Gallery.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}