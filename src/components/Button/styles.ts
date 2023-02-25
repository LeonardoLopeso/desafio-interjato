import styled from 'styled-components';

interface IPropButtonContainer {
  w?: string;
  bgcolor?: string;
}
export const Container = styled.div<IPropButtonContainer>`
  width: 100%;
  
  button {
    width: ${({ w }) => w ? w : '100%'};
    min-height: 46px;
    padding: 0 12px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;

    border: 0;
    border-radius: 10px;
    background-color: ${({ bgcolor }) => bgcolor ? bgcolor : 'var(--btn-primary)'};

    transition: all .4s ease;

    &:hover {
      opacity: .8;
    }
  }
`;