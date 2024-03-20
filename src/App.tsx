import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Articles } from './Articles';

function App() {
  return (
    <>
      <h1>Articles</h1>
      <hr/>
       <Articles />
      <hr/>
    </>
  )
}

export default App
