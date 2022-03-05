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
  width: 100%;
  height: 80%;
`;
export default Services;
