import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
	id: number;
	name: string;
	slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

// export interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]) // '?' is sued because selected genre can be null and  {params: {genres: selectedGenre?.id}} is an object where we have returned 'genres' (use this particular name) for filtering  
};

export default useGames;
