import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
// import Disease from "./components/Diseases";
// import Service from "./components/Service";
// import Tests from "./components/Tests";

function App() {
  const [lan, setLan] = useState(true);

  const handleLanClick = () => {
    setLan(!lan);
  };
  return (
    <Wrapper>
      <Header lan={lan} handleLanClick={handleLanClick} />
      <Home lan={lan} handleLanClick={handleLanClick} />
      <About />
      {/* <Disease /> */}
      {/* <Service />
      <Tests />  */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins:wght@400;500;600;700;800;900&display=swap");

  font-family: "Poppins", sans-serif;
  background-color: rgb(250, 250, 250);
  height: 100vh;
  scroll-behavior: smooth;
`;

export default App;
