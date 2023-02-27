import { FiImage, FiTrash } from 'react-icons/fi';
import { useCart } from '../../context/main';
import { IProduct } from '../../types';
import * as C from './styles';

export const CartList = ({ id, name, description, price, img, qtd }: IProduct) => {
  const { removeProductInCart } = useCart();

  return(
    <C.Container>
      <div className="img">
        {img
          ? <img src={img} alt={name} />
          : <FiImage size={32} color="#777" opacity={.6} />
        }
        
      </div>

      <div className="info">
        <p className='light'>{name}</p>
        <p><span>Valor:</span> {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(price)}</p>
        
        <p><span>Qtd: </span> {qtd}</p>

        <p><span>Total: </span> {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(price * Number(qtd))}</p>
        <FiTrash 
          size={26} 
          cursor={'pointer'} 
          onClick={() => removeProductInCart(id)}
        />
      </div>
    </C.Container>
  );
}