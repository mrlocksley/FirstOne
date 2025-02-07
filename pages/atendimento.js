import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Atendimento() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const body = document.body;
    body.style.fontFamily = "Arial, sans-serif";
    body.style.backgroundColor = "#f8f8f8";
    body.style.margin = "0";
    body.style.padding = "0";

    const container = document.createElement("div");
    container.style.maxWidth = "600px";
    container.style.margin = "50px auto";
    container.style.background = "white";
    container.style.padding = "20px";
    container.style.borderRadius = "8px";
    container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    container.style.textAlign = "center";

    const header = document.createElement("div");
    header.style.backgroundColor = "#008000";
    header.style.color = "white";
    header.style.padding = "15px";
    header.style.fontSize = "24px";
    header.style.borderRadius = "8px 8px 0 0";
    header.textContent = "Atendimento ao Cliente";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Bem-vindo ao nosso suporte! Como podemos ajudá-lo hoje?";

    const button = document.createElement("button");
    button.style.backgroundColor = "#008000";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.borderRadius = "5px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    button.textContent = "Iniciar Atendimento";
    button.addEventListener("click", () => {
      setFormVisible(true);
    });

    container.appendChild(header);
    container.appendChild(paragraph);
    container.appendChild(button);
    body.appendChild(container);

    return () => {
      body.removeChild(container);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_lo48wbd", // Substitua pelo seu Service ID
        "template_39j9f2b", // Substitua pelo seu Template ID
        formData,
        "XjZzW3snBhQltgaxG" // Substitua pela sua Public Key
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
          setFormVisible(false);
        },
        (error) => {
          alert("Erro ao enviar a mensagem. Tente novamente.");
          console.error(error);
        }
      );
  };

  return formVisible ? (
    <div style={{ maxWidth: "600px", margin: "50px auto", backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center" }}>Formulário de Atendimento</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nome:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>E-mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Motivo do Contato:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", height: "100px" }} />
        </div>
        <button type="submit" style={{ backgroundColor: "#008000", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "16px", width: "100%" }}>Enviar</button>
      </form>
    </div>
  ) : null;
}
