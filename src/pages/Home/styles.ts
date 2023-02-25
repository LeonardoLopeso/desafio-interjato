import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: var(--width-wrapper);
  padding: 0 57px 5rem 57px;
  margin: 0 auto;

  .banner {
    width: 100%;
    height: 328px;
    padding: 60px;
    margin-top: 27px;

    border-radius: 1rem;
    background-color: var(--banner-color);

    h2 {
      max-width: 514px;
      font-size: 2rem;
      color: var(--text-section);

      margin-bottom: 61px;
    }
  }

  .section-products {
    margin-top: 65px;

    h3 {
      font-size: 2rem;
      margin-bottom: 29px;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;

      @media screen and (max-width: 990px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 790px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
      }
    }
  }

  @media screen and (max-width: 760px) {
    padding: 0 2rem 5rem 2rem;
    
    .banner {
      padding: 60px 3rem;
      text-align: center;
    }

    .section-products {

      h3 {
        text-align: center;
      }
    }
  }
`;