import { Route, Routes, useLocation } from 'react-router-dom'
import { Navigation, Footer, Cart } from './components'
import { Showcase, Products, Signin, Signup } from './components/pages'

const App = () =>{
  const location = useLocation()

  return (
    <>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation />
      }
      <Routes>
        <Route path='/' element={<Showcase />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup'
        && location.pathname !== '/' && <Footer />
      }
    </>
  )
}

export default App
