import React from "react";
import styled from "styled-components";

const Disease = () => {
  return (
    <DiseaseWrap>
      <section className="disease">
        <div className="disease-left">
          <h3>Find Diseases & Conditions</h3>
          <p>Find a disease or condition by its first letter</p>
        </div>
        <div className="disease-middle">
          <h3>Find Diseases & Conditions</h3>
          <p>Find a disease or condition by its first letter</p>
        </div>
        <div className="disease-right">
          <h3>Find Diseases & Conditions</h3>
          <p>Find a disease or condition by its first letter</p>
        </div>
      </section>
    </DiseaseWrap>
  );
};
const DiseaseWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 6% 4%;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid #0060b1;

  .disease {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 5rem;
  }

  .disease > div {
    border: 1px solid blue;
  }

  .disease > .disease-right {
    flex: 4;
  }

  .disease > .disease-left {
    flex: 4;

    & > h3 {
      font-size: 3rem;
      letter-spacing: 2px;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #0060b1;
      font-weight: 500;
    }

    & > p {
    }
  }

  .disease > .disease-middle {
    flex: 5;
  }
`;

export default Disease;
