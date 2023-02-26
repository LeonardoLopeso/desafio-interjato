import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  border-radius: 16px;
  background-color: #fff;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  transition: all .4s ease;

  &:hover {
    filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 205px;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: var(--placeholder-color);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      object-fit: cover;
    }
  }

  .description-product {
    padding: 21px 18px 5px;

    .name-price {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: #222;

      p:nth-child(2) {
        font-weight: 600;
        color: var(--text-section);
      }
    }

    .description {
      color: #444;
    }
  }

  .icon-cart {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 18px 1rem 0;
    margin-top: 1rem;
    color: var(--bold-green);
    cursor: pointer;
    transition: all .4s ease;

    p {
      position: relative;

      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: width .2s ease;
      }
    }

    &:hover {

      svg {
        transform: rotate(-10deg);
      }
      p {
        span {
          width: 0%;
        }
      }
    }
  }
`;