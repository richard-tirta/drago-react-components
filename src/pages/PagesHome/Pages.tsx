import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Pages = ({ }) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li>
            Forms
          </li>
          <li>
            Product Detail Page
          </li>
        </ul>
      </nav>
      <h1>Pages</h1>
      <p>This is the pages page.</p>
    </div>
  )
}

export default Pages