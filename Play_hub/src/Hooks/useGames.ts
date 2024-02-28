import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";
import useData from "./useData";

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

const useGames = () => {
  return useData<Game>('/games')
};

export default useGames;
