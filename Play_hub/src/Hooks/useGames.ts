import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const controller = new AbortController();

   API_client.get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
			if(err instanceof CanceledError)
			setError(err.message)
		});

	
	return ()=> controller.abort();

  }, []);

  return { games, error };
};

export default useGames;
