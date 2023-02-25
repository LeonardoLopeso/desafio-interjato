import * as C from './styles';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

export const Header = () => {
  return(
    <C.Container>
      <div className="header-top">
        <p>(84) 99999-8888</p>
        <p>Só hoje, frete grátis para todo o Brasil</p>
        <p>Redes sociais</p>
      </div>

      <div className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="cart">
          <div><FiShoppingCart size={20} /> Carrinho</div>
        </div>

        <div className="menu-mobile"><FiMenu size={20} /></div>
      </div>

    </C.Container>
  );
}