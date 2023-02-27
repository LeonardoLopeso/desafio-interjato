import { FiImage, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/main';
import { IProduct } from '../../types';
import * as C from './styles';

export const CardProduct = ({ id, img, name, description, price, onClick, qtd }: IProduct) => {
  const { addProductToCart, cart } = useCart();
  const navigate = useNavigate()

  const handleCart = (id: number) => {
    addProductToCart({id, img, name, description, price});
    navigate(`/produto/${id}`);
  }

  const verifiedQtd = cart.filter(prod => prod.id === id);

  return(
    <C.Container>

      <div 
        className="image"
        onClick={onClick}
      >
        {img 
          ? <img src={img} alt={name} />
          : <FiImage size={45} color={'#777'} opacity={.6} />
        }
      </div>

      <div className="description-product">
        <div className="name-price">
          <p>{name}</p>
          <p>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
              }).format(price)}</p>
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      
      <div 
        className={`${verifiedQtd[0]?.qtd > 0 ? 'item-add' : 'icon-cart'}`}
        onClick={() => handleCart(id)}
      >
        <p>
          <span></span>
          {verifiedQtd[0]?.qtd > 0 ? 'Item no carrinho' : 'Adicionar ao carrinho'}
        </p>
        <FiShoppingCart size={20} />
      </div>

    </C.Container>
  );
}