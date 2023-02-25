import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardProduct } from '../../components/CardProduct';
import { Header } from '../../components/Header';
import { Products } from '../../dataMock';
import * as C from './styles';

export const Home = () => {
  const navigate = useNavigate();

  return(
    <C.Container>
      <Header numpage={1} />

      <C.ContentWrapper>
        <section className="banner">
          <h2>Produtos de qualidade com 15% Off Você encontra aqui</h2>

          <Button 
            title='Comprar agora' 
            wButton='167px'
          />
        </section>

        <section className="section-products">
          <h3>Confira nossos produtos</h3>

          <div className="products">
            {Products.map((prod, key) => (
              <CardProduct 
                key={key}
                id={prod.id}
                img={prod.img}
                name={prod.name}
                price={prod.price}
                description={prod.description}
                onClick={() => navigate(`/produto/${prod.id}`)}
              />
            ))}
          </div>
        </section>
      </C.ContentWrapper>
    </C.Container>
  );
}