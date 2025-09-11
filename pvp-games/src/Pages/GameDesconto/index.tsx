import { useRef, useState } from "react";

const games = [
    {
        name: "GTA V",
        imagem: process.env.PUBLIC_URL + "/images/gtaV.jpg",
        description: "Ação e aventura em mundo aberto",
        price: 200,
        discount: 50
    },
    {
        name: "Minecraft",
        imagem: process.env.PUBLIC_URL + "/images/minecraft.jpg",
        description: "Criatividade e sobrevivência em blocos",
        price: 120,
        discount: 20
    },
    {
        name: "Genshin Impact",
        imagem: process.env.PUBLIC_URL + "/images/genshinImpact.jpg",
        description: "Aventure-se em Teyvat, um vasto mundo cheio de mistérios.",
        price: 50,
        discount: 10
    },
    {
        name: "Grand Theft Auto VI",
        imagem: process.env.PUBLIC_URL + "/images/gta6_2CSKANR.jpg",
        description: "Explore uma cidade aberta cheia de ação, missões e aventura em GTA VI.",
        price: 250,
        discount: 10
    },
    {
        name: "Fall Guys",
        imagem: process.env.PUBLIC_URL + "/images/FallGuys.png",
        description: "Divertido battle royale de obstáculos coloridos e corridas malucas.",
        price: 80,
        discount: 10
    },
    {
        name: "God of War 3",
        imagem: process.env.PUBLIC_URL + "/images/god3.jpg",
        description: "A aventura épica de Kratos continua, enfrentando deuses e monstros mitológicos.",
        price: 150,
        discount: 10
    },
    {
        name: "FC 2024",
        imagem: process.env.PUBLIC_URL + "/images/Fifia24.jpg",
        description: "Experimente o futebol realista com gráficos incríveis e modos competitivos.",
        price: 300,
        discount: 10
    },
    {
        name: "Red Dead Redemption 2",
        imagem: process.env.PUBLIC_URL + "/images/Red-Dead-Redemption-2-Cover.webp",
        description: "Viva a vida no velho oeste com história envolvente, ação e exploração.",
        price: 180,
        discount: 10
    },
    {
        name: "God of War 4",
        imagem: process.env.PUBLIC_URL + "/images/God_of_War_4.jpg",
        description: "Kratos retorna com seu filho em uma épica aventura nórdica repleta de batalhas.",
        price: 200,
        discount: 10
    },
    {
        name: "Homem Aranha 2",
        imagem: process.env.PUBLIC_URL + "/images/Homem-Aranha-2.jpg",
        description: "Balance-se pelas ruas de Nova York em uma aventura épica com Peter Parker e Miles Morales, enfrentando vilões perigosos e salvando a cidade.",
        price: 400,
        discount: 50
    },
];


const calcularPreco = (price: number, discount: number) => {
    return price - (price * discount) / 100;
};

const GameList: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const card = carouselRef.current.querySelector<HTMLDivElement>(".game-card");
            if (!card) return;

            const cardWidth = card.offsetWidth;
            const gap = 20;
            const scrollAmount = cardWidth + gap;

            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div style={{ padding: "50px 80px",    border: "2px solid #ffb700", maxWidth: "1700px", margin: "80px auto", backgroundColor: "#181818" }}>
            <h2 style={{ color: "#fff", fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
                🎯 Jogos em Desconto
            </h2>

            {!mostrarTodos ? (
                // Carrossel
                <div style={{ position: "relative" }}>
                    <div ref={carouselRef} style={{ display: "flex", overflowX: "hidden", gap: "20px", paddingBottom: "20px" }}>
                        {games.map((game, index) => (
                            <div key={index} className="game-card" style={{ flex: "0 0 250px", borderRadius: "15px", overflow: "hidden", position: "relative", backgroundColor: "#2b2b2b", color: "#fff", boxShadow: "0px 4px 12px rgba(0,0,0,0.5)", transition: "transform 0.3s" }}>
                                <img src={game.imagem} alt={game.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                                {game.discount && <div style={{ position: "absolute", top: "10px", left: "10px", backgroundColor: "red", color: "#fff", padding: "5px 10px", borderRadius: "5px", fontWeight: "bold" }}>-{game.discount}%</div>}
                                <div style={{ padding: "10px", textAlign: "center" }}>
                                    <h3 style={{ margin: "10px 0 5px 0" }}>{game.name}</h3>
                                    <p style={{ fontSize: "14px", marginBottom: "10px" }}>{game.description}</p>
                                    {game.price > 0 && (
                                        <div style={{ marginBottom: "10px" }}>
                                            <span style={{ textDecoration: "line-through", marginRight: "10px", color: "#999" }}>R$ {game.price.toFixed(2)}</span>
                                            <span style={{ color: "#00ff00", fontWeight: "bold" }}>R$ {calcularPreco(game.price, game.discount).toFixed(2)}</span>
                                        </div>
                                    )}
                                    <button style={{ padding: "10px 20px", backgroundColor: "#ff6600", border: "none", borderRadius: "5px", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>Comprar</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => scroll("left")} style={{ position: "absolute", left: "-70px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#1a1a1a", border: "2px solid #ffb700", borderRadius: "50%", color: "white", fontSize: "20px", padding: "12px", cursor: "pointer", zIndex: 10 }}>⬅</button>
                    <button onClick={() => scroll("right")} style={{ position: "absolute", right: "-70px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#1a1a1a", border: "2px solid #ffb700", borderRadius: "50%", color: "white", fontSize: "20px", padding: "12px", cursor: "pointer", zIndex: 10 }}>➡</button>
                </div>
            ) : (
                // Grid completo
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                    {games.map((game, index) => (
                        <div key={index} style={{ borderRadius: "15px", overflow: "hidden", cursor: "pointer", boxShadow: "0px 4px 12px rgba(0,0,0,0.5)", backgroundColor: "#2b2b2b", color: "#fff", textAlign: "center" }}>
                            <img src={game.imagem} alt={game.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            {game.discount && <div style={{ backgroundColor: "red", color: "#fff", padding: "5px 10px", borderRadius: "5px", fontWeight: "bold", display: "inline-block", marginTop: "10px" }}>-{game.discount}%</div>}
                            <h3>{game.name}</h3>
                            <p>{game.description}</p>
                            {game.price > 0 && (
                                <div style={{ marginBottom: "10px" }}>
                                    <span style={{ textDecoration: "line-through", marginRight: "10px", color: "#999" }}>R$ {game.price.toFixed(2)}</span>
                                    <span style={{ color: "#00ff00", fontWeight: "bold" }}>R$ {calcularPreco(game.price, game.discount).toFixed(2)}</span>
                                </div>
                            )}
                            <button style={{ padding: "10px 20px", backgroundColor: "#ff6600", border: "none", borderRadius: "5px", color: "#fff", fontWeight: "bold", cursor: "pointer", marginBottom: "10px" }}>Comprar</button>
                        </div>
                    ))}
                </div>
            )}

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

export default GameList;
