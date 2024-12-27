import styled from '@emotion/styled';

const countriesData = [
  
  {
    src: "/images/PaisesVisitados/singapur.png",
    alt: "Singapur",
    title: "Singapur",
    description: "Arte, historia y la mejor comida del mundo."
  },
  {
    src: "/images/PaisesVisitados/south-korea.png",
    alt: "Corea del Sur",
    title: "Corea del Sur",
    description: "Un país lleno de cultura, tecnología y paisajes fascinantes."
  },
  {
    src: "/images/PaisesVisitados/usa.png",
    alt: "Estados Unidos",
    title: "Estados Unidos (Utah)",
    description: "La naturaleza del estado de Utah, especialmente sus parques nacionales, me dejó sin palabras."
  },
  {
    src: "/images/PaisesVisitados/ecuador.png",
    alt: "Ecuador",
    title: "Ecuador",
    description: "Aprendí a apreciar la diversidad de paisajes, desde las montañas de los Andes hasta la Amazonía."
  },
  {
    src: "/images/PaisesVisitados/peru.png",
    alt: "Peru",
    title: "Perú",
    description: "Aprendí a apreciar la arqueología, la buena comida y los grandes desiertos."
  },
  {
    src: "/images/PaisesVisitados/panama.png",
    alt: "Panamá",
    title: "Panamá",
    description: "Exploré el Canal de Panamá y disfruté de sus playas paradisíacas."
  },
  {
    src: "/images/PaisesVisitados/colombia.png",
    alt: "Colombia",
    title: "Colombia",
    description: "La calidez de su gente y su música vibrante me cautivaron."
  },
  {
    src: "/images/PaisesVisitados/china.png",
    alt: "China",
    title: "China",
    description: "La Gran Muralla y su rica historia me dejaron una impresión duradera."
  },
  
];

const Countries: React.FC = () => (
  <CountriesSection id="countries">
    <HeroImage>
      <h1>Países Visitados</h1>
    </HeroImage>
    <div className="countries-list">
      {countriesData.map((country, index) => (
        <div className="country-card" key={index}>
          <img src={country.src} alt={country.alt} />
          <h3>{country.title}</h3>
          <p>{country.description}</p>
        </div>
      ))}
    </div>
  </CountriesSection>
);

const CountriesSection = styled.section`
  padding: 0;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .countries-list {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 1rem 2rem;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
  }
  .countries-list::-webkit-scrollbar {
    height: 8px;
  }
  .countries-list::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  .countries-list::-webkit-scrollbar-track {
    background: transparent;
  }
  .country-card {
    flex: 0 0 auto;
    width: 280px;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    p {
      color: #555;
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url('/images/KevinMoralesSeogwipo.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;

export default Countries;
