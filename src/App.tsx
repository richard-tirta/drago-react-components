
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import dragoLogo from './assets/drago.svg'
import './App.css'
import HomeIndex from './components/home/HomeIndex';
import Pages from './pages/PagesHome/Pages';
import Button from './components/button/Button'
import ButtonIndex from './components/button/ButtonIndex';
import InputIndex from './components/form/InputIndex';
import FormIndex from './components/form/FormIndex';
import ModalIndex from './components/modal/ModalIndex';
import ConsentIndex from './components/consent/ConsentIndex';
import DrawerIndex from './components/drawer/DrawerIndex';
import ProductGalleryIndex from './components/product-gallery/ProductGalleryIndex';
import SearchIndex from './components/search/SearchIndex';
import NotificationIndex from './components/notification/NotificationIndex';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';

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
            <Button onClick={() => handleNavigation('/pages')}>Pages</Button>
          </li>
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
          <li>
            <Button onClick={() => handleNavigation('/notification')}>Notification</Button>
          </li>
          <li>
          <Button onClick={() => navigate('/product-detail-page')}>Product Detail Page</Button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/buttons" element={<ButtonIndex />} />
        <Route path="/inputs" element={<InputIndex />} />
        <Route path="/forms" element={<FormIndex />} />
        <Route path="/modals" element={<ModalIndex />} />
        <Route path="/consent" element={<ConsentIndex />} />
        <Route path="/drawer" element={<DrawerIndex />} />
        <Route path="/products" element={<ProductGalleryIndex />} />
        <Route path="/search" element={<SearchIndex />} />
        <Route path="/notification" element={<NotificationIndex />} />
        <Route path="/product-detail-page" element={<ProductDetailPage/>} />
      </Routes>  
    </>
  )
}

export default App
