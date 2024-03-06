import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
        <MenuItem>asdf</MenuItem>
        <MenuItem>hgfd</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
