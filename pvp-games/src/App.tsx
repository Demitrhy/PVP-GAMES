import { useState } from "react";
import { GameCard } from "./games/GameCard";
import GameCarousel from "./games/GameCarrosel";

const games = [
  {
    name: "GTA V",
    image: "/images/gtaV.jpg",
    description: "Ação e aventura em mundo aberto",
  },
  {
    name: "Minecraft",
    image: "/images/minecraft.jpg",
    description: "Criatividade e sobrevivência em blocos",
  },
  {
    name: "Genshin Impact",
    image: "/images/genshinImpact.jpg",
    description: "Aventure-se em Teyvat, um vasto mundo cheio de mistérios.",
  },
];

export default function GamePage() {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Botões fixos no topo direito */}
      <div className="auth-buttons" style={{
        width: "97%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "12px",
        zIndex: 1000,
      }}>
        <button style={{ backgroundColor: "#1a1a1a", color: "white", padding: "12px 35px", borderRadius: "8px", border: "2px solid #ffb700", cursor: "pointer", transition: "0.3s", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>
          Acessar conta
        </button>
        <button style={{ backgroundColor: "white", color: "black", padding: "12px 35px", borderRadius: "8px", border: "2px solid #888", cursor: "pointer", transition: "0.3s", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>
          Cadastre-se
        </button>
      </div>

      {/* Fundo da tela */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${selectedGame.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        transition: "0.7s ease-in-out"
      }} />

      {/* Camada escura para contraste */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} />

      {/* Conteúdo principal */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", padding: "0 40px" }}>
        {/* Lista de jogos (Alinhada à esquerda) */}
        <div style={{ position: "relative", minHeight: "100vh", width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {/* Lista de jogos (Substituímos o código anterior pelo GameCard) */}
          <div style={{ width: "25%", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {games.map((game) => (
              <GameCard
                key={game.name}
                game={game}
                onSelect={() => setSelectedGame(game)}
                isSelected={selectedGame.name === game.name}
              />
            ))}
          </div>
        </div>

        {/* Jogo em destaque (Centralizado) */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -70%)",
          textAlign: "left",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "500px", // Aumentando a largura
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          color: "white",
        }}>
          <div
            style={{
              height: "150px",
              width: "100%",           // ou algo como "600px" se quiser limitar
              maxWidth: "600px",       // limita a largura
              fontSize: "20px",        // diminui o tamanho
              fontWeight: "bold",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column", // força ficar um embaixo do outro
              gap: "8px",              // espaçamento entre os textos
            }}
          >
            <h1 style={{ margin: 0 }}>{selectedGame.name}</h1>
            <h2 style={{ margin: 0, fontWeight: "normal", fontSize: "18px" }}>
              {selectedGame.description}
            </h2>
          </div>



          {/* <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}> */}
          <button
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              color: "white", gap: "12px",
              flexWrap: "wrap",
              padding: "12px 20px", // Aumentando padding para maior destaque
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            ❤️ Adicionar aos favoritos
          </button>

          <button
            style={{
              backgroundColor: "#ff9900",
              border: "none",
              gap: "12px",
              color: "white",
              padding: "12px 30px", // Aumentando tamanho
              borderRadius: "8px",
              flexWrap: "wrap",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            ▶ Jogar agora
          </button>
          {/* </div> */}
        </div>

      </div>
      <div style={{ background: "black", minHeight: "100vh", padding: "20px" }}>
        <GameCarousel />
      </div>
    </div>



  );
}