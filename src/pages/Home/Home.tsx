import styled from 'styled-components';
import { GenericContainer } from "../../components/GenericContainer";
import { TopArtists } from "../../components/TopArtists";


const Container = styled(GenericContainer)`
  width: 50%;
  padding-top: 3rem;
  height: 101vh;
`;

export const Home = () => {

  
  return (
    <Container title="Top Artist List">
      <TopArtists />
    </Container>
  )};