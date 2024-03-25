import './App.css'
import { Routes } from './Routes.tsx';
import { AddRouteForm } from './AddRouteForm';
import {useEffect, useState} from "react";

function App() {

    const [routes, setArticles] = useState([]);

    function updateRoutes(routes) {
        setArticles(routes)
    };

    function getRoutesAsync() {
        console.log("GET ROUTES");
        return fetch('http://10.0.46.10:32100/routes')
            .then((response) => response.json())
            .then((responseJson) => {
                updateRoutes(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => getRoutesAsync, []);

    return (
    <>
        <h1>Routes</h1>
        <AddRouteForm updateRoutes={updateRoutes} />
        <hr/>
        <Routes routes={routes}/>
        <hr/>
    </>
  )
}

export default App
