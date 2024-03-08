import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; // whole number
  
}

// export interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  ); // '?' is sued because selected genre can be null and  {params: {genres: selectedGenre?.id}} is an object where we have returned 'genres' (use this particular name) for filtering
};

export default useGames;
