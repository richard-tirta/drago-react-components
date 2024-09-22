
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/button/Button'
import ButtonIndex from './components/button/ButtonIndex';
import InputIndex from './components/form/InputIndex';

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
            <li>
              <Button onClick={() => handleNavigation('/inputs')}>Inputs</Button>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/buttons" element={<ButtonIndex />} />
        <Route path="/inputs" element={<InputIndex />} />
      </Routes>
    </>
  )
}

export default App
