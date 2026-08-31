import { useState } from 'react'
import { Home } from './pages/homepage'
import { About } from './pages/temppage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Show tracker</h1>
      </div>
      <BrowserRouter>
      {/* 🧭 Navigation Bar available on all pages */}
      <nav style={{ padding: '10px', gap: '10px', display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* 🗺️ Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

