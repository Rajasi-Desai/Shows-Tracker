// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths'
import './Homepage.css';

//TODO
//need to center the button
export function Home() {

  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleClick = () => {
    navigate(ROUTES.POPULAR); // 3. Pass the desired path
  };
  return (
    <>
    <div>
      <h1> Show Tracker </h1>
      <h2> A place to track all your shows </h2>
      <button className="customButton" onClick={handleClick} type="button">
        Get Started
      </button>
    </div>
    
    </>
  );
}

