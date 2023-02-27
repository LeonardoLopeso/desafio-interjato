import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--bg-color);

  div {
    width: 65px;
    height: 65px;
    border-top: 4px solid transparent;
    border-right: 4px solid var(--bold-green);
    border-left: 4px solid var(--bold-green);
    border-radius: 50%;
    border-bottom: 4px solid var(--bold-green);
    animation: spinner .8s ease infinite;

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;