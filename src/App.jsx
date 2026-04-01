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
import TransformWorkflow from './Components/TransformWorkflow/TransformWorkflow'
import Footer from './Components/Footer/Footer'

function App() {
  const [cartNum, setCartNum] = useState(0)
  const [cartProducts, setCartProduct] = useState([])
  const [active, setActive] = useState("products");
  const handleCartCount = (num, newProduct = '', state = "add",empty = 1) => {
    setCartNum((cartNum + num) * empty);
    state === "add"? setCartProduct([...cartProducts, newProduct]) : state === "clear" ? setCartProduct([]) : state === "cut" && setCartProduct(cartProducts.filter((cartProduct) => cartProduct.id !== newProduct));
  } 
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar cartNum={cartNum} setActive={setActive}></Navbar>
      <Banner></Banner>
      <State></State>
      <Features cartNum={cartNum} handleCartCount={handleCartCount} cartProducts={cartProducts} active={active} setActive={setActive}></Features>
      <Steps></Steps>
      <Price></Price>
      <TransformWorkflow></TransformWorkflow>
      <Footer></Footer>
    </>
  )
}


export default App
