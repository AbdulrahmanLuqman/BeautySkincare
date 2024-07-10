import { Route, Routes, Navigate } from "react-router-dom"

import { Header } from "./components/Header"
import { SkincarePage } from "./views/SkincarePage"
import { AddToCart } from "./components/skincarePage/AddToCart"
import { ItemsAdded } from "./components/ItemsAdded"
import { Checkout } from "./views/CheckoutPage"
import { Footer } from "./components/Footer"

const App = ()=>{
  return(
    <>
      <Header />

      <Routes>
        <Route path="/skincare" element={<SkincarePage/>}/>
        <Route path="/" element={<Navigate to="/skincare"/>}></Route>
        <Route path="/skincare/add-to-cart" element={<AddToCart/>}/>
        <Route path="/cart" element={<ItemsAdded/>}/>
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>

      <Footer />
    </>
  )
}

export default App