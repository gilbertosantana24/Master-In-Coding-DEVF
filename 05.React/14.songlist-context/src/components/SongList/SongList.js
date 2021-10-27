import React, { useState, useEffect } from "react";
import './songlist.css';
import canciones from '../../data/listaCanciones.json';

const SongList = () => {
    const [List, setList] = useState([]);

    useEffect(()=> {
        setTimeout(() => {
            setList(canciones);
        }, 2000)
    }, [])

    return (
        <section>
            {
                List.length === 0
                ? <h1>Cargando</h1>
                : List.map((song) => (
                    <div className="row-song">
                        <h4>{song.title}</h4>
                        <h5>{song.artist}</h5>
                    </div>
                ))
            }
        </section>

    )
}

export default SongList;