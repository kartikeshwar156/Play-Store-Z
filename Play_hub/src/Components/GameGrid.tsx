import React, { useEffect, useState } from 'react'
import API_client from '../Services/API_client';

interface Game{
	id: number,
	name: string,
}

interface FetchGameResponse{
	count: number,
	results: Game[],
}

const GameGrid = () => {
	const [games, setGames]=useState<Game[]>([]);
   const [error, setError]=useState('');

	useEffect(() => {
      API_client.get<FetchGameResponse>('/games')
		.then(res => setGames(res.data.results))
		.catch(err => setError(err.message))

	}, [])

  return (
	<>
	{error && <p>{error}</p>}
	{games.map(cur_game => <li key={cur_game.id}>{cur_game.name}</li>)}
	</>
	 
  )
}

export default GameGrid