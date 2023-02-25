import styled from 'styled-components';

interface IPropButtonContainer {
  w?: string;
}
export const Container = styled.div<IPropButtonContainer>`
  
  button {
    width: ${({ w }) => w ? w : '167px'};
    min-height: 46px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;

    border: 0;
    border-radius: 10px;
    background-color: var(--btn-primary);

    transition: all .4s ease;

    &:hover {
      opacity: .8;
    }
  }
`;