import { useState } from 'react'
import { Home } from './pages/homepage'
import { About } from './pages/Temppage'
import ShowList from './pages/ShowList';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Account } from './pages/Account';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      {/* 🧭 Navigation Bar available on all pages */}
      <nav style={{ padding: '10px', gap: '10px', display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/showlist">Shows List</Link>
        <Link to="/Account">Account info</Link>
      </nav>

      {/* 🗺️ Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showlist" element={<ShowList />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

