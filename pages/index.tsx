import { Button, Typography, Box, Container } from "@material-ui/core";
import styled from "styled-components";

const NavButton = styled(Button)`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
`;

const Home = () => (
  <>
    <Box boxShadow={1}>
      <Container maxWidth="lg">
        <NavButton href="#ueber-mich">Über mich</NavButton>
      </Container>
    </Box>
    <Container maxWidth="lg">
      <Typography variant="h1">Daniela Burkhardt</Typography>
      <Typography variant="h2">Über mich</Typography>
    </Container>
  </>
);

export default Home;
