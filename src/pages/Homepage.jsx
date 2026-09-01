// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';

import ShowList from './ShowList';

export function Home() {

  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleClick = () => {
    navigate('/showlist'); // 3. Pass the desired path
  };
  return (
    <>
    <h1> Show Tracker </h1>
    <h2> A place to track all your shows </h2>
    <button type="button" onClick={handleClick}> Get started </button>
    </>
  );
}

