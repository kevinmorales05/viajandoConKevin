import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MapSection from "@/components/Map";
import Footer from "@/components/Footer";
import Image from 'next/image';

import {
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
  FaFlagUsa,
} from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
//Imagen de perfil
import profilePic from "/public/images/KevinMoralesSingapur.png"; 

const Home: React.FC = () => {
  const countriesData = [
    {
      continent: "Asia",
      icon: <FaGlobeAsia />,
      countries: ["Corea del Sur", "China", "Singapur"],
    },
    {
      continent: "Europa",
      icon: <FaGlobeEurope />,
      countries: ["Paises Bajos"],
    },
    {
      continent: "América Latina",
      icon: <FaGlobeAmericas />,
      countries: ["Perú", "Chile", "Colombia", "Ecuador", "México", "Panamá"],
    },
    {
      continent: "Estados Unidos",
      icon: <FaFlagUsa />,
      countries: ["Texas", "California", "Nevada", "Idaho", "Utah"],
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2>
        <div className="content">
          <h2>¿Quién soy yo?</h2>
          <p>
            Soy un nómada digital que vive para explorar el mundo y compartir su
            esencia. Con un amor profundo por la cultura, me sumerjo en
            historias locales, descubro sabores auténticos y relato experiencias
            de choques culturales que inspiran y conectan. Desde consejos
            prácticos para viajar hasta anécdotas memorables, creo contenido
            auténtico y cercano que te transporta a cada destino.
          </p>
          <p>
            Tengo pasión por descubrir y aprender, lo que me convierte en un
            viajero único que invita a otros a explorar con el corazón. Amo
            aprender el idioma del lugar que visito para conocer la cultura
            desde adentro.
          </p>
        </div>
        <div className="image">
          <Image
            src={profilePic}
            alt="Foto del autor"
            width={300}
            height={300}
            priority
            style={{ borderRadius: "50%" }}
          />
        </div>
      </Section2>
      <section id="countries">
        <Section>
          <h2>🌍 Países Visitados</h2>
          <p>
            He explorado muchos destinos fascinantes alrededor del mundo. Aquí
            están algunos destacados:
          </p>
          <Grid>
            {countriesData.map((region, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="icon">{region.icon}</div>
                <h3>{region.continent}</h3>
                <ul>
                  {region.countries.map((country, idx) => (
                    <li key={idx}>{country}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Grid>
        </Section>
      </section>
      <MapSection />
      <Footer />
    </div>
  );
};

// Styled Components
const Section = styled.section`
  margin: 2rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #666;
  }
`;
const Section2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 4rem 4rem;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .content {
    flex: 1;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #333;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .image {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  .card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: left;

    &:hover {
      transform: translateY(-5px);
    }

    .icon {
      font-size: 2.5rem;
      color: #0070f3;
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        color: #555;
        font-size: 1.1rem;
      }
    }
  }
`;

export default Home;
