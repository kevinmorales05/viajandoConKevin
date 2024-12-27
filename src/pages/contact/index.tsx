import Footer from "@/components/Footer";
import styled from "@emotion/styled";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [formStatus, setFormStatus] = useState("");
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission logic
        setFormStatus("Gracias por contactarme. Responderé lo antes posible.");
        setFormData({ name: "", email: "", message: "" });
      };
    
      return (
        <>
          <Navbar />
          <Main>
            <h1>Contacto</h1>
            <p>
              ¿Tienes preguntas, comentarios o simplemente quieres saludar? Llena el
              formulario y estaré encantado de responderte.
            </p>
            <Form onSubmit={handleSubmit}>
              <Label>
                Nombre
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  required
                />
              </Label>
              <Label>
                Correo Electrónico
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </Label>
              <Label>
                Mensaje
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </Label>
              <Button type="submit">Enviar</Button>
              {formStatus && <SuccessMessage>{formStatus}</SuccessMessage>}
            </Form>
          </Main>
          <Footer />
        </>
      );
}


const Main = styled.main`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 0.5rem;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 0.5rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 8px;
`;
