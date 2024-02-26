import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  // in below line you can see back tick because we are inserting double quotation marks inside them
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "aside" `,
        lg: ` "nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      <GridItem area="aside" bg="gold">
        aside
      </GridItem>
      <Show above="lg">
        <GridItem area="main" bg="blue">
          main
        </GridItem>
      </Show>
    </Grid>
  ); // First row will have two columns 'nav' and 'nav', 2nd row will have two columns 'aside' and 'main'
}

export default App;
