import styled from "@emotion/styled";
import { useState } from "react";

const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      title: "Perdido en Seúl",
      date: "4 de abril de 2023",
      country: "Corea del Sur, Seúl",
      description:
        "Me perdí en la ciudad de Seul, almorcé con un amable extraño y aprendí a usar el metro.",
      images: [
        {
          src: "/images/seoul1.png",
          alt: "Seoul Streets",
          caption: "Vistiendo ropa tradicional",
        },
        {
          src: "/images/perdidosSeul.png",
          alt: "Seoul Metro",
          caption: "Usando el metro en Seúl",
        },
        
        {
          src: "/images/seoul2.png",
          alt: "Seoul Food",
          caption: "Lotte Tower",
        },
        {
          src: "/images/seoul3.png",
          alt: "Seoul View",
          caption: "Caminata casual en Seúl",
        },
      ],
      story:
        "Todo comenzó un día soleado en Seúl, donde me encontraba explorando las calles desconocidas de la ciudad. Como extranjero, me sentí un poco desorientado mientras intentaba encontrar mi camino hacia una pequeña cafetería local que había recomendado un amigo. Mientras caminaba, disfrutando de la vibrante atmósfera de Seúl, una fuerte corriente de gente comenzó a envolverme, llevándome por calles más estrechas y llenas de tiendas pintorescas. Después de varias vueltas y vueltas, me di cuenta de que había perdido la orientación. Miré alrededor con desesperación, tratando de encontrar alguna señal familiar. Justo en ese momento, un hombre mayor con una sonrisa amable se acercó a mí. Me preguntó si necesitaba ayuda y, aunque al principio estaba un poco cauteloso, acepté su oferta. Con su guía, aprendí a usar el metro de Seúl, un sistema tan eficiente y lleno de vida. Su amabilidad me tocó profundamente, y compartimos historias mientras atravesábamos el laberinto subterráneo. Aprendí más sobre la cultura local, y aquella experiencia se convirtió en uno de los momentos más memorables de mi viaje.",
    },
    {
      title: "Tomando una foto en Singapur",
      date: "9 de octubre de 2023",
      country: "Singapur",
      description:
        "Casi me arrestan por acostarme en una plaza a tomarme una foto.",
      images: [
        {
          src: "/images/tomandoFotoSingapur.png",
          alt: "Singapore Plaza",
          caption: "Tomando una foto en una plaza",
        },
        {
          src: "/images/singapore1.png",
          alt: "Singapore Skyline",
          caption: "Un marco irresistible",
        },
        {
          src: "/images/singapore2.png",
          alt: "Singapore Culture",
          caption: "Skyline de la ciudad",
        },
        {
          src: "/images/singapore3.png",
          alt: "Singapore Garden",
          caption: "Jardines de Singapur",
        },
      ],
      story:
        "Singapur siempre había sido un destino soñado para mí, una ciudad de contrastes entre lo moderno y lo antiguo. Al caminar por las calles llenas de rascacielos y parques floridos, sentía una energía única que me atraía cada rincón. Sin embargo, una tarde decidí alejarme del bullicio y explorar un pequeño parque en el centro. Buscando la mejor toma, decidí acostarme en el suelo para capturar una perspectiva diferente. No pasaron ni diez minutos antes de que un par de oficiales se acercaran y me llamaran la atención. Con una sonrisa nerviosa, intenté explicar que solo quería tomar una fotografía artística, pero sus miradas serias y el tono firme me hicieron entender que mi acción estaba fuera de los límites permitidos. Aunque el incidente terminó sin mayores problemas, me quedó grabado en la memoria como una lección sobre la regulación estricta en Singapur. Al final, esa experiencia me dio una nueva apreciación por la cultura ordenada y disciplinada del país, y una anécdota inusual para contar.",
    },
    {
      title: "Conociendo Machuppichu",
      date: "24 de diciembre de 2024",
      country: "Perú, Machupicchu",
      description: "El tren más hermoso del mundo",
      images: [
        {
          src: "/images/navidadCuzco.png",
          alt: "Cusco Celebration",
          caption: "Llegada a Cuzco",
        },
        {
          src: "/images/cuzco.png",
          alt: "Cusco Dinner",
          caption: "Calle colonial",
        },
        {
          src: "/images/machupicchu2.png",
          alt: "Cusco People",
          caption: "Tren a Aguas Calientes",
        },
        {
          src: "/images/machupicchu.png",
          alt: "Cusco Night",
          caption: "Machupicchu",
        },
      ],
      story:
        "Mi viaje en tren a Machu Picchu fue una experiencia inolvidable. Desde el momento en que abordé el tren en Ollantaytambo, cada paisaje era más espectacular que el anterior. A medida que avanzábamos, los verdes valles, ríos caudalosos y montañas imponentes parecían susurrar historias antiguas. La tranquilidad dentro del tren contrastaba con la emoción creciente al acercarnos a nuestro destino. Al llegar a Aguas Calientes, la estación final, un aire de anticipación invadía todos los sentidos. Al día siguiente, explorar Machu Picchu fue un sueño hecho realidad. Los antiguos muros incas, los templos sagrados y las vistas desde lo alto me dejaron sin palabras. Cada rincón del santuario inca reflejaba un legado de sabiduría y espiritualidad. Fue un viaje que combina naturaleza, historia y un profundo sentido de conexión con la cultura peruana.",
    },
  ];

  const openModal = (story) => setSelectedStory(story);
  const closeModal = () => setSelectedStory(null);

  return (
    <StoriesSection id="stories">
      <HeroImage>
        <Overlay>
          <h2>Historias fuera de serie</h2>
        </Overlay>
      </HeroImage>

      <div className="stories-container">
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-card"
            onClick={() => openModal(story)}
          >
            <img src={story.images[0].src} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <span>{story.date}</span>
          </div>
        ))}
      </div>

      {selectedStory && (
        <Modal>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h1>
              {" "}
              <b></b> {selectedStory.title}
            </h1>
            <p>
              {selectedStory.date} - {selectedStory.country}
            </p>
            <p>{selectedStory.description}</p>
            <div className="images-carousel">
              {selectedStory.images.map((img, idx) => (
                <ImageCard key={idx}>
                  <img src={img.src} alt={img.alt} />
                  <p>{img.caption}</p>
                </ImageCard>
              ))}
            </div>
            <p>{selectedStory.story}</p>
          </div>
        </Modal>
      )}
    </StoriesSection>
  );
};

const StoriesSection = styled.section`
  padding: 1rem 2rem;
  padding-top: 0rem;
  text-align: center;

  .stories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;

    .story-card {
      cursor: pointer;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 1rem;
      flex: 0 0 calc(33.33% - 1rem); // Para mantener 3 cards por fila en dispositivos grandes
      max-width: calc(
        33.33% - 1rem
      ); // Máximo de 3 cards por fila en tablets y mayores

      &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 12px;
      }

      h3 {
        font-size: 1.5rem;
      }

      p {
        color: #666;
      }

      span {
        display: block;
        margin-top: 0.5rem;
        color: #333;
      }
    }
  }

  @media (max-width: 768px) {
    .stories-container {
      .story-card {
        flex: 0 0 calc(50% - 1rem); // Dos cards por fila en dispositivos más pequeños
        max-width: calc(50% - 1rem);
      }
    }
  }

  @media (max-width: 480px) {
    .stories-container {
      .story-card {
        flex: 0 0 100%; // Una card por fila en dispositivos más pequeños
        max-width: 100%;
      }
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  height: 400px;
  background-image: url("/images/historias.png");
  background-size: cover;
  background-position: center;
  margin-top: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 90%; // Ancho máximo para dispositivos móviles
    max-height: 90vh; // Máximo alto para evitar que se sobrepase la pantalla
    overflow-y: auto; // Agrega scroll vertical solo si es necesario
    text-align: left;
    position: relative;

    h1 {
      font-size: 2rem;
    }

    p {
      margin-top: 1rem;
      color: #333;
    }

    .images-carousel {
      display: flex;
      overflow-x: auto;
      gap: 1rem;
      margin-top: 1rem;
    }
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ImageCard = styled.div`
  flex-shrink: 0;
  width: 150px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #555;
  }
`;

export default Stories;
