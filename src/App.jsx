import { Route, Routes, useLocation } from 'react-router-dom'
import { Navigation, ThemeSwitch } from './components'
import { Showcase, Products, Signin, Signup } from './components/pages/'

function App() {
  const location = useLocation()

  return (
    <>
      {/* <ThemeSwitch /> */}
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation />
      }
      <Routes>
        <Route path='/' element={<Showcase />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
