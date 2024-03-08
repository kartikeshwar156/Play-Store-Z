import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props{
	gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const heading_title = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
	 <>
	 <Heading as='h1' marginY='5px'>{heading_title}</Heading>
	 </>
  )
}

export default GameHeading