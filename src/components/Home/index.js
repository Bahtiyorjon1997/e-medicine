import styled from "styled-components";
import React from "react";
import Img from "../../assets/Logo.png";
import Typical from "react-typical";

const Home = () => {
  return (
    <HomeWrap>
      <div className="home-container">
        <img src={Img} alt="" />
        <h1>
          We
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " are Experts!",
              1000,
              " are biggest medical database!",
              1000,
              " care about your health!",
              1000,
              " love you!",
              1000,
            ]}
          />
        </h1>
      </div>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 12rem);
  /* background-image: url();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative; */

  & > .home-container {
    width: 100%;
    height: 100%;
    background-color: #ffffff4e;
    text-align: center;
    padding: 1rem;

    h1 {
      margin-top: -1rem;
      font-size: 3rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    & > img {
      height: 13rem;
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

export default Home;
