import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 29px;
    color: #fff;
    padding: 0 57px;
    font-size: 12px;

    background-color: var(--bg-header-top);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 57px;
    margin-top: 43px;

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

  @media screen and (max-width: 760px) {
    .header .menu-mobile {
      display: block;
    }
  }
`;