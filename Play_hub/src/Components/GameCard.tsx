import React from 'react'
import { Game } from '../Hooks/useGames'
import { Card, Image, CardBody, Heading } from '@chakra-ui/react'

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
		</CardBody>
	 </Card>
	 </>
  )
}

export default GameCard