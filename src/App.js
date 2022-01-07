import Header from "./components/Header";
import BgVideo from "./components/BgVideo";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <FrontWrap>
        <BgVideo />
        <Header />
      </FrontWrap>
    </div>
  );
}

const FrontWrap = styled.div`
  height: auto;
  min-height: 100vh;
`;

export default App;
