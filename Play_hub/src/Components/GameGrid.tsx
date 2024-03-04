import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, Loading, setLoading} = useGames();
  const Skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
			{Loading && Skeletons.map(skeleton => <GameCardContainer>
				<GameCardSkeleton key={skeleton}></GameCardSkeleton>
			</GameCardContainer>
			)}
        {data.map((cur_game) => (
          <GameCardContainer >
				<GameCard key={cur_game.id} game={cur_game}></GameCard>
			 </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
