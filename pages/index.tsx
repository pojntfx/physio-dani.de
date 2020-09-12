import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const TestButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Home = () => (
  <>
    <Typography variant="h1">DANIELA BURKHARDT</Typography>
    <Typography variant="h2">ÜbER MICH</Typography>
    <TestButton>Hello, world!</TestButton>
  </>
);

export default Home;
