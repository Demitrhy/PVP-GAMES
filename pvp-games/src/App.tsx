import React from 'react';
import GamePrincipal from './Pages/GamePrincipal';
import GameCarrosel from './Pages/GameCarrosel';
import GameList from './Pages/GameDesconto';


const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <GamePrincipal />
      <GameList/>
      <GameCarrosel />
    </div>
  );
};



export default App;