import Series from '@/components/Series/Serie'
const tituloSerie = "m-0 p-2 text-center text-white bg-dark border rounded border-info text-capitalize";
const Seriess = () => {
    return (
        <>
        <div className= "bg-dark">
        <h1 className={tituloSerie}>Series</h1>
        </div>
        <Series />
        </>
    )
}

export default Seriess

