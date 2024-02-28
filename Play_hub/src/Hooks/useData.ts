import { useEffect, useState } from "react";
import API_client, { CanceledError } from "../Services/API_client";



interface FetchResponse<T>
{
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => 
{
	const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [Loading, setLoading]=useState(false);

  useEffect(() => {
   const controller = new AbortController();

	setLoading(true)
   API_client.get<FetchResponse<T>>(endpoint)
      .then((res) => {
			setData(res.data.results)
			setLoading(false)
		})
      .catch((err) => {
			if(err instanceof CanceledError)
			setError(err.message)

			setLoading(false)
		});

	
	return ()=> controller.abort();

  }, []);

  return { data, error, Loading, setLoading};

}

export default useData;