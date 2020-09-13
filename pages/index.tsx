import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Slide,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close, Menu } from "@material-ui/icons";
import CookieConsent from "material-ui-cookie-consent";
import NextLink from "next/link";
import { forwardRef, useState } from "react";
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

const InvertedSplit = styled(LeftSplit)`
  min-height: 30rem;
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

const InvertedSplitText = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(4)}px;
  align-items: center;
`;

const SplitCollection = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-gap: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const EventList = styled.div`
  display: grid;
  grid-template-areas:
    "e1a e1a e1a e1b e1c e1c e1c"
    "e2a e2a e2a e2b e2c e2c e2c"
    "e3a e3a e3a e3b e3c e3c e3c"
    "e4a e4a e4a e4b e4c e4c e4c"
    "e5a e5a e5a e5b e5c e5c e5c"
    "e6a e6a e6a e6b e6c e6c e6c"
    "e7a e7a e7a e7b e7c e7c e7c"
    "e8a e8a e8a e8b e8c e8c e8c"
    "e9a e9a e9a e9b e9c e9c e9c";
  grid-row-gap: ${({ theme }) => theme.spacing(3)}px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-areas:
      "e1a e1a e1a e1b"
      "e2b e2c e2c e2c"
      "e3a e3a e3a e3b"
      "e4b e4c e4c e4c"
      "e5a e5a e5a e5b"
      "e6b e6c e6c e6c"
      "e7a e7a e7a e7b"
      "e8b e8c e8c e8c"
      "e9a e9a e9a e9b";
  }
`;

const Event = styled(Box)`
  color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.palette.text.primary};
`;

const EventPrimary = styled(Event)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: #ffffff;
`;

const DatePoint = styled(Event)`
  padding: ${({ theme }) => theme.spacing(3)}px;
  > * {
    font-weight: ${({ theme }) => theme.typography.fontWeightBold} !important;
  }
`;

const EventRight = styled(DatePoint)`
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  background: ${({ theme }) => theme.palette.text.primary};
`;

const EventRightPrimary = styled(EventRight)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: #ffffff;
`;

const EventLeft = styled(DatePoint)`
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
`;

const SplitIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const theme = useTheme();
  const navMenuFullscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [imprintOpen, setImprintOpen] = useState(false);

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
            <NextLink href="#">
              <NavLogo
                alt="Logo der Physiotherapie Daniela Burkhardt"
                src="/logo.png"
                loading="lazy"
              />
            </NextLink>
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
                src="/boeger.jpg"
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

      <PrimaryBox component="section" id="erfahrung-und-qualifikationen">
        <SplitCollection>
          <Container maxWidth="lg">
            <Typography variant="h2">Erfahrung und Qualifikationen</Typography>
          </Container>

          <Container maxWidth="lg">
            <Typography variant="body1">
              Nach der Geburt meiner Tochter 2000, habe ich meine Zulassung
              abgegeben und konnte weiterhin stundenweise bei meiner lieben
              Kollegin Martina (Lorenz ) Finkbeiner behandeln. Seit 2006 bin
              zusätzlich selbstständig tätig in eigenen Räumen. So kommen doch
              schon einige Jahre Berufserfahrung zusammen, als Physiotherapeutin
              und sektorale Heilpraktikerin im Bereich der Physiotherapie.
            </Typography>
          </Container>

          <Container maxWidth="lg">
            <EventList>
              <EventPrimary style={{ gridArea: "e1a" }}>
                <Typography variant="body1">
                  Ausbildung zum <Focus>Removementcoach</Focus> und zusätzliche
                  BT Kurse im Hinblick auf die Prüfung zum Diplom zur
                  Boegertherapeutin in Romanshorn/Schweiz
                </Typography>
              </EventPrimary>
              <EventRightPrimary style={{ gridArea: "e1b" }}>
                <Typography variant="body1">Heute</Typography>
              </EventRightPrimary>

              <Event style={{ gridArea: "e2c" }}>
                <Typography variant="body1">
                  Prüfung zur zertifizierten <Focus>Boegertherapeutin</Focus> in
                  Romanshorn/Schweiz
                </Typography>
              </Event>
              <EventLeft style={{ gridArea: "e2b" }}>
                <Typography variant="body1">2018</Typography>
              </EventLeft>

              <Event style={{ gridArea: "e3a" }}>
                <Typography variant="body1">
                  Prüfung zur <Focus>sektoralen Heilpraktikerin</Focus> im
                  Bereich der Physiotherapie in Karlsruhe
                </Typography>
              </Event>
              <EventRight style={{ gridArea: "e3b" }}>
                <Typography variant="body1">2012</Typography>
              </EventRight>

              <Event style={{ gridArea: "e4c" }}>
                <Typography variant="body1">
                  Kurs zum <Focus>Kinesiotaping</Focus> in Freiburg
                </Typography>
              </Event>
              <EventLeft style={{ gridArea: "e4b" }}>
                <Typography variant="body1">2009</Typography>
              </EventLeft>

              <Event style={{ gridArea: "e5a" }}>
                <Typography variant="body1">
                  Prüfung zur{" "}
                  <Focus>Lymphdrainage und komplexe Entstauungstherapie</Focus>{" "}
                  und Ausbildung zur manuellen Gelenksdrainage in Offenburg
                </Typography>
              </Event>
              <EventRight style={{ gridArea: "e5b" }}>
                <Typography variant="body1">2000</Typography>
              </EventRight>

              <Event style={{ gridArea: "e6c" }}>
                <Typography variant="body1">
                  <Focus>Selbstständige Tätigkeit als Physiotherapeutin</Focus>{" "}
                  in der Praxisgemeinschaft Lorenz Frey Glaser in
                  Klosterreichenbach
                </Typography>
              </Event>
              <EventLeft style={{ gridArea: "e6b" }}>
                <Typography variant="body1">
                  1998-
                  <br />
                  2000
                </Typography>
              </EventLeft>

              <Event style={{ gridArea: "e7a" }}>
                <Typography variant="body1">
                  Prüfung zur{" "}
                  <Focus>Brüggertherapeutin und Rückenschullehrerin</Focus> in
                  Murnau
                  <br />
                  Prüfung zur <Focus>Therapeutin für Manuelle Medizin</Focus> in
                  Isny/Neutrauchburg
                </Typography>
              </Event>
              <EventRight style={{ gridArea: "e7b" }}>
                <Typography variant="body1">1999</Typography>
              </EventRight>

              <Event style={{ gridArea: "e8c" }}>
                <Typography variant="body1">
                  Teil des Anerkennungspraktikums, dann angestellt als
                  Physiotherapeutin und später als{" "}
                  <Focus>leitende Physiotherapeutin</Focus>
                  tätig in der Kurklinik Sonnenhof in Lützenhardt
                </Typography>
              </Event>
              <EventLeft style={{ gridArea: "e8b" }}>
                <Typography variant="body1">
                  1995-
                  <br />
                  1998
                </Typography>
              </EventLeft>

              <Event style={{ gridArea: "e9a" }}>
                <Typography variant="body1">
                  Teil des <Focus>Anerkennungspraktikums</Focus> in der
                  neurologischen Klinik Selzer in Schönmünzach
                </Typography>
              </Event>
              <EventRight style={{ gridArea: "e9b" }}>
                <Typography variant="body1">
                  1994-
                  <br />
                  1995
                </Typography>
              </EventRight>
            </EventList>
          </Container>
        </SplitCollection>
      </PrimaryBox>

      <PrimaryBox component="section" id="leistungen">
        <SplitCollection>
          <Container maxWidth="lg">
            <Typography variant="h2">Leistungen</Typography>
          </Container>

          <Container>
            <RightSplit>
              <SplitText>
                <Typography variant="h3" gutterBottom>
                  Boeger-Therapie
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Entzündungsbedingte Verklebungen, sichtbare und unsichtbare
                  Narben, blockieren den natürlichen Fluss, verringern die
                  Beweglichkeit und schränken gesunde Körperfunktionen ein.
                  Störungen im Systemkreislauf können sich u.a. äußern als:
                </Typography>

                <ul>
                  <li>Verspannungen der Muskulatur</li>
                  <li>Schmerzen aller Art</li>
                  <li>Sensibilitätsstörungen der Nerven</li>
                  <li>Verzögerte Heilungsprozesse</li>
                  <li>Eingeschränkte Blutzirkulation</li>
                  <li>Abwehrschwäche Ödembildung durch Lymphstau</li>
                  <li>Eingeschränkte Organtätigkeit</li>
                  <li>Veränderte Verdauung</li>
                </ul>

                <Typography variant="body1">
                  Nachdem mit der von David Boeger entwickelten Technik
                  sichtbare und unsichtbare Narben gelöst sind, kann sich der
                  Patient aus seiner Schonhaltung befreien. Nach wenigen Minuten
                  ist bereits nachprüfbar, ob der gewählte Weg den gewünschten
                  Erfolg bringt. Die Beweglichkeit ist erweitert, die Schmerzen
                  reduziert.
                </Typography>

                <Typography variant="body1">
                  <Highlight>
                    "Ich fühl mich gleich viel wohler", "Jetzt kann ich
                    aufatmen", "Das ist ja unglaublich", "Die Narbe sieht nach
                    30 Jahren besser aus", "Das ist ja der Hammer, ewig mach ich
                    schon rum", "Ich konnte seit Monaten nicht mehr so gut
                    Treppen laufen!" ... freue ich mich zu hören.
                  </Highlight>
                </Typography>
              </SplitText>
              <SplitImage
                alt="Detailaufnahme der Massage einer Hand"
                src="/massage-hand.jpg"
              />
            </RightSplit>
          </Container>

          <Container>
            <LeftSplit>
              <SplitImage
                alt="Beispiel einer Removement-Behandlung"
                src="/removement.jpg"
              />
              <SplitText>
                <Typography variant="h3" gutterBottom>
                  REMovement
                </Typography>
                <Typography variant="body1" gutterBottom>
                  REMovement ist eine simple Technik zur Reduktion der Muskel
                  und Gewebespannung. Der Begriff setzt sich aus der REM Phase,
                  wie wir sie vom Schlaf kennen und dem engl. Wort „movement“
                  für Bewegung zusammen. Durch die bewusste bilaterale
                  Hemisphärenstimulation kann der Sympathikotonus in kurzer Zeit
                  signifikant gesenkt werden. Auch belastende emotionale
                  Zustände können aufgelöst werden.
                </Typography>
                <Typography variant="body1">
                  <Focus>
                    "Das schlägt mir auf den Magen", "Das geht mir an die
                    Nieren", "Gelähmt vor Angst", "Das sitzt mir im Genick",
                    "Ich kann s nicht mehr hören!" ... unsere Umgangssprache
                    weiß, wo das Problem liegt und REMovement ist ein tolles
                    Instrument, um diese Gedankenmuster zu
                    bearbeiten/aufzulösen.
                  </Focus>
                </Typography>
              </SplitText>
            </LeftSplit>
          </Container>

          <Container>
            <RightSplit>
              <SplitText>
                <Typography variant="h3" gutterBottom>
                  iXpending
                </Typography>

                <Typography variant="body1" gutterBottom>
                  Solange Organ und Muskelfaszien gestaut sind, ist es mit der
                  Beweglichkeit nicht weit her. iXpending beinhaltet Übungen zur
                  Faszienentstauung und mobilisation , sowie die Anleitung zur
                  Eigenmobilisation von Organen.
                </Typography>

                <Typography variant="body1">
                  Haltungsschulung und für jeden praktikable Kräftigungs und
                  Dehnungsübungen machen uns mobiler, schmerzfreier und man
                  fühlt sich einfach deutlich wohler.
                </Typography>

                <Typography variant="body1">
                  <Highlight>iXpending BEWEGT!</Highlight>
                </Typography>
              </SplitText>
              <SplitImage
                alt="Detailaufnahme einer iXpending-Broschüre"
                src="/ixpending.jpg"
              />
            </RightSplit>
          </Container>
        </SplitCollection>
      </PrimaryBox>

      <PrimaryBox component="section" id="kontakt-und-anfahrt">
        <SplitCollection>
          <Container>
            <Typography variant="h2">Kontakt und Anfahrt</Typography>
          </Container>

          <Container>
            <InvertedSplit>
              <SplitIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.4867266340975!2d8.361571315894011!3d48.50473353349582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797315d3c67d9a5%3A0xc85b9643ed63101b!2sH%C3%B6ferk%C3%B6pfleweg%2042%2C%2072270%20Baiersbronn!5e0!3m2!1sen!2sde!4v1599966559126!5m2!1sen!2sde"
                style={{ border: 0 }}
                aria-hidden="false"
              ></SplitIframe>

              <InvertedSplitText>
                <div>
                  <Typography variant="body1" gutterBottom>
                    <Focus>Höferköpfleweg 42</Focus>
                    <br />
                    72270 Baiersbronn
                  </Typography>
                  <Typography variant="body1">
                    <Focus>Email:</Focus>{" "}
                    <Link href="mailto:physio-dani@web.de">
                      physio-dani@web.de
                    </Link>
                    <br />
                    <Focus>Telefon:</Focus>{" "}
                    <Link href="tel:07442 50964">07442 50964</Link>
                    <br />
                    <Focus>Mobil:</Focus>{" "}
                    <Link href="tel:0170 4746795">0170 4746795</Link>
                  </Typography>
                </div>
              </InvertedSplitText>
            </InvertedSplit>
          </Container>
        </SplitCollection>
      </PrimaryBox>

      <PrimaryBox>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <>
              <NavButton href="https://github.com/pojntfx/physio-dani.de">
                © 2020 Daniela Burkhardt
              </NavButton>
              <NavButton onClick={() => setImprintOpen(true)}>
                Impressum und Datenschutz
              </NavButton>

              <Dialog
                fullScreen
                open={imprintOpen}
                onClose={() => setImprintOpen(false)}
                TransitionComponent={Transition}
              >
                <ImprintAppBar>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={() => setImprintOpen(false)}
                      aria-label="close"
                    >
                      <Close />
                    </IconButton>
                    <ImprintHeader variant="h6">
                      Impressum und Datenschutz
                    </ImprintHeader>
                  </Toolbar>
                </ImprintAppBar>
                <ImprintContainer>
                  <h1>Impressum</h1>
                  <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                  <p>
                    Daniela Burkhardt
                    <br />
                    H&ouml;ferk&ouml;pfleweg 42
                    <br />
                    72270 Baiersbronn
                  </p>
                  <h2>Kontakt</h2>
                  <p>
                    Telefon: 07442 50964
                    <br />
                    Telefax: 0170 4746795
                    <br />
                    E-Mail: physio-dani@web.de
                  </p>
                  <h2>
                    Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                  </h2>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                  <h3>Haftung f&uuml;r Inhalte</h3>{" "}
                  <p>
                    Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1
                    TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis
                    10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, &uuml;bermittelte oder gespeicherte fremde
                    Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
                    forschen, die auf eine rechtswidrige T&auml;tigkeit
                    hinweisen.
                  </p>{" "}
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                    unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                  </p>{" "}
                  <h3>Haftung f&uuml;r Links</h3>{" "}
                  <p>
                    Unser Angebot enth&auml;lt Links zu externen Websites
                    Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch
                    keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder
                    Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                    wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                    Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>{" "}
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                    ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend
                    entfernen.
                  </p>{" "}
                  <h3>Urheberrecht</h3>{" "}
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede
                    Art der Verwertung au&szlig;erhalb der Grenzen des
                    Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung
                    des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                    dieser Seite sind nur f&uuml;r den privaten, nicht
                    kommerziellen Gebrauch gestattet.
                  </p>{" "}
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                  </p>
                  <p>
                    Quelle:{" "}
                    <Link href="https://www.e-recht24.de">eRecht24</Link>
                  </p>
                </ImprintContainer>
              </Dialog>
            </>
            <NextLink href="#">
              <NavLogo
                alt="Logo der Physiotherapie Daniela Burkhardt"
                src="/logo.png"
                loading="lazy"
              />
            </NextLink>
          </Toolbar>
        </Container>
      </PrimaryBox>

      <CookieConsent
        cookieName="cookieConsent"
        message={`Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung am Ende der Seite. Klicken Sie auf "Accept", um Cookies zu akzeptieren und direkt unsere Website besuchen zu können.`}
      />
    </>
  );
};

const ImprintAppBar = styled(AppBar)`
  position: relative;
`;

const ImprintHeader = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const ImprintContainer = styled(Container)`
  font-style: normal;
`;

export default Home;
