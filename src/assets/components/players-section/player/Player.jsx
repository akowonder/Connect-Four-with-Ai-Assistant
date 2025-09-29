import { useState } from "react";

export default function Player({ name, icon }) {
    const [ playerName, setPlayerName] = useState(name);
    const [ edit, setEdit ] = useState(false);

    let infoField = (
        <span onClick={handleEdit}><img src={icon} alt="Player Icon" /> {playerName}</span>
    );

    if (edit) {
        infoField = (
            <span><img src={icon} alt="Player Icon" /> <input type="text" value={playerName} onChange={handlePlayerName} onMouseLeave={handleEdit}/></span>
        );
        
    } 

    function handleEdit() {
        setEdit(edit => !edit);
    }

    function handlePlayerName(event) {
        setPlayerName(event.target.value);
    }
 return (
    <>
      {infoField}
      
      
    </>
 );
}