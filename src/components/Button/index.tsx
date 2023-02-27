import { IPropButton } from '../../types';
import * as C from './styles';


export const Button = ({ title, wButton, bgColor, onClick, children }: IPropButton) => {
  return(
    <C.Container 
      w={wButton} 
      bgcolor={bgColor} 
      onClick={onClick}
    >
      <button>
        {children ? children : title}
      </button>
    </C.Container>
  );
}