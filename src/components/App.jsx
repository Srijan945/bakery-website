import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Payments from './Payments';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/cart' exact Component={Cart} />
        <Route path='/payments' exact Component={Payments} />
        <Route path='*' Component={ErrorPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
