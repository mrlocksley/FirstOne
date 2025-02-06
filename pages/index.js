import React from "react";

function Home() {
    const handleRedirect = () => {
        window.location.href = "/atendimento";; // Ajuste conforme necessário
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Primeiro Projeto Criado Via Git!</h1>
            <button 
                onClick={handleRedirect} 
                style={{
                    backgroundColor: "#008000",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontSize: "16px",
                    marginTop: "20px"
                }}
            >
                Ir para Atendimento
            </button>
        </div>
    );
}

export default Home;