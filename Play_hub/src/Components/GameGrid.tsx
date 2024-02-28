import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
	const {games, error}=useGames();
	

  return (
	<>
	{error && <p>{error}</p>}
	<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={10}>
	{games.map(cur_game => <GameCard key={cur_game.id} game={cur_game}></GameCard>)}
	</SimpleGrid>
	
	</>
	 
  )
}

export default GameGrid;