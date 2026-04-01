import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import State from './Components/State/State'
import Features from './Components/Features/Features'
import { useState } from 'react'

function App() {
  const [cartNum, setCartNum] = useState(0)
  const handleCartCount = (num) => {
    setCartNum(cartNum + num);
  } 
  return (
    <>
      <Navbar cartNum={cartNum}></Navbar>
      <Banner></Banner>
      <State></State>
      <Features cartNum={cartNum} handleCartCount={handleCartCount}></Features>
    </>
  )
}


export default App
