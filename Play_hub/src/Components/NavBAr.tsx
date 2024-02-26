import { HStack, Image, Text } from "@chakra-ui/react"
import tree from "../assets/tree.webp";
import ColorModeSwitch from "./ColorModeSwitch";


const NavBAr = () => {
  return (
	 <HStack justifyContent='space-between' padding='10px'>
		<Image src={tree} boxSize="60px"></Image>
		<ColorModeSwitch></ColorModeSwitch>
	 </HStack>
  )
}

export default NavBAr