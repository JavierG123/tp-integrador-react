import { useState, useEffect } from 'react'
import { SearchList } from '@/components/search/SearchList'
import { getMovieByName } from '../components/search/getMovieByName'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Buscar () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovieByName('marvel')
      .then(movies => setMovies(movies))
    console.log(movies)
  },
  [])

  return (
    <>
      <h1 className='m-0 p-2 text-center text-white bg-dark'>Buscar película por nombre</h1>
      {/* <div className='d-flex justify-content-center align-items-center bg-dark'>
        <Form className='d-flex col col-sm-4' onSubmit={handlerSubmit}>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-auto'
            aria-label='Search'
            value={searchValue}
             // onChange = {handlerOnChance}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button style={{border:'none'}} variant="link" type='submit'><i className="bi bi-search text-light"></i></Button>
        </Form>
      </div> */}
      <main className='container-fluid  movies__container justify-center'>
        <SearchList key={movies.id} movies={movies} />

      </main>
    </>
  )
}
