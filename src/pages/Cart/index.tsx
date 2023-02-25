import { Header } from '../../components/Header';
import * as C from './styles';

export const Cart = () => {
  return(
    <C.Container>
      <Header numpage={3} />
      <br />
      <br />
      <h2>Página carrinho.</h2>
    </C.Container>
  );
}