import { FiImage, FiShoppingCart } from 'react-icons/fi';
import { IProduct } from '../../types';
import * as C from './styles';

export const CardProduct = ({ img, name, description, price }: IProduct) => {
  return(
    <C.Container>

      <div className="image">
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

      <div className='icon-cart'>
        <p>
          <span></span>
          Adicionar ao carrinho
        </p>
        <FiShoppingCart size={20} />
      </div>
    </C.Container>
  );
}