import { useEffect, useState } from 'react';
import { FiImage, FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '../../components/ArrowBack';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useCart } from '../../context/main';
import { Products } from '../../dataMock';
import { IItem, IProduct } from '../../types';
import * as C from './styles';

export const ProductDetail = () => {
  const { addProductToCart, removeProductCar, cart } = useCart();
  
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IProduct[]>([]);
  const [idQtdCart, setIdQtdCart] = useState<IItem[]>([]);

  const idProd = Number(params.id);
  
  useEffect(() => {
    const product = Products.filter(prod => prod.id === idProd);
    setData(product);
  }, [idProd])

  useEffect(() => {
    const prodCart = cart.filter(prod => prod.id === idProd);
    setIdQtdCart(prodCart);
  }, [cart, idProd])

  const handleCart = () => {
    if(idQtdCart[0] !== undefined && idQtdCart[0].qtd > 0) {
      return navigate('/carrinho');
    }

    addProductToCart(data[0]);
    return navigate('/carrinho');
  }
  
  return(
    <C.Container>
      <Header numpage={2} />

      <C.ContentWrapper>
        <ArrowBack />

        <div className="details__img-desc">

          <div className="img">
            {data[0]?.img
              ?  <img src={data[0]?.img} alt={data[0]?.name} />
              :  <FiImage size={80} color={'#777'} opacity={.6} />
            }
          </div>

          <div className="description">
            <div className="name-desc">
              <h3>{data[0]?.name}</h3>
              <p>{data[0]?.description}</p>
            </div>

            <div className="qtd-price">
              <p>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(
                  idQtdCart[0]?.qtd ? data[0]?.price : data[0]?.price
              )}</p>

              <span>Ou em 12x de {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(
                  idQtdCart[0]?.qtd ? (data[0]?.price) / 12 : data[0]?.price
              )}</span>

              <div className='btn-qtd'>
                <span onClick={() => removeProductCar(data[0]?.id)}><FiMinus size={22} /></span>
                <p>{idQtdCart[0]?.qtd ? idQtdCart[0]?.qtd : 0}</p>
                <span onClick={() => addProductToCart(data[0])}><FiPlus size={22} /></span>
              </div>
            </div>

            <div className="buttons">
              <Button 
                title='Comprar' 
                bgColor='var(--btn-green)' 
                onClick={handleCart}
              />
              {/* <Button 
                title='Add carrinho'
                onClick={() => addProductToCart(data[0])}
              /> */}
            </div>
          </div>
        </div>

        <div className="details__more-info-prod">
          <div className="info-prod">
            <h3>Informações do produto</h3>
            <ul>
              {data[0]?.infoProduct?.map((info, key) => (
                <li key={key}><span>{info.label}:</span> {info.description}</li>
              ))}
            </ul>
          </div>
          <div className="details-prod">
            <h3>Detalhes do produto</h3>
            <ul>
              {data[0]?.detailsProduct?.map((detail, key) => (
                <li key={key}><span>{detail.label}:</span> {detail.description}</li>
              ))}
            </ul>
          </div>
        </div>

      </C.ContentWrapper>

    </C.Container>
  );
}