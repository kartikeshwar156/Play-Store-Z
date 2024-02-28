import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, Loading, setLoading} = useGames();
  const Skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
			{Loading && Skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games.map((cur_game) => (
          <GameCard key={cur_game.id} game={cur_game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
