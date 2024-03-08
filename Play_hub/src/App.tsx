import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBAr from "./Components/NavBAr";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelecter from "./Components/PlatformSelecter";
import { Platform } from "./Hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre]=useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null);

  const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery)

  // in below line you can see back tick because we are inserting double quotation marks inside them
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: ` "nav nav" "aside main" `,
      }}

      templateColumns={{
        base: '1fr',
        lg: '200px 1fr' // first coumn of width 200ps and second column will stretch across the remaining area
      }}
    >
      <GridItem area="nav">
        <NavBAr onSearch={(searchText) => setGameQuery({...gameQuery, searchText: searchText})}></NavBAr>
      </GridItem>
      <GridItem area="aside" paddingX='5px'>
        <Show above="lg">
        <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre: genre})}></GenreList>
        </Show>
      </GridItem>
        <GridItem area="main">
        <HStack spacing='15px' paddingLeft='10px' marginBottom='5px'>
          <PlatformSelecter selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}></PlatformSelecter>
          <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder: sortOrder})}  sortOrder={gameQuery.sortOrder}></SortSelector>
        </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
    </Grid>
  ); // First row will have two columns 'nav' and 'nav', 2nd row will have two columns 'aside' and 'main'
}

export default App;
