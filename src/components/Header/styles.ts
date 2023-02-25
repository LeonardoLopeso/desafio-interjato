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

    .cart div {
      display: flex;
      align-items: center;
      gap: .5rem;
      
      color: var(--bold-green);
      cursor: pointer;
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
    margin: 0 auto 43px 0;
    color: #777;
  }

  @media screen and (max-width: 760px) {
    .header .menu-mobile {
      display: block;
    }
  }
`;