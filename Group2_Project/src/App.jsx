import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'

function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route index element={<Home />} >
          </Route>
          <Route path="products" element={<Products />}> </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
