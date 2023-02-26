import { FiImage, FiTrash } from 'react-icons/fi';
import * as C from './styles';

export const CartList = () => {
  return(
    <C.Container>
      <div className="img">
        <FiImage size={32} color="#777" opacity={.6} />
      </div>

      <div className="info">
        <p className='light'>Nome do Produto</p>
        <p><span>Valor:</span> R$ 290,00</p>
        <p><span>Qtd: </span> 3</p>
        <p><span>Total: </span> R$ 580,00</p>
        <FiTrash size={26} cursor={'pointer'} />
      </div>
    </C.Container>
  );
}