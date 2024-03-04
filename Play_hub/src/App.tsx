import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBAr from "./Components/NavBAr";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelecter from "./Components/PlatformSelecter";

function App() {
  const [selectedGenre, setSelectedGenre]=useState<Genre | null>(null);

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
        <NavBAr></NavBAr>
      </GridItem>
      <GridItem area="aside" paddingX='5px'>
        <Show above="lg">
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </Show>
      </GridItem>
        <GridItem area="main">
        <PlatformSelecter></PlatformSelecter>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
    </Grid>
  ); // First row will have two columns 'nav' and 'nav', 2nd row will have two columns 'aside' and 'main'
}

export default App;
