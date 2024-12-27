import { useState } from "react";
import styled from "@emotion/styled";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <div className="logo">
        {" "}
        <Link href={'/'}>ViajandoConKevin</Link>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="/about">Sobre Mí</a>
        </li>
        <li>
          <a href="/countries">Países Visitados</a>
        </li>
        <li>
          <a href="/stories">Historias</a>
        </li>
        <li>
          <a href="/gallery">Galería</a>
        </li>
        <li>
          <a href="/contact">Redes Sociales</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 1000;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    &.open {
      display: block;
    }
  }
  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      background: #fff;
      width: 200px;
      border: 1px solid #ccc;
    }
  }
`;

export default Navbar;
