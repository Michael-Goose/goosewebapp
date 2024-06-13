import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {
  const history = useHistory();

  const navigateHome = () => {
    history.push('/');
  };

  return (
    <button className="home-button" onClick={navigateHome}>
      Home
    </button>
  );
}

export default HomeButton;
