import React, { useState } from "react";
import styled from "styled-components";

const postersData = [
  { id: 1, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 1" },
  { id: 2, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 2" },
  { id: 3, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 3" },
  { id: 4, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 4" },
  { id: 5, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 5" },
  { id: 6, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 6" },
  { id: 7, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 4" },
  { id: 8, src: "/images/Gallery/gallery1.png", description: "Descripción de la imagen 5" },
];

const PostersGrid = () => {
  const [activeDescription, setActiveDescription] = useState(null);

  const handleImageClick = (description) => {
    setActiveDescription(description);
    setTimeout(() => setActiveDescription(null), 3000); // Oculta después de 3 segundos
  };

  return (
    <Container>
      <Hero>
        <HeroText>Galería</HeroText>
      </Hero>
      <Grid>
        {postersData.map((poster) => (
          <Poster
            key={poster.id}
            onClick={() => handleImageClick(poster.description)}
          >
            <ImageWrapper>
              <img src={poster.src} alt={`Poster ${poster.id}`} />
            </ImageWrapper>
            <Overlay>{poster.description}</Overlay>
          </Poster>
        ))}
      </Grid>
      {activeDescription && <Popup>{activeDescription}</Popup>}
    </Container>
  );
};

export default PostersGrid;

// Estilos CSS

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hero = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/images/Gallery/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  justify-content: center; /* Asegura que las imágenes estén centradas */
  width: 90%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
    justify-items: center; /* Centra los ítems en pantallas pequeñas */
    width: 95%;
  }
`;

const Poster = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px; /* Limita el ancho máximo */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Ocupa el 90% del ancho en dispositivos móviles */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16; /* Controla la proporción 9:16 */
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen no se deforme */
    border-radius: 12px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0 0 12px 12px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Poster}:hover & {
    opacity: 1;
  }
`;

const Popup = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: fadeInOut 3s ease;

  @keyframes fadeInOut {
    0%,
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
