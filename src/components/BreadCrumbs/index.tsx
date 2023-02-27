import { FiHome } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { IPropBreadCrumbs } from '../../types';
import * as C from './styles';

export const BreadCrumbs = ({page}: IPropBreadCrumbs) => {
  const crumbs = useLocation();

  return(
    <C.Container>
      {page === 1 || page === 4 ? '' : <><FiHome />{'inicio'+crumbs.pathname}</>}
    </C.Container>
  );
}