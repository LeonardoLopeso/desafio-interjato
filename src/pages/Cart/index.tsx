import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ArrowBack } from '../../components/ArrowBack';
import { Button } from '../../components/Button';
import { CartList } from '../../components/CartList';
import { Header } from '../../components/Header';
import { useCart } from '../../context/main';
import * as C from './styles';

export const Cart = () => {
  const { cart, totalCart, clearCart } = useCart();
  const navigate = useNavigate();

  const finalyCart = () => {
    toast.success("Compra realizada com sucesso!");
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return(
    <C.Container>
      <Header numpage={3} />
      
      <C.ContentWrapper>
        <ArrowBack />

        <h2>Itens do carrinho</h2>

        <div className="products-cart">

          {cart.length > 0 
            ? cart.map((prod, key) => (
            
              <CartList 
                key={key}
                id={Number(prod.prod?.id)}
                img={prod.prod?.img}
                name={`${prod.prod?.name}`}
                price={Number(prod.prod?.price)}
                description={`${prod.prod?.description}`}
                qtd={Number(prod.qtd)}
              />
            ))
          : <h2><FiShoppingCart/> Carrinho vazio</h2>
        }
        </div>

        {cart.length > 0 &&
          <div className="total">
            <p>Valor total</p>
            <h3>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalCart)}</h3>

            <div className="btn">
              <Button 
                title='Continuar comprando'
                wButton='250px'
                onClick={() => navigate('/inicio')}
              />
              <Button 
                title='Finalizar pedido'
                wButton='250px'
                bgColor='var(--btn-green)'
                onClick={finalyCart}
              />
            </div>
          </div>
        }
      </C.ContentWrapper>
    </C.Container>
  );
}