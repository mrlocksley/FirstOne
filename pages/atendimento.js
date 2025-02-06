import { useState, useEffect } from "react";

export default function Atendimento() {
  const [formVisible, setFormVisible] = useState(false); // Controla a visibilidade do formulário

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
      setFormVisible(true); // Exibe o formulário quando o botão é clicado
    });

    container.appendChild(header);
    container.appendChild(paragraph);
    container.appendChild(button);
    body.appendChild(container);

    // Cleanup para evitar duplicação de elementos ao recarregar a página
    return () => {
      body.removeChild(container);
    };
  }, []);

  return formVisible ? (
    <div style={{ maxWidth: "600px", margin: "50px auto", backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center" }}>Formulário de Atendimento</h2>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", fontSize: "16px" }}>Nome:</label>
          <input type="text" id="name" name="name" placeholder="Digite seu nome" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }} required />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", fontSize: "16px" }}>E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }} required />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", fontSize: "16px" }}>Motivo do Contato:</label>
          <textarea id="message" name="message" placeholder="Descreva o motivo do seu contato" rows="4" style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }} required></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: "#008000", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "16px", width: "100%" }}>Enviar</button>
      </form>
    </div>
  ) : null;
}
