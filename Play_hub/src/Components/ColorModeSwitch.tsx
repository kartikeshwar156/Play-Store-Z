import { HStack, Switch, Text , useColorMode} from '@chakra-ui/react'

// useColorMode is a custom hook of chakra, which returns object with several properties.

const ColorModeSwitch = () => {

 const{toggleColorMode, colorMode}=useColorMode();

  return (
	<>
	<HStack>
		<Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode}></Switch>
		<Text></Text>
	</HStack>
	</>
	 
  )
}

export default ColorModeSwitch