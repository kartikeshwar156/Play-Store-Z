import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// we created a 'config' object.
const config: ThemeConfig={
	initialColorMode: 'dark'
}

const theme = extendTheme({ config })

export default theme;