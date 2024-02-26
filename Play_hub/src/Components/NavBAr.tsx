import { HStack, Image, Text } from "@chakra-ui/react"
import tree from "../assets/tree.webp";


const NavBAr = () => {
  return (
	 <HStack>
		<Image src={tree} boxSize="60px"></Image>
		<Text>NavBar</Text>
	 </HStack>
  )
}

export default NavBAr