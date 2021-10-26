import React, { useState, useEffect } from "react";
import axios from 'axios';

const WithCurrentUser = ComponentUser => {
    const NewComponent = props => {
        const [ user, setUser ] = useState();


        useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(resp => {
                setUser(resp.data)
            })
        }, [])//escucha las dependencias para saber si hay cambios

       //return <ComponentUser {...props}
    }

}