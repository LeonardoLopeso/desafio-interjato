import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  span {
    display: flex;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    
    h1 {
      color: rgba(0,0,0, .6);
    }
  }
`;