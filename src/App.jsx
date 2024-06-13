import { useState } from 'react';
import reactLogo from './assets/goose_logo_new.svg';
import viteLogo from './assets/SmartBunny Logo.svg';
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
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.gooseinsurance.com/en-ca/" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Goose</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Goose and SmartBunny logos to learn more
      </p>
    </>
  );
}

export default App;
