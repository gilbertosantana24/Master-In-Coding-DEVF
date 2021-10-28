// LO VAMOS A UTILIZAR COMO SI FUERA NUESTRO H.O.C
// REUTILIZAR LA LOGICA


import React from "react";
import {Redirect} from 'react-router-dom';

function HOC(Component){
    const token = window.sessionStorage.getItem('token');


    const WrappedComponent = (props) => {
        return token ? <Component {...props} /> : <Redirect to="/" />
    }

    return WrappedComponent
}

export default HOC;