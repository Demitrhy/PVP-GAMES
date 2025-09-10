import React from "react";

interface Game {
  name: string;
  image: string;
}

interface GameCardProps {
  game: Game;
  onSelect: () => void;
  isSelected: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onSelect, isSelected }) => {
  return (
    <div
      onClick={onSelect}
      style={{
        cursor: "pointer",
        borderRadius: "16px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px",
        transition: "0.3s",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: "white",
        transform: isSelected ? "scale(1.05) translateY(-5px)" : "translateY(0)",
        width: "100%",
        maxWidth: "350px",
        marginTop: "60px",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
        zIndex: isSelected ? 10 : 5,
        opacity: isSelected ? 1 : 0.9,
        boxShadow: isSelected
          ? "0 4px 8px rgba(255,255,255,0.4)"
          : "2px 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={game.image}
        alt={game.name}
        style={{
          width: "100%",
          height: "200%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: isSelected ? "#ff9900" : "white",
        }}
      >
        {game.name}
      </div>
    </div>
  );
};
