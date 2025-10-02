import Player from "../Player/Player"

export default function PlayersDetails({ activePlayer }) {
  return (
    <>
      <span>
            <Player name="Player 1" icon isActive={activePlayer === "Red" ? true : false}/>
            <br />
            <Player name="Player 2" icon isActive={activePlayer === "Yellow" ? true : false}/>
          </span>
    </>
  )
}