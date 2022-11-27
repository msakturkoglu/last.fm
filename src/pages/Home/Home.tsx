import styled from 'styled-components';
import { GenericContainer } from "../../components/GenericContainer";
import { TopArtists } from "../../components/TopArtists";


const Container = styled(GenericContainer)`
  margin-top: 1rem;
  width: 50%;
  padding-top: 3rem;
  height: 101vh;
  background-color: ${props => props.theme.list}
`;

export const Home = () => {

  
  return (
    <Container title="Top Artist List">
      <TopArtists />
    </Container>
  )};