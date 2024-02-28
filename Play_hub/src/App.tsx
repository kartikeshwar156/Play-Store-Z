import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBAr from "./Components/NavBAr";
import GameGrid from "./Components/GameGrid";

function App() {
  // in below line you can see back tick because we are inserting double quotation marks inside them
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "aside" `,
        lg: ` "nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBAr></NavBAr>
      </GridItem>
      <GridItem area="aside">
        <Show above="lg">
        aside
        </Show>
      </GridItem>
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
    </Grid>
  ); // First row will have two columns 'nav' and 'nav', 2nd row will have two columns 'aside' and 'main'
}

export default App;
