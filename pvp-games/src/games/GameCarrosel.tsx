
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lista de jogos mais jogados
const games = [
  { id: 1, name: "Need for Speed Underground 2", image: "/images/Need-For-Speed-Underground-2.jpg", valor: "R$ 99,00" },
  { id: 2, name: "Forza Horizon 5", image: "/images/Forza-Horizon-5-1.jpg", valor: "Gratuito" },
  { id: 3, name: "Homem Aranha 2", image: "/images/HomemAranha.jpg", valor: "Gratuito" },
  { id: 4, name: "Resident Evil 4 Remake", image: "/images/Resident.avif", valor: "R$ 150,00" },
  { id: 5, name: "God of War Ragnarok", image: "/images/God_of_War_Ragnarök_capa.jpg",  valor: "R$ 199,00"},
  { id: 6, name: "Grand Theft Auto VI", image: "/images/gta6_2CSKANR.jpg",  valor: "R$ 700,00" },
  { id: 7, name: "Fall Guys", image: "/images/FallGuys.png" , valor: "Gratuito" },
  { id: 8, name: "God of War 3", image: "/images/god3.jpg" , valor: "Gratuito" },
  { id: 9, name: "FC 2024", image: "/images/Fifia24.jpg"  , valor: "Gratuito"},
  { id: 10, name: "Red Dead Redemption 2", image: "/images/Red-Dead-Redemption-2-Cover.webp",  valor: "R$ 250,00"},
];

const GameCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajustado para mostrar mais itens como na imagem
    centerMode: true, // Permite que os itens fiquem mais largos
    centerPadding: "0px", // Espaço extra nas laterais
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  return (
    <div style={{ backgroundColor: "#181818", marginTop: "95px", padding: "30px", borderRadius: "20px", width: "100%", maxWidth: "1800px", margin: "100px auto" }}>
      <h2
        style={{
          color: "white",
          textAlign: "left",
          marginBottom: "20px",
          fontSize: "28px",
          zIndex: 2,
          position: "relative",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        🎮 Jogos Mais Jogados
      </h2>
     
      <Slider {...settings} 
        >
        {games.map((game, index) => (
          <div key={game.id} style={{  position: "relative" }}>
            {/* Número do ranking */}
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "10px",
                backgroundColor: index === 0 ? "#FFD700" : "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
                zIndex: 1,
              }}
            >
              {index + 1}
            </div>

            {/* Imagem com gradiente + nome */}
            <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}>
              <img
                src={game.image}
                alt={game.name}
                style={{ width: "100%", display: "block" }}
              />
              {/* Gradiente escuro para melhorar contraste */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              />
              {/* Nome do jogo com sombra */}
              <h1
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "white",
                  fontSize: "16px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                  margin: 0,
                }}
              >
                {game.name} 
              </h1>
       
              <h1
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "520px",
                  color: "white",
                  fontSize: "16px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                  margin: 0,
                }}
              >
                {game.valor} 
              </h1>
              
            </div>
          </div>
        ))}
      </Slider>
      <div style={{ color: "#bbb", marginTop: "1px", textAlign: "right", fontSize: "14px" }}>
        VER MAIS →
      </div>
    </div>
  );
};

export default GameCarousel;