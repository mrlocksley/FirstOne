import React from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleRedirect = (path) => {
        router.push(path); // Redirecionamento para a rota correspondente
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
            {/* Barra de Navegação */}
            <nav style={{ 
                backgroundColor: "#008000", 
                padding: "15px", 
                display: "flex", 
                justifyContent: "center",
                borderRadius: "8px"
            }}>
                <button 
                    onClick={() => handleRedirect("/")} 
                    style={navButtonStyle}
                >
                    Home
                </button>
                <button 
                    onClick={() => handleRedirect("/atendimento")} 
                    style={navButtonStyle}
                >
                    Atendimento
                </button>
                <button 
                    onClick={() => handleRedirect("/catalogo")} 
                    style={navButtonStyle}
                >
                    Catálogo
                </button>
                <button 
                    onClick={() => handleRedirect("/sobre")} 
                    style={navButtonStyle}
                >
                    Sobre
                </button>
            </nav>

            {/* Conteúdo da Página */}
            <h1>Primeiro Projeto Criado Via Git!</h1>
        </div>
    );
}

// Estilo compartilhado para os botões da navbar
const navButtonStyle = {
    backgroundColor: "white",
    color: "#008000",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    margin: "0 10px",
    fontWeight: "bold"
};
