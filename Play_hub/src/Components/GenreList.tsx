import useGenres, { Genre } from '../Hooks/useGenres'

const GenreList = () => {
  const {data, error, Loading, setLoading} = useGenres();

  return (
	 <>
	 <ul>
		{data.map(genre => <li key={genre.id}>{genre.name}</li>)}
	 </ul>
	 </>
  )
}

export default GenreList