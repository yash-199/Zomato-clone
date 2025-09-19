import Home from './page/Home'
import Navbar from './component/Navbar'
import Menu from './page/Menu'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();

  return (
    <div className='overflow-hidden'>
      {location.pathname != "/" && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
