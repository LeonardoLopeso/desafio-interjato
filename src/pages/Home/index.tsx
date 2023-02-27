import { useNavigate } from 'react-router-dom';
import { CardProduct } from '../../components/CardProduct';
import { Header } from '../../components/Header';
import { Products } from '../../dataMock';
import { motion } from 'framer-motion';
import * as C from './styles';

export const Home = () => {
  const navigate = useNavigate();

  return(
    <C.Container>
      <Header numpage={1} />

      <C.ContentWrapper>
        <section className="banner">
          <motion.div 
            initial={{ y: 100 }} 
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: 1,
            }}
          >
            <h2>
              Olá, somos a InterAgro! Somos 100% nacional e o maior revendedor de produtos agricolas do Pais.
              <h3>Contate nossos revendedores pelo número (84) 99999-9999 </h3>
            </h2>
          </motion.div>
          
          <div className='link'>
            <a href="#prod">Comprar agora</a>
          </div>

        </section>

        <section className="section-products">
          <h3 id='prod'>Confira nossos produtos</h3>
          
          <motion.div
            initial={{ y: 30, display: 'none' }}
            animate={{ y: 0, display: 'block' }}
            transition={{
              type: "spring",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: 1,
              delay: .2
            }}
          >
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
                qtd={prod.qtd}
                />
                ))}
            </div>
          </motion.div>
        </section>
      </C.ContentWrapper>
    </C.Container>
  );
}