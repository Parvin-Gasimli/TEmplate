import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  );
};

export default App;
