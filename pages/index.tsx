import { Button, Typography, Box, Container, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
`;

const NavButton = styled(Button)`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  text-transform: ${({ theme }) => theme.typography.h1.textTransform};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const NavLogo = styled.img`
  max-height: ${({ theme }) => theme.spacing(14)}px;
  margin-left: auto;
`;

const Home = () => (
  <>
    <Nav>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <NavButton href="#ueber-mich">Über mich</NavButton>
          <NavButton href="#erfahrung-und-qualifikationen">
            Erfahrung und Qualifikationen
          </NavButton>
          <NavButton href="#leistungen">Leistungen</NavButton>
          <NavButton href="#kontakt-und-anfahrt">Kontakt und Anfahrt</NavButton>
          <Link href="#">
            <NavLogo
              alt="Logo der Physiotherapie Daniela Burkhardt"
              src="/logo.png"
              loading="lazy"
            />
          </Link>
        </Toolbar>
      </Container>
    </Nav>
    <Container maxWidth="lg">
      <Typography variant="h1">Daniela Burkhardt</Typography>
      <Typography variant="h2">Über mich</Typography>
    </Container>
  </>
);

export default Home;
