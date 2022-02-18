import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Wrapper>
      {/* header */}
      <Header />
      {/* home */}
      <Home />
      {/* about */}
      {/* diseases */}
      {/* services */}
      {/* tests */}
      {/* footer */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;
