import React from 'react';
import GamePrincipal from './Pages/GamePrincipal';
import GameCarrosel from './Pages/GameCarrosel';


const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <GamePrincipal />
      <GameCarrosel />
    </div>
  );
};



export default App;