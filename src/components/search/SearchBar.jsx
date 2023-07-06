import { useState } from 'react'
import { useRouter } from 'next/router'

import Form from 'react-bootstrap/Form'
import { getMovieByName } from './getMovieByName'

export default function SearchBar () {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handlerSubmit = (e) => {
    e.prenventDefault()

    router.push({
      pathname: '/buscar',
      query: { searchValue }
    })
  }

  return (
    <>
      <Form className='d-flex' onSubmit={handlerSubmit}>
        <Form.Control
          type='search'
          placeholder='Buscar...'
          className='me-2'
          aria-label='Buscar...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {/* <Button variant="outline-secondary">Search</Button> */}
      </Form>

    </>

  )
}
