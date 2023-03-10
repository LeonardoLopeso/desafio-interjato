import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProductDetail } from './pages/ProductDetail';
import { SplashScreen } from './pages/SplashScreen';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/produto/:id' element={<ProductDetail />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
