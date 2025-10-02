import { useState } from "react";

import PlayersDetails from "./assets/components/players-section/playersDetails/PlayersDetails";
import GameBoard from "./assets/components/gameBoard/GameBoard";

export default function App() {
    //activePlayerColor should be set by the player
    //most likely have to make a function for that
    const [ activePlayer, setActivePlayer ] = useState("Red");
    
    function handleCellSelection() {
        setActivePlayer(prevPlayer => prevPlayer === 'Red' ? 'Yellow' : 'Red');
    }
    return (
        <>
          <PlayersDetails activePlayer={activePlayer} />
          <GameBoard onSelectCell={handleCellSelection} acti />
        </>
    );
}