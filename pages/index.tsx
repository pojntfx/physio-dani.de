import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
`;

const NavButton = styled(Button)`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  text-transform: ${({ theme }) => theme.typography.h1.textTransform};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  font-size: 1.05rem;
`;

const NavLogo = styled.img`
  max-height: ${({ theme }) => theme.spacing(14)}px;
  margin-left: auto;
  cursor: pointer;
`;

const SliderListItemText = styled(ListItemText)`
  > span {
    font-family: ${({ theme }) => theme.typography.h1.fontFamily} !important;
    text-transform: ${({ theme }) => theme.typography.h1.textTransform};
    font-size: 1.05rem;
  }
`;

const Home = () => {
  const theme = useTheme();
  const navMenuFullscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {navMenuFullscreen ? (
              <>
                <IconButton onClick={() => setNavMenuOpen(true)}>
                  <Menu />
                </IconButton>

                <SwipeableDrawer
                  open={navMenuOpen}
                  onClose={() => setNavMenuOpen(false)}
                  onOpen={() => setNavMenuOpen(true)}
                >
                  <List component="nav">
                    <ListItem
                      button
                      component="a"
                      href="#ueber-mich"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      <SliderListItemText>Über mich</SliderListItemText>
                    </ListItem>
                    <ListItem
                      button
                      component="a"
                      href="#erfahrung-und-qualifikationen"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      <SliderListItemText>
                        Erfahrung und Qualifikationen
                      </SliderListItemText>
                    </ListItem>
                    <ListItem
                      button
                      component="a"
                      href="#leistungen"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      <SliderListItemText>Leistungen</SliderListItemText>
                    </ListItem>
                    <ListItem
                      button
                      component="a"
                      href="#kontakt-und-anfahrt"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      <SliderListItemText>
                        Kontakt und Anfahrt
                      </SliderListItemText>
                    </ListItem>
                  </List>
                </SwipeableDrawer>
              </>
            ) : (
              <>
                <NavButton href="#ueber-mich">Über mich</NavButton>
                <NavButton href="#erfahrung-und-qualifikationen">
                  Erfahrung und Qualifikationen
                </NavButton>
                <NavButton href="#leistungen">Leistungen</NavButton>
                <NavButton href="#kontakt-und-anfahrt">
                  Kontakt und Anfahrt
                </NavButton>
              </>
            )}
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
};

export default Home;
