import React from 'react';
import { SongProvider } from '../../context/SongContext';
import SongDetails from '../../components/SongDetails';
import SongList from '../../components/SongList';
import './home.css';

const Home = () => {
return (

    <div className="home-container">
        <SongProvider>
        <div className="izquierdo">
            <h2>lado izquierdo</h2>
            <SongList />
        </div>

        <div className="derecho">
            <h2>lado derecho</h2>
            <SongDetails />
        </div>
        </SongProvider>
    </div>
    )
}

export default Home;