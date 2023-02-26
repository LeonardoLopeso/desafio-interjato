import { ArrowBack } from '../../components/ArrowBack';
import { Button } from '../../components/Button';
import { CartList } from '../../components/CartList';
import { Header } from '../../components/Header';
import * as C from './styles';

export const Cart = () => {
  return(
    <C.Container>
      <Header numpage={3} />
      
      <C.ContentWrapper>
        <ArrowBack />

        <h2>Itens do carrinho</h2>

        <div className="products-cart">
          <CartList />
          <CartList />
          <CartList />
          <CartList />
          <CartList />
        </div>

        <div className="total">
          <p>Valor total</p>
          <h3>R$ 2.900,00</h3>

          <div className="btn">
            <Button 
              title='Finalizar pedido'
              wButton='350px'
              bgColor='var(--btn-green)'
            />
          </div>
        </div>
      </C.ContentWrapper>
    </C.Container>
  );
}