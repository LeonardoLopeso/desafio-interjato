import { FiInfo } from 'react-icons/fi';
import { ArrowBack } from '../../components/ArrowBack';
import { Header } from '../../components/Header';
import * as C from './styles';

export const NotFound = () => {
  return(
    <C.Container>
      <Header numpage={4} />


      <C.ContentWrapper>


        <div>
          <FiInfo size={65} color={'rgba(0,0,0, .6)'} />
          <h1>Desculpe, página não encontrada!</h1>
          <ArrowBack />
        </div>
      </C.ContentWrapper>

    </C.Container>
  );
}