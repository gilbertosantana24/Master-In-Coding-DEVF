import React from 'react';
import SongDetails from '../../components/SongDetails';
import SongList from '../../components/SongList';
import './home.css';

const Home = () => {
return (

    <div className="home-container">
        <div className="izquierdo">
            <h2>lado izquierdo</h2>
            <SongList />
        </div>

        <div className="derecho">
            <h2>lado derecho</h2>
            <SongDetails />
        </div>
    </div>
    )
}

export default Home;