import {useEffect, useState } from 'react'
import Watch from './Component/Watch/Watch';

import './App.css'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch("watches.json")
    .then(res => res.json())
    .then(data =>setWatches(data))
  }
    ,[])

  return (
    <>
     
      <h1>Vite + React</h1>
    {
        watches.map(watch => <Watch key = {watch.id} watch ={watch} >
          </Watch>)
    }
     
   
    </>
  )
}

export default App
