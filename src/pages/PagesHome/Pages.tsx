import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProductDetailPage from '../ProductDetail/ProductDetailPage';

const Pages = ({ }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pages</h1>
      <p>This is the pages page.</p>
    </div>
  )
}

export default Pages