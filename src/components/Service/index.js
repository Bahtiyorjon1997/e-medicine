import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesWrap>
      <div className="successer"></div>
      <div className="tests">
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
      </div>
    </ServicesWrap>
  );
};

const ServicesWrap = styled.div`
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100%;
`;
export default Services;
