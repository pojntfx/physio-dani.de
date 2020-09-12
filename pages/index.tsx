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
  Grid,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const PrimaryBox = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
`;

const NavButton = styled(Button)`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  text-transform: ${({ theme }) => theme.typography.h1.textTransform};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const NavLogo = styled.img`
  max-height: ${({ theme }) => theme.spacing(14)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-height: ${({ theme }) => theme.spacing(8)}px;
  }

  margin-left: auto;
  cursor: pointer;
`;

const SliderListItemText = styled(ListItemText)`
  > span {
    font-family: ${({ theme }) => theme.typography.h1.fontFamily} !important;
    text-transform: ${({ theme }) => theme.typography.h1.textTransform};
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  }
`;

const Avatar = styled.img`
  max-width: 100%;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  margin: ${({ theme }) => theme.spacing(6)}px 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(7)}px;
    margin: 0;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const Name = styled(Typography)`
  padding: 0.25rem 0 0.5rem 0;
`;

const CTAs = styled.div`
  > *:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(2)}px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    }
  }

  margin-top: ${({ theme }) => theme.spacing(2)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(6)}px;
  }
`;

const SplitImage = styled.img`
  width: 100%;
  margin-bottom: -5px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const SplitText = styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const Home = () => {
  const theme = useTheme();
  const navMenuFullscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <>
      <PrimaryBox>
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
                      href="#mehr-ueber-mich"
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
                <NavButton href="#mehr-ueber-mich">Über mich</NavButton>
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
      </PrimaryBox>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item sm={12} md={4}>
            <Avatar
              alt="Portrait von Daniela Burkhardt"
              src="/portrait.jpg"
              loading="lazy"
            />
          </Grid>

          <Grid item sm={12} md={8}>
            <Typography variant="body1">
              Hallo! Willkommen bei der{" "}
              <Highlight>Praxis für Boeger-Therapie</Highlight> von
            </Typography>
            <Name variant="h1">Daniela Burkhardt</Name>
            <Typography variant="body2">
              Staatlich geprüfte Physiotherapeutin & Heilpraktikerin im Bereich
              Physiotherapie
            </Typography>
            <CTAs>
              <Button
                disableElevation
                variant="contained"
                color="primary"
                href="#mehr-ueber-mich"
              >
                Mehr über mich
              </Button>
              <Button
                disableElevation
                variant="contained"
                color="secondary"
                href="#kontakt-und-anfahrt"
              >
                Kontakt & Anfahrt
              </Button>
            </CTAs>
          </Grid>
        </Grid>
      </Container>

      <PrimaryBox component="section" id="mehr-ueber-mich">
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <SplitText item sm={12} md={8}>
              <Typography variant="h2" gutterBottom>
                Über mich
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ich bin Physiotherapeutin und habe mein staatliches Examen 1994
                in Schwenningen absolviert.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ich bin 1972 in Forbach geboren und in Mitteltal im schönen
                Schwarzwald aufgewachsen; mein Weg bis hierher war teils
                holprig. Trotz der vielen Aufgaben mit meinen 4 wunderbaren
                Kindern habe ich aber nie die Liebe zur Physiotherapie verloren.
                Durch ständige Fortbildungen und treue Patienten, konnte ich zum
                Glück immer meiner Berufung folgen.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Highlight>
                  Dankbar bin ich all den Menschen, die mir ermöglichen meinen
                  Traum der Eigenständigkeit weiter zu leben.
                </Highlight>
              </Typography>
            </SplitText>

            <Grid item sm={12} md={4}>
              <SplitImage alt="Behandlungszimmer" src="/room.jpg" />
            </Grid>
          </Grid>
        </Container>
      </PrimaryBox>
    </>
  );
};

export default Home;
