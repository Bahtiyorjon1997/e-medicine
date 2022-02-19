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
      {/* <About />
      <Disease />
      <Service />
      <Tests /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");

  font-family: "Poppins", sans-serif;
  background-color: rgb(250, 250, 250);
  height: 100vh;
`;

export default App;
