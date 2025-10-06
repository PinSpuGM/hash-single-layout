import { useState } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import AppLayout from './Layouts/AppLayout'

import Home from './pages/Home'
import Member from './pages/Members'
import Carts from './pages/Carts'
import About from './pages/About'
import ForwardHome from './pages/ForwardHome'

function App() {
  const [mainMenu, setMainMenu] = useState('home')

  return (
    <div className='m-2 border border-black rounded-2 p-2'>
      <HashRouter>
        <Routes>
          <Route
            element={
              <AppLayout mainMenu={mainMenu} setMainMenu={setMainMenu} />
            }
          >
            <Route path='home' element={<Home />} />
            <Route path='members' element={<Member />} />
            <Route path='carts' element={<Carts />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<ForwardHome />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
