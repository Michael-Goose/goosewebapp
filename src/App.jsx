import { useState } from 'react';
import gooseLogo from './assets/goose_logo_new.svg';
import smartbunnyLogo from './assets/SmartBunny Logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <button className="nav-button" onClick={() => window.location.href = '/'}>
          Home
        </button>
      </nav>
      <div>
        <a href="https://www.gooseinsurance.com/en-us/" target="_blank" rel="noopener noreferrer">
          <img src={smartbunnyLogo} className="logo smartbunny" alt="SmartBunny logo" />
        </a>
        <a href="https://www.gooseinsurance.com/en-ca/" target="_blank" rel="noopener noreferrer">
          <img src={gooseLogo} className="logo Goose" alt="Goose logo" />
        </a>
      </div>
      <h1>Goose</h1>
    </>
  );
}

export default App;
