import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-decoration: none;
  gap: .5rem;
  
  .crumb:after {
    content: '/';
    margin: 0 2px;
  }

  .crumb:last-child:after {
    display: none;
  }
`;