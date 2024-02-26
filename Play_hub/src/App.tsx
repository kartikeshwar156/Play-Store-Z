import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBAr from "./Components/NavBAr";

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
        aside
      </GridItem>
      <Show above="lg">
        <GridItem area="main">
          main
        </GridItem>
      </Show>
    </Grid>
  ); // First row will have two columns 'nav' and 'nav', 2nd row will have two columns 'aside' and 'main'
}

export default App;
