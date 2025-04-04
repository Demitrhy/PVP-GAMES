
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lista de jogos mais jogados
const games = [
  { id: 1, name: "Need for Speed 2", image: "/images/Need-For-Speed-Underground-2.jpg" },
  { id: 2, name: "Forza Horizon", image: "/images/Forza-Horizon-5-1.jpg" },
  { id: 3, name: "Homem Aranha 2", image: "/images/HomemAranha.jpg" },
  { id: 4, name: "Resident Evil 4 Remake", image: "/images/Resident.avif" },
  { id: 5, name: "God of War Ragnarok", image: "/images/God_of_War_Ragnarök_capa.jpg" }
];

const GameCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajustado para mostrar mais itens como na imagem
    centerMode: true, // Permite que os itens fiquem mais largos
    centerPadding: "5px", // Espaço extra nas laterais
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
  };

  return (
    <div style={{  backgroundColor: "#181818", marginTop: "95px", padding: "30px", borderRadius: "20px", width: "100%", maxWidth: "1800px", margin: "100px auto" }}>
      <h2 style={{ color: "white", textAlign: "left", marginBottom: "20px" }}>🎮 Jogos Mais Jogados</h2>
      <Slider {...settings}>
        {games.map((game, index) => (
          <div key={game.id} style={{ padding: "0 15px", position: "relative" }}>
            {/* Número do ranking */}
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "10px",
                backgroundColor: index === 0 ? "#FFD700" : "rgba(0, 0, 0, 0.7)", // Destaque dourado para o 1º
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
            {/* Imagem do jogo */}
           
              <img
                src={game.image}
                alt={game.name}
                style={{ width: "100%", display: "block" }}
                
              />
            
            <h1 style={{ color: "white",fontSize: "16px",  textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {game.name}</h1>
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