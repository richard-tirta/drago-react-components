
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/Button'
import ButtonIndex from './components/buttons/ButtonIndex';

function App() {

  const navigate = useNavigate();

  const handleDarkMode = () => { 
    console.log('darmode')
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const handleLightMode = () => { 
    document.documentElement.setAttribute('data-theme', 'light');
  }

  const handleNavigation = (path: string) => {
    navigate(path);
  }

  return (
    <>
      <div>
        <h1>Drago's React Components System</h1>
        <nav>
          <ul>
            <li>
              <Button onClick={() => handleLightMode()}>Light Mode</Button>
            </li>
            <li>
              <Button onClick={() => handleDarkMode()} >Dark Mode</Button>
            </li>
          </ul>
          <ul>
            <li>
              <Button onClick={() => handleNavigation('/buttons')}>Buttons</Button>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/buttons" element={<ButtonIndex />} />
      </Routes>
    </>
  )
}

export default App
