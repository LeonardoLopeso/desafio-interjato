import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

export const SplashScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/inicio');
    }, 1000);
  }, [navigate])

  return(
    <C.Container>
      <div></div>
    </C.Container>
  );
}