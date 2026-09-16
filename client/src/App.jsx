import { useState } from 'react';
import { Home } from './pages/Homepage/Homepage';
import { About } from './pages/AboutPage';
import ShowList from './pages/ShowList/ShowList';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ROUTES } from './routes/paths';

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Account  from './pages/Account';

function App() {
  const [count, setCount] = useState(0)
  const accountId = import.meta.env.VITE_ACCOUNT_ID; // my account id for TMDB

  return (
    <>
      <BrowserRouter>
      {/* 🧭 Navigation Bar available on all pages */}
      <nav style={{ padding: '10px', gap: '10px', display: 'flex' }}>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ABOUT}>About</Link>
        <Link to={ROUTES.POPULAR}>Popular TV</Link>
        <Link to={ROUTES.ACCOUNT_BY_ID(accountId)}>Account info</Link>
      </nav>

      {/* 🗺️ Route definitions */}
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POPULAR} element={<ShowList />} />
        <Route path={`${ROUTES.ACCOUNT}/:accountId`} element={<Account />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

