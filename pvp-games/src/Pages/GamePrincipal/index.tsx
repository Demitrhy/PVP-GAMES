import { useState } from "react";
import { GameCard } from "../GameCard";

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

const GamePrincipal = () => {
    const [selectedGame, setSelectedGame] = useState(games[0]);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                
            }}
        >

            <div
                className="auth-buttons"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    padding: "16px 32px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 1000,
                }}
            >

                <h1
                    style={{
                        margin: 0,
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#ffb700",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}
                >
                    PVP Games
                </h1>


                <div style={{ display: "flex", gap: "12px" }}>
                    <button
                        style={{
                            backgroundColor: "#1a1a1a",
                            border: "2px solid #ffb700",
                            color: "white",
                            padding: "12px 35px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "0.3s",
                            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                        }}
                    >
                        Acessar conta
                    </button>
                    <button
                        style={{
                            backgroundColor: "#1a1a1a",
                            color: "white",
                            padding: "12px 35px",
                            borderRadius: "8px",
                            border: "2px solid #ffb700",
                            cursor: "pointer",
                            transition: "0.3s",
                            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                        }}
                    >
                        Cadastre-se
                    </button>
                </div>
            </div>


            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${selectedGame.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    transition: "0.7s ease-in-out",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    height: "100vh",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 40px",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        height: "100vh",
                        width: "100%",          // já coloca direto
                        padding: "24px",       // já coloca direto
                        overflowY: "auto",     // ativa rolagem
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",           // espaço entre cards
                    }}
                >
                    {games.map((game) => (
                        <GameCard
                            key={game.name}
                            game={game}
                            onSelect={() => setSelectedGame(game)}
                            isSelected={selectedGame.name === game.name}
                        />
                    ))}
                </div>


                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "60%",
                        transform: "translate(-50%, -70%)",
                        textAlign: "left",
                        padding: "24px",
                        borderRadius: "12px",
                        maxWidth: "500px",
                        backgroundColor: "rgba(0, 0, 0, 0.0)",
                        color: "white",
                    }}
                >
                    <div
                        style={{
                            height: "150px",
                            width: "100%",
                            maxWidth: "600px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        }}
                    >
                        <h1 style={{ margin: 0 }}>{selectedGame.name}</h1>
                        <h2
                            style={{
                                margin: 0,
                                fontWeight: "normal",
                                fontSize: "18px",
                            }}
                        >
                            {selectedGame.description}
                        </h2>
                    </div>
                    <div style={{ display: "flex", gap: "25px" }}>
                        <button
                            style={{
                                backgroundColor: "#ff9900",
                                border: "none",
                                gap: "15px",
                                color: "white",
                                padding: "10px 30px",
                                borderRadius: "8px",
                                flexWrap: "wrap",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                        >
                            ▶ Jogar agora
                        </button>

                        <button
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.0)",
                                color: "white",
                                gap: "15px",
                                flexWrap: "wrap",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                        >
                            ❤️ Adicionar aos favoritos
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default GamePrincipal;