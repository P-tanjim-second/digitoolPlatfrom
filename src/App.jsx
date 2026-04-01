import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import State from './Components/State/State'
import Features from './Components/Features/Features'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Steps from './Components/Steps/Steps'
import Price from './Components/Price/Price'

function App() {
  const [cartNum, setCartNum] = useState(0)
  const [cartProducts, setCartProduct] = useState([])
  const handleCartCount = (num, newProduct = '', state = "add",empty = 1) => {
    setCartNum((cartNum + num) * empty);
    state === "add"? setCartProduct([...cartProducts, newProduct]) : state === "clear" ? setCartProduct([]) : state === "cut" && setCartProduct(cartProducts.filter((cartProduct) => cartProduct.id !== newProduct));
  } 
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar cartNum={cartNum}></Navbar>
      <Banner></Banner>
      <State></State>
      <Features cartNum={cartNum} handleCartCount={handleCartCount} cartProducts={cartProducts}></Features>
      <Steps></Steps>
      <Price></Price>
    </>
  )
}


export default App
