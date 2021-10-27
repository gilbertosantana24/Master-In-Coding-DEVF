import React, { useState, useEffect } from "react";
import canciones from '../data/listaCanciones.json';

//CONTEXT tiene que ver con el manejo de estados globales en React
//Poder compartir la misma info entre diferentes niveles de la jerarquia

//Para manejar context hay que seguir ciertos pasos:

// #1 Crear un contexto vacio:
const SongContext = React.createContext();

//#2 Crear un proveedor de contexto (de la data)
// Maneja de donde se obtiene y como se pasa la info

function SongProvider(props){
    const [list, setList] = useState([]);
    const [selectedSong, setSelectedSong] = useState({});

    useEffect(()=> {
        setTimeout(() => {
            setList(canciones);
        }, 2000)
    }, []);

    const value = {
        list,
        selectedSong,
        setSelectedSong
    }


    return (
        <SongContext.Provider value={value} {...props} />
        
    )
}

// #3 Consumidor del contexto (Consumer)
// Brindar accesso a la data a los componentes
const useSongContext = () => {
    const context = React.useContext(SongContext);
    return context;
}

// #4 exportar el provider y el consumer para que puedan ser invocada por componentes
export {
    SongProvider,
    useSongContext
}

/* USO DE CONTEXT 
#5 Ahora debemos de ir a un componente de orden superior (e.x Home)
y envolver a los componentes que necesitan la info con la etiqueta del provider
de esta forma podra utilizarse en todos los componentes descendientes

#6 entrar a un componente y consumir el contexto (e.x SongList, SongDetail)
en este caso usando useSongContext
*/
