import Image from 'next/image';
import styled from '@emotion/styled';
import heroPic from "/public/images/HeroKevinMorales.png";


const Hero: React.FC = () => (
  <HeroSection>
    <Image
      src={heroPic}
      alt="Banner de viaje"
      layout="fill"
      objectFit="cover"
      quality={80}
    />
    <div className="content">
      <h1>Explora el Mundo Conmigo</h1>
      <p>¡Viajar es vivir mil vidas en una!</p>
    </div>
  </HeroSection>
);

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  .content {
    position: relative;
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default Hero;
