import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .header-top {
    background-color: var(--bg-header-top);

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: var(--width-wrapper);
      height: 29px;
      margin: 0 auto;
      color: #fff;
      padding: 0 57px;
      font-size: 12px;

      @media screen and (max-width: 560px) {
        .phone { display: none; }

        padding: 0 2rem;
      }
    }

  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--width-wrapper);
    padding: 0 57px;
    margin: 43px auto 1rem auto;

    .logo h1 {
      font-size: 2.2rem;
      cursor: pointer;
    }

    .cart div {
      position: relative;
      display: flex;
      align-items: center;
      gap: .5rem;
      
      color: var(--bold-green);
      cursor: pointer;

      .qtd-itens-cart {
        position: absolute;
        top: 5px;
        left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23px;
        height: 18px;
        color: #fff;
        border-radius: 2px;
        /* transform: rotate(-1deg); */
        background-color: var(--bold-green);
      }
    }

    .menu-mobile {
      display: none;
      cursor: pointer;
    }
  }

  .breadcrumb {
    max-width: var(--width-wrapper);
    width: 100%;
    padding: 0 57px;
    margin: 0 auto 43px auto;
    color: #777;
  }

  @media screen and (max-width: 760px) {
    .header, .breadcrumb {
      padding: 0 2rem;
    }
    .header .menu-mobile {
      /* display: block; */
    }
  }
`;