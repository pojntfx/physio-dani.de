import { Button } from "@material-ui/core";
import styled from "styled-components";

const TestButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Home = () => <TestButton>Hello, world!</TestButton>;

export default Home;
