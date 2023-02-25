import { useEffect, useState } from 'react';
import { FiChevronLeft, FiImage, FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Products } from '../../dataMock';
import { IProduct } from '../../types';
import * as C from './styles';

export const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IProduct[]>([]);
  
  useEffect(() => {
    const product = Products.filter(prod => prod.id === Number(params.id));
    setData(product);
  }, [])
  

  return(
    <C.Container>
      <Header numpage={2} />

      <C.ContentWrapper>
        <div className='arrow-back' onClick={() => navigate(-1)}>
          <FiChevronLeft size={18} /> Voltar
        </div>

        <div className="details__img-desc">

          <div className="img">
            <FiImage size={80} color={'#777'} opacity={.6} />
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
                }).format(data[0]?.price)}</p>
              <span>Ou em 12x de {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(data[0]?.price / 12)}</span>

              <div className='btn-qtd'>
                <span><FiMinus size={22} /></span>
                <p>1</p>
                <span><FiPlus size={22} /></span>
              </div>
            </div>

            <div className="buttons">
              <Button 
                title='Comprar' 
                bgColor='var(--btn-green)' 
              />
              <Button 
                title='Add carrinho'
              />
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