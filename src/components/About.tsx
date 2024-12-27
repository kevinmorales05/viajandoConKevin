import styled from "@emotion/styled";
import Image from "next/image";

const About: React.FC = () => (
  <AboutSection id="about">
    <HeaderSection>
      <Image
        src="/images/KevinJeju.png"
        alt="Paisaje representativo"
        width={1200}
        height={400}
        layout="responsive"
        style={{ borderRadius: "10px" }}
      />
      <h1>¡Hola! Soy Kevin</h1>
    </HeaderSection>

    <ContentSection>
      <p>
        ¡Hola! Soy de Ecuador, un país de Sudamérica, pequeño pero lleno de
        personas y paisajes geniales. Me encanta conversar y aprender. Nunca me
        quedo quieto y actualmente estoy explorando el mundo.
      </p>

      <Image
        src="/images/KevinMoralesEcuador.png"
        alt="Paisaje de Ecuador"
        width={800}
        height={400}
        layout="responsive"
        style={{ borderRadius: "10px", margin: "1rem auto" }}
      />

      <h2>Yo en 80 palabras</h2>
      <p>
        Soy un nómada digital que vive para explorar el mundo y compartir su
        esencia. Con un amor profundo por la cultura, me sumerjo en historias
        locales, descubro sabores auténticos y relato experiencias de choques
        culturales que inspiran y conectan. Amo aprender el idioma del lugar
        que visito para conocer la cultura desde adentro.
      </p>
    </ContentSection>

    <ContentSection>
      <h2>Hobbies</h2>
      <HobbiesGrid>
        <HobbyCard>
          <Image
            src="/images/KevinMoralesSeul2.png"
            alt="Viajar"
            width={400}
            height={300}
            layout="responsive"
            style={{ borderRadius: "10px" }}
          />
          <h3>Viajar</h3>
          <p>Explorar nuevos países y aprender sus idiomas.</p>
        </HobbyCard>
        <HobbyCard>
          <Image
            src="/images/KevinMoralesComida.png"
            alt="Comida"
            width={400}
            height={300}
            layout="responsive"
            style={{ borderRadius: "10px" }}
          />
          <h3>Comida</h3>
          <p>Probar nuevas delicias y descubrir sabores únicos.</p>
        </HobbyCard>
        <HobbyCard>
          <Image
            src="/images/KevinMoralesQuitoProgramar.png"
            alt="Programar"
            width={400}
            height={300}
            layout="responsive"
            style={{ borderRadius: "10px" }}
          />
          <h3>Programar</h3>
          <p>Crear aplicaciones y resolver problemas.</p>
        </HobbyCard>
      </HobbiesGrid>
    </ContentSection>

    <ContentSection>
      <h2>Idiomas que aprendí mientras viajaba</h2>
      <LanguagesList>
        <li>Inglés</li>
        <li>Portugués</li>
        <li>Chino</li>
        <li>Coreano</li>
        <li>Español</li>
      </LanguagesList>
    </ContentSection>
  </AboutSection>
);

const AboutSection = styled.section`
  padding: 2rem 3rem;
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    margin-top: 1rem;
    color: #444;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    color: #444;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 1.5rem;
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const HobbyCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #333;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;

const LanguagesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    background: #eee;
    border-radius: 20px;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #333;
  }
`;

export default About;
