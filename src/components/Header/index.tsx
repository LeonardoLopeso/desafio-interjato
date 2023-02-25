import * as C from './styles';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { BreadCrumbs } from '../BreadCrumbs';
import { IPropHeader } from '../../types';

export const Header = ({ numpage }: IPropHeader) => {
  return(
    <C.Container>
      <div className="header-top">
        <div className="wrapper">
          <p className='phone'>(84) 99999-8888</p>
          <p>Só hoje, frete grátis para todo o Brasil</p>
          <p>Redes sociais</p>
        </div>
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
      
      <div className="breadcrumb">
        <BreadCrumbs page={numpage} />
      </div>
    </C.Container>
  );
}