import Image from 'next/image';
import styled from '@emotion/styled';

const Gallery: React.FC = () => (
  <GallerySection id="gallery">
    <h2>Galería</h2>
    <div className="gallery-grid">
      <Image src="/gallery1.jpg" alt="Viaje 1" width={300} height={200} />
      <Image src="/gallery2.jpg" alt="Viaje 2" width={300} height={200} />
      <Image src="/gallery3.jpg" alt="Viaje 3" width={300} height={200} />
      <Image src="/gallery4.jpg" alt="Viaje 4" width={300} height={200} />
    </div>
  </GallerySection>
);

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    justify-items: center;
  }
`;

export default Gallery;
