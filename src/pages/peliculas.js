import Movies from '@/components/Movies/Movies'

const tituloPeliculas = 'm-0 p-2 text-center text-white bg-dark border rounded border-success text-capitalize'
const Peliculas = () => {
  return (
    <>
      <div className='bg-dark'>
        <h1 className={tituloPeliculas}>Peliculas</h1>
      </div>
      <Movies />
    </>
  )
}

export default Peliculas
