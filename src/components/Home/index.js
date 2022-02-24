import styled from "styled-components";
import React from "react";
import bgImg from "../../assets/online-med.png";
import Img from "../../assets/e-Medicine.UzHome.png";
import Typical from "react-typical";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <HomeWrap id="home">
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
        <div id="quote">
          <p className="info">
            Therefore in Medicine We ought to know the causes of sickness and
            health!
          </p>
          <p id="author">
            <i>- Avicenna</i>
          </p>
        </div>
        <div className="offers">
          <div className="offer">
            Find a disease <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
          <div className="offer">
            Find a pharmacy <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
          <div className="offer">
            Find a doctor <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
        </div>
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
    position: relative;

    h1 {
      font-family: "Courier Prime", monospace;
      margin-top: -1.5rem;
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    #quote {
      width: 50%;
      margin: 1rem auto;
      display: flex;
      flex-direction: column;
    }

    p.info {
      margin: 1rem auto;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 2px;
    }
    #author {
      text-align: right;
    }

    .offers {
      width: 70%;
      height: auto;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: -2.7rem;
      left: 15%;
      font-size: 1.5rem;
      border-radius: 5px;

      & > .offer {
        padding: 2rem;
        background-color: #004175;
        text-align: center;
        width: ${100 / 3}%;
        cursor: pointer;
        letter-spacing: 1px;
        background: linear-gradient(145deg, #003b69, #00467d);
        border: 2px solid #004175;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.2s;

        .longer-icon {
          display: none;
        }
      }

      & > .offer:hover {
        /* border: 2px solid #fff; */
        transition: 0.2s;
        text-decoration: underline;

        .longer-icon {
          display: initial;
          transition: 5s;
        }
        .short-icon {
          display: none;
          transition: 5s;
        }
      }
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
