import './App.css'
import { Routes } from './Routes.tsx';
import { AddRouteForm } from './AddRouteForm';

function App() {
  return (
    <>
        <h1>Routes</h1>
        <AddRouteForm />
        <hr/>
        <Routes />
        <hr/>
    </>
  )
}

export default App
