import { IPropButton } from '../../types';
import * as C from './styles';


export const Button = ({ title, wButton, bgColor }: IPropButton) => {
  return(
    <C.Container w={wButton} bgcolor={bgColor}>
      <button>
        {title}
      </button>
    </C.Container>
  );
}