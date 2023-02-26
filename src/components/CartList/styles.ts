import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 1rem 0;
  border-bottom:1px solid rgba(0,0,0, .18);

  .info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 1rem;
    gap: .3rem;

    p {
      font-size: 1.2rem;
      font-weight: 600;

      span {
        display: none;
      }
      
      &.light {
        font-weight: 400;
      }
    }
    
    svg {
      color: var(--trash-color);
    }
  }

  div.img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 70px;
    margin-left: 0;
    border-radius: 1rem;
    background-color: var(--placeholder-color);
  }

  @media screen and (max-width: 600px) {
    .info {
      padding-top: 8px;

      p span {
        display: block;
      }
    }

    .info p:nth-child(1) {
      width: 100%;
    }
  }

  @media screen and (max-width: 460px) {
    div.img {
      width: 190px;
      height: 140px;
    }

    .info p {
      display: flex;
      width: 100%;
    }

    .info svg {
      margin-left: auto;
    }
  }
`;