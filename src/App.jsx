
import './App.css'
import TourData from './TourData'
import Tour from './Components/Tour'
import { useState } from 'react'

function App() {
 
const [tours,setTour] = useState(TourData)

function removeTour(id){
  const newTour = tours.filter((tour)=>tour.id != id)
  setTour(newTour)
}

if(tours.length == 0){
  return (
    <div className='refresh'>
      <h1>No Plan</h1>
      <button onClick={()=>setTour(TourData)}className="btnWhite">Refresh</button>
    </div>
  )
}

  return (
   <div className='appContainer'>
        <Tour tours={tours} removeTour={removeTour}></Tour>
   </div>
  )
}

export default App
