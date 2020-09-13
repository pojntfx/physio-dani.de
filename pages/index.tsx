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

const Focus = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const Highlight = styled(Focus)`
  color: ${({ theme }) => theme.typography.h2.color};
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

const SplitImageWrapper = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
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
        <SplitCollection>
          <Container>
            <RightSplit>
              <SplitText>
                <Typography variant="h2" gutterBottom>
                  Über mich
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Ich bin Physiotherapeutin und habe mein staatliches Examen
                  1994 in Schwenningen absolviert.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Ich bin 1972 in Forbach geboren und in Mitteltal im schönen
                  Schwarzwald aufgewachsen; mein Weg bis hierher war teils
                  holprig. Trotz der vielen Aufgaben mit meinen 4 wunderbaren
                  Kindern habe ich aber nie die Liebe zur Physiotherapie
                  verloren. Durch ständige Fortbildungen und treue Patienten,
                  konnte ich zum Glück immer meiner Berufung folgen.
                </Typography>
                <Typography variant="body1">
                  <Highlight>
                    Dankbar bin ich all den Menschen, die mir ermöglichen meinen
                    Traum der Eigenständigkeit weiter zu leben.
                  </Highlight>
                </Typography>
              </SplitText>
              <SplitImage alt="Behandlungszimmer" src="/room.jpg" />
            </RightSplit>
          </Container>

          <Container>
            <LeftSplit>
              <SplitImage
                alt="Beispiel einer Boeger-Behandlung"
                src="/boeger-2.jpg"
              />
              <SplitText>
                <Typography variant="body1" gutterBottom>
                  Als ich vor ein paar Jahren von einer Freundin/Kollegin auf
                  die <Highlight>Boegertherapie</Highlight> aufmerksam wurde,
                  wusste ich schnell: “Das ist voll mein Ding!”
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Das bisherige Wissen vereint und erweitert, ein Teil meiner
                  Gedanken endlich wissenschaftlich begründet. David Boeger hat
                  für mich persönlich eine revolutionäre Therapie entwickelt, in
                  einem perfekten Konstrukt bearbeitet und Kurse entstehen
                  lassen, die dieses großartige Wissen weiter geben. Mit großer
                  Freude wende ich diese speziellen Griffe an und staune
                  gelegentlich selbst über den schnellen/sensationellen Erfolg.
                </Typography>
                <Typography variant="body1">
                  <Focus>
                    Den Menschen als Ganzes zu sehen - den Körper, die Psyche
                    mit all den körperlichen und seelischen Narben, die so ein
                    Leben hinterlässt finde ich ungeheuer wichtig und dazu nun
                    eine Methode zu haben, dieses bearbeiten zu können, macht
                    für mich eine Physiotherapie komplett.
                  </Focus>
                </Typography>
              </SplitText>
            </LeftSplit>
          </Container>
        </SplitCollection>
      </PrimaryBox>
    </>
  );
};

const LeftSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: ${({ theme }) => theme.spacing(2)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr !important;
    grid-auto-rows: minmax(20rem, auto) !important;
  }
`;

const RightSplit = styled(LeftSplit)`
  grid-template-columns: 2fr 1fr;
`;

const SplitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SplitText = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(4)}px;

  &:last-child {
    padding-right: 0;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      padding: 0;
      padding-bottom: ${({ theme }) => theme.spacing(2)}px !important;
    }
  }

  &:first-child {
    padding-left: 0;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      padding: 0;
      padding-top: ${({ theme }) => theme.spacing(2)}px !important;
    }
  }
`;

const SplitCollection = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-gap: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export default Home;
