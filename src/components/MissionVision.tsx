import styled from '@emotion/styled';

const MissionVision: React.FC = () => (
  <MissionSection>
    <h2>Mi Misión</h2>
    <p>
      Inspirar a las personas a viajar, descubrir culturas y vivir aventuras únicas.
    </p>
    <h2>Mi Visión</h2>
    <p>
      Convertirme en un referente de viajes y explorar cada rincón del planeta.
    </p>
  </MissionSection>
);

const MissionSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    color: #555;
  }
`;

export default MissionVision;
