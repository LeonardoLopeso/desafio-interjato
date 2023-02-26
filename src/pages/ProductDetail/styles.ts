import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: var(--width-wrapper);
  width: 100%;
  padding: 0 57px 5rem 57px;
  margin: 0 auto;
  
  .details__img-desc {
    display: flex;
    gap: 2rem;

    margin-bottom: 120px;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 65%;
      height: 500px;
      border-radius: 16px;
      background-color: var(--placeholder-color);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      padding: 2rem 0;

      .name-desc {
        padding-bottom: 28px;
        border-bottom: 1px solid rgba(0,0,0, .18);
        
        h3 {
          font-size: 2rem;
          margin-bottom: 33px;
        }

        p {
          color: #444;
        }
      }

      .qtd-price {
        margin-top: 2rem;

        p {
          font-size: 2rem;
          font-weight: 600;
        }

        span {
          font-size: .9rem;
        }

        .btn-qtd {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 159px;
          margin-top: 54px;
          margin-bottom: 2rem;
          padding: 8px 10px;
          border-radius: 8px;
          background-color: #ECECEC;

          span {
            cursor: pointer;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }

      .buttons {
        display: flex;
        gap: 1rem;
        padding-top: 28px;

        border-top: 1px solid rgba(0,0,0, .18);
      }
    }

    @media screen and (max-width: 760px) {
      flex-direction: column;
      text-align: center;

      .img {
        width: 100%;
        height: 350px;
      }
      .description {
        width: 100%;

        .btn-qtd {
          margin: 0 auto;
        }
      }
    }
  }

  .details__more-info-prod {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .info-prod, .details-prod {

      h3 {
        color: var(--text-section);
        font-size: 1.8rem;
        border-bottom: 1px solid rgba(0,0,0, .18);
      }

      ul {
        list-style: none;
        line-height: 32px;
        margin-top: 1rem;

        li { 
          color: #333; 
          border-bottom: 1px solid rgba(0,0,0, .10);
        }

        li span {
          font-weight: 600;
          color: #222;
        }
      }
    }

    @media screen and (max-width: 890px) {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 760px) {
    padding: 0 2rem 5rem 2rem; 
  }
`;