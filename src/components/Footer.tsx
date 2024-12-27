import styled from '@emotion/styled';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => (
  <FooterSection>
    <p>Conéctate conmigo en mis redes sociales:</p>
    <div className="social-icons">
      <a href="https://www.instagram.com/kevinmorales.ceo/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.tiktok.com/@viajandoconkevin_" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
      <a href="https://www.youtube.com/@viajandoconkevin-official" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
    <p>&copy; 2025 ViajandoConKevin. Todos los derechos reservados.</p>
  </FooterSection>
);

const FooterSection = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: #222;
  color: #fff;
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

export default Footer;
