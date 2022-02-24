import styled from "styled-components";
import React from "react";
import bgImg from "../../assets/online-med.png";
import Img from "../../assets/e-Medicine.UzHome.png";
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
              "lcome to e-Medicine.Uz!",
              1000,
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
        <p className="info">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "We aim to increase people's overall awareness about typical illnesses and medicine!",
              100,
            ]}
          />
        </p>
      </div>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 18rem);
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #004175;

  & > .home-container {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 255, 0.16), #000000ba);
    text-align: center;
    color: white;
    padding: 1rem;
    z-index: 100;

    h1 {
      font-family: "Courier Prime", monospace;
      margin-top: -1.5rem;
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    p.info {
      margin: 1rem 3rem;
      font-size: 25px;
    }

    & > img {
      height: 15rem;
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

export default Home;
