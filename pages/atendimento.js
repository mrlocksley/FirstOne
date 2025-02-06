import { useEffect } from "react";

export default function Atendimento() {
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
            alert("Atendimento iniciado!");
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

    return null; // Não renderiza nada diretamente no JSX
}
