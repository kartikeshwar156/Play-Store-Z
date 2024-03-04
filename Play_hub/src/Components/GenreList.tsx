import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../Hooks/useGenres'
import getCroppedImage_URL from '../Services/Image_URL';

const GenreList = () => {
  const {data, error, Loading, setLoading} = useGenres();

  if(error) return null
  if(Loading) return <Spinner></Spinner>;

  return (
	 <>
	 <List>
		{data.map(genre => <ListItem key={genre.id} paddingY='5px'>
			<HStack>
				<Image boxSize='32px' borderRadius='8px' src={ getCroppedImage_URL(genre.image_background)}></Image>
				<Text fontSize='lg'>{genre.name}</Text>
			</HStack>
			</ListItem>)}
	 </List>
	 </>
  )
}

export default GenreList