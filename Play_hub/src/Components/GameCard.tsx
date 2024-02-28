import React from 'react'
import { Game } from '../Hooks/useGames'
import { Card, Image, CardBody, Heading, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface props
{
  game: Game
}

const GameCard = ({ game }: props) => {
  return (
	 <>
	 <Card borderRadius={10} overflow={'hidden'}>
		<Image src={game.background_image}></Image>
		<CardBody>
			<Heading fontSize='xl'>{game.name}</Heading>
			<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>{/* // constructing an  array of platform object */}
		</CardBody>
	 </Card>
	 </>
  )
}

export default GameCard