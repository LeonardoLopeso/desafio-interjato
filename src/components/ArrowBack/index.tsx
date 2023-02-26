import { FiChevronsLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

export const ArrowBack = () => {
  const navigate = useNavigate();

  return(
    <C.Container>
        <div className='arrow-back' onClick={() => navigate(-1)}>
          <FiChevronsLeft size={18} /> Voltar
        </div>
    </C.Container>
  );
}