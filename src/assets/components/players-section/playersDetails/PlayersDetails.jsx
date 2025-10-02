import Player from "../Player/Player"

export default function PlayersDetails({ changeCell }) {
  return (
    <>
      <span>
            <Player name="Player 1" icon changeCell={activePlayer === "Red" ? true : false}/>
            <br />
            <Player name="Player 2" icon changeCell={activePlayer === "Yellow" ? true : false}/>
          </span>
    </>
  )
}