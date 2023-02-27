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
    min-height: 328px;
    padding: 35px 60px 60px;
    margin-top: 27px;

    border-radius: 1rem;
    background-color: var(--banner-color);

    .link {

      width: 167px;
      min-height: 46px;

      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 10px;
      background-color: var(--btn-primary);

      transition: all .4s ease;

      &:hover {
        opacity: .8;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 167px;
        height: 46px;
        color: #fff;
        text-align: center;
        text-decoration: none;
      }
    
    }

    h2 {
      min-height: 150px;
      font-size: 2.3rem;
      color: var(--text-section);

      margin-bottom: 61px;

      h3 {
        max-width: 500px;
        margin-top: 2rem;
        font-size: 1.8rem;
        font-weight: 400;
      }
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
      padding: 60px 1rem;
      text-align: center;

      h2 h3 {
        max-width: none;
        text-align: center;
      }

      .link {
        margin: 0 auto;
      }
    }

    .section-products {

      h3 {
        text-align: center;
      }
    }
  }
`;