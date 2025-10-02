import { useState } from "react";

let initialGameBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
];

export default function GameBoard({ onSelectCell, activePlayerColor }) {
    //GB == game board
    const [ GB, setGB ] = useState(initialGameBoard);

    function handlePlayerTurn(rowIndex, colIndex) {
        setGB((GB) => {
            let updatedGB = [...GB.map(cols => [...cols])];
            //here i should write the logic that ensures 
            //players can only play at bottom of columns
            updatedGB[rowIndex, colIndex] = activePlayerColor;
            return updatedGB;
        })

        onSelectCell();
    }
    return (
        <>
          {GB.map((row, rowIndex) => {
            <li key={rowIndex}>
                <ol>
                    {row.map((playerColor, colIndex) => {
                        <li key={colIndex}>
                            <button onClick={() => handlePlayerTurn(rowIndex, colIndex)}>{playerColor}</button>
                        </li>
                })}
                </ol>
            </li>
          })}
        </>
    )
}