import useGames from "../Hooks/useGames";

const GameGrid = () => {
	const {games, error}=useGames();
	

  return (
	<>
	{error && <p>{error}</p>}
	{games.map(cur_game => <li key={cur_game.id}>{cur_game.name}</li>)}
	</>
	 
  )
}

export default GameGrid;