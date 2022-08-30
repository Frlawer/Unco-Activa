import React from 'react'

function Slider({imagenes}){
    //Variables y estados
    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes?.length;

    //Retorno prematuro para evitar errores.
    if(!Array.isArray(imagenes) || cantidad == 0) 
    return;

    const siguienteImagen = () => {
        setImagenActual(imagenActual ==  cantidad - 1 ? 0 : imagenActual + 1);
    }

    const anteriorImagen = () => {
        setImagenActual(imagenActual ==  0 ? cantidad - 1 : imagenActual - 1);
    }

    return (
        <div className=''>
            <h1 className='text-center text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark' fill='currentColor'>NUESTRA REMERA</h1>
            <div className='flex align-center items-center justify-center text-gray'>
                <button className='bg-gray-darker bg-opacity-30 px-3 h-10 w-10 rounded-full hover:text-gray-light' onClick={anteriorImagen}>{/* ↶ */}{'<'}</button>
                <div className='relative flex flex-row justify-between w-52 h-52 sm:w-96 sm:h-96 items-center overflow-hidden'>
                    {imagenes.map((imagen, index) => {
                        return <img 
                        key={index} 
                        src={imagen} 
                        className={`absolute transition-all duration-[2000ms] ${imagenActual === index ? ' left-0 opacity-100' : ' left-full opacity-5'}`}
                        alt="imagen" />
                    })}
                </div>
                <button className='bg-gray-darker bg-opacity-30 px-3 h-10 w-10 rounded-full hover:text-gray-light' onClick={siguienteImagen}>{/* ↷ */}{'>'}</button>
            </div>
        </div>
    )
}

export default Slider