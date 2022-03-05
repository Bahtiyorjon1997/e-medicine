import React from "react";
import styled from "styled-components";
import coronaImg from "../../assets/corona.jpg";

const Covid = () => {
  return (
    <CovidContainer>
      <div className="image"></div>
      <div className="text-container">
        <h2>
          Covid<br></br> Information
        </h2>
        <p>
          Find maps and charts tracking cases, deaths, and trends of COVID-19 in
          the United States, updated daily.
        </p>
        <button>Go to have more info</button>
      </div>
    </CovidContainer>
  );
};

const CovidContainer = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  width: 100%;
  height: 100%;
  color: #0060b1;
  border-top: 1px solid #0060b1;
  border-bottom: 1px solid #0060b1;

  .image {
    width: 60%;
    height: 100%;
    background-image: url(${coronaImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
  }

  .text-container {
    width: 50%;
    margin-left: -10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 5%;
    text-align: right;

    h2 {
      font-size: 4rem;
      margin-bottom: 5%;
      font-weight: 500;
      letter-spacing: 2px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 5%;
      letter-spacing: 1px;
      width: 80%;
    }
    button {
      padding: 1rem 1rem;
      width: 60%;
      font-size: 1rem;
      background-color: #0060b1;
      color: white;
      border-radius: 2rem;
      border: none;
      cursor: pointer;
      letter-spacing: 1px;
    }
  }
`;

export default Covid;
