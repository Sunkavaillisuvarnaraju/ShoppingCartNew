import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import CartList from './components/CartList';

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Cart />} />
      <Route path='/Cart' element={<CartList />} />
    </Routes>
  </Router>
  )
}

export default App;
