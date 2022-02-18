import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Disease from "./components/Diseases";
import Service from "./components/Service";
import Tests from "./components/Tests";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <About />
      <Disease />
      <Service />
      <Tests />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;
