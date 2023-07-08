import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
