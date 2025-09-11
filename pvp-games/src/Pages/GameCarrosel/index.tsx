import { useRef, useState } from "react";

const jogos = [
  { id: 1, nome: "Need for Speed Underground 2", imagem: process.env.PUBLIC_URL + "/images/Need-For-Speed-Underground-2.jpg" },
  { id: 2, nome: "Forza Horizon 5", imagem: process.env.PUBLIC_URL + "/images/Forza-Horizon-5-1.jpg" },
  { id: 3, nome: "Homem Aranha 2", imagem: process.env.PUBLIC_URL + "/images/HomemAranha.jpg" },
  { id: 4, nome: "Resident Evil 4 Remake", imagem: process.env.PUBLIC_URL + "/images/Resident.avif" },
  { id: 5, nome: "God of War Ragnarok", imagem: process.env.PUBLIC_URL + "/images/God_of_War_Ragnarök_capa.jpg" },
  { id: 6, nome: "Grand Theft Auto VI", imagem: process.env.PUBLIC_URL + "/images/gta6_2CSKANR.jpg" },
  { id: 7, nome: "Fall Guys", imagem: process.env.PUBLIC_URL + "/images/FallGuys.png" },
  { id: 8, nome: "God of War 3", imagem: process.env.PUBLIC_URL + "/images/god3.jpg" },
  { id: 9, nome: "FC 2024", imagem: process.env.PUBLIC_URL + "/images/Fifia24.jpg" },
  { id: 10, nome: "Red Dead Redemption 2", imagem: process.env.PUBLIC_URL + "/images/Red-Dead-Redemption-2-Cover.webp" },
];

const GameCarrosel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector<HTMLDivElement>(".game-card");
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;

      carouselRef.current.scrollBy({
        left: direction === "left" ? -(scrollAmount) : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        padding: "50px 80px",
        maxWidth: "1700px",
        margin: "80px auto",
        position: "relative",
        backgroundColor: "#181818",

      }}
    >
      {/* Título */}
      <h2
        style={{
          color: "#fff",
          fontSize: "28px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        🎮 Jogos Mais Jogados
      </h2>

      {/* Se não mostrar todos -> carrossel */}
      {!mostrarTodos && (
        <div style={{ position: "relative" }}>
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              overflowX: "hidden",
              gap: "20px",
              paddingBottom: "20px",
              scrollBehavior: "smooth",
            }}
          >
            {jogos.map((jogo) => (
              <div
                key={jogo.id}
                className="game-card"
                style={{
                  flex: "0 0 calc(33.333% - 13.33px)",
                  height: "350px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src={jogo.imagem}
                  alt={jogo.nome}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "15px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="game-name"
                >
                  {jogo.nome}
                </div>
              </div>
            ))}
          </div>

          {/* Botões de scroll */}
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#1a1a1a",
              border: "2px solid #ffb700",
              borderRadius: "50%",
              color: "white",
              fontSize: "20px",
              padding: "12px",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            ⬅
          </button>
          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#1a1a1a",
              border: "2px solid #ffb700",
              borderRadius: "50%",
              color: "white",
              fontSize: "20px",
              padding: "12px",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            ➡
          </button>
        </div>
      )}
      {mostrarTodos && (
        <div
          className="grid-jogos"
          style={{
            display: "grid", // Mantido o Grid, que é a melhor opção para esse tipo de layout
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            opacity: 0,
            transform: "scale(0.95)",
            animation: "fadeIn 0.5s forwards",
          }}
        >
          {jogos.map((jogo) => (
            <div
              key={jogo.id}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
                backgroundColor: "#111",
              }}
            >
              <img
                src={jogo.imagem}
                alt={jogo.nome}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                {jogo.nome}
              </p>
            </div>
          ))}
        </div>
      )}


      <style>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Estilos para o hover do card */
        .game-card:hover {
          transform: scale(1.05);
        }

        /* Removido estilos para o grid pois já foram aplicados no elemento pai */

        `}
      </style>


      {/* Botão Ver Mais / Mostrar Menos */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => setMostrarTodos(!mostrarTodos)}
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            borderRadius: "25px",
            cursor: "pointer",
            backgroundColor: "#1a1a1a",
            border: "2px solid #ffb700",
            transition: "background 0.3s",
          }}
        >
          {mostrarTodos ? "Mostrar Menos" : "Ver Mais"}
        </button>
      </div>
    </div>
  );
};

export default GameCarrosel;