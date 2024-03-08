import useData from "./useData";
import Generes from "../Data/Generes";

export interface Genre
{
	id: number;
	name: string;
	image_background: string;
}


const useGenres = () => 
{
	return ({
		data: Generes,
		Loading:false,
		error:null
	})

}

export default useGenres;