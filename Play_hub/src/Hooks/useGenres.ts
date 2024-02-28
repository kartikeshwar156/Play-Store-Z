import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";

interface Genre
{
	id: number;
	name: string;
}

interface FetchGenreResponse
{
	count: number;
	results: Genre[];
}

const useGenres = () => 
{
	const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [Loading, setLoading]=useState(false);

  useEffect(() => {
   const controller = new AbortController();

	setLoading(true)
   API_client.get<FetchGenreResponse>("/genres")
      .then((res) => {
			setGenres(res.data.results)
			setLoading(false)
		})
      .catch((err) => {
			if(err instanceof CanceledError)
			setError(err.message)

			setLoading(false)
		});

	
	return ()=> controller.abort();

  }, []);

  return { genres, error, Loading, setLoading};

}

export default useGenres;