import React from "react";
import styled from "styled-components";

const Covid = () => {
  return (
    <CovidContainer>
      <h1>Covid News</h1>
      <div className="grid-container">
        <div className="grid-1"></div>
        <div className="grid-2"></div>
        <div className="grid-3"></div>
        <div className="grid-4"></div>
      </div>
    </CovidContainer>
  );
};

const CovidContainer = styled.div`
  border-top: 1px solid #0060b1;
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100%;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    g
  }
`;

export default Covid;
