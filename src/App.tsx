
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import dragoLogo from './assets/drago.svg'
import './App.css'
import HomeIndex from './components/home/HomeIndex';
import Button from './components/button/Button'
import ButtonIndex from './components/button/ButtonIndex';
import InputIndex from './components/form/InputIndex';
import FormIndex from './components/form/FormIndex';
import ModalIndex from './components/modal/ModalIndex';
import ConsentIndex from './components/consent/ConsentIndex';
import DrawerIndex from './components/drawer/DrawerIndex';
import ProductGalleryIndex from './components/product-gallery/ProductGalleryIndex';
import SearchIndex from './components/search/SearchIndex';

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
      <nav>
        <a className="logo" href="/">
          <img src={dragoLogo} alt="Drago Logo" width={200} />
          <span>Drago's React Components System</span>
        </a>
        <ul className="light_buttons">
          <li>
            <Button onClick={() => handleLightMode()}>Light Mode</Button>
          </li>
          <li>
            <Button onClick={() => handleDarkMode()} >Dark Mode</Button>
          </li>
        </ul>
        <ul className="main_nav">
          <li>
            <Button onClick={() => handleNavigation('/buttons')}>Buttons</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/inputs')}>Inputs</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/forms')}>Form Test</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/modals')}>Modals</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/consent')}>Consent</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/drawer')}>Drawer</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/products')}>Product Gallery</Button>
          </li>
          <li>
            <Button onClick={() => handleNavigation('/search')}>Search</Button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/buttons" element={<ButtonIndex />} />
        <Route path="/inputs" element={<InputIndex />} />
        <Route path="/forms" element={<FormIndex />} />
        <Route path="/modals" element={<ModalIndex />} />
        <Route path="/consent" element={<ConsentIndex />} />
        <Route path="/drawer" element={<DrawerIndex />} />
        <Route path="/products" element={<ProductGalleryIndex />} />
        <Route path="/search" element={<SearchIndex />} />
      </Routes>  
    </>
  )
}

export default App
