import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: var(--width-wrapper);
  margin: 0 auto;
  padding: 0 57px 5rem 57px;

  h2 {
    color: var(--text-section);
    font-size: 2rem;
    margin: 40px 0 30px 0;
  }

  .total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 102px;

    p {
      font-size: 2rem;
    }

    h3 {
      font-size: 2.2rem;
    }

    .btn {
      margin-top: 2rem;
    }
  }
  
  @media screen and (max-width: 600px) {
    padding: 0 2rem 5rem 2rem;

    .total {
      align-items: center;
    }
  }
`;