import { IPropButton } from '../../types';
import * as C from './styles';


export const Button = ({ title, wButton }: IPropButton) => {
  return(
    <C.Container w={wButton}>
      <button>
        {title}
      </button>
    </C.Container>
  );
}