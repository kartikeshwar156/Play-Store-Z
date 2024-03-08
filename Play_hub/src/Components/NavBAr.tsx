import { HStack, Image, Text } from "@chakra-ui/react"
import tree from "../assets/tree.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
	onSearch: (searchText: string) => void;
}

const NavBAr = ({onSearch}: Props) => {
  return (
	 <HStack padding='10px'>
		<Image src={tree} boxSize="60px"></Image>
		<SearchInput onSearch={onSearch}></SearchInput>
		<ColorModeSwitch></ColorModeSwitch>
	 </HStack>
  )
}

export default NavBAr