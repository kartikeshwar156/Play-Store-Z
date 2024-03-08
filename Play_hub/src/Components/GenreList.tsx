import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImage_URL from "../Services/Image_URL";

interface props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: props) => {
  const { data, error, Loading} = useGenres();

//   if (error) return null;
//   if (Loading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize='2xl' marginBottom='3px'>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius="8px"
                src={getCroppedImage_URL(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
