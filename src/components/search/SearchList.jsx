import VisualCard from '../VisualCard'

export const SearchList = ({ movies }) => {
  // console.log(movies)
  return (
    <>
      {
        movies?.map(movie => (
          <VisualCard key={movie.id} {...movie} />
        ))
      }
    </>
  )
}
