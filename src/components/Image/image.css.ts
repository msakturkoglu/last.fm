import styled from 'styled-components';

export const StyledImage = styled.img`
  background: linear-gradient(#dE685E, #EE786E);
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid lightpink;
  width: ${props => props.width || 'auto'}
`;