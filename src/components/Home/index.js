import styled from "styled-components";
import React from "react";
import bgImg from "../../assets/online-med.png";
import Img from "../../assets/e-Medicine.UzHome.png";
import Typical from "react-typical";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Home = ({ lan, handleLanClick }) => {
  return (
    <HomeWrap id="home">
      <div className="home-container">
        <img src={Img} alt="" />
        <h1>
          {lan ? "Biz" : "We"}
          {lan ? (
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " Sizni Qutlaymiz!",
                2000,
                " Expertlardirmiz!",
                2000,
                " Eng Yirik Data Base miz!",
                2000,
                " Siz haqingizda Qayg'uramiz",
                2000,
                "Sizni Yaxshi Ko'ramiz!",
                2000,
              ]}
            />
          ) : (
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "lcome to e-Medicine.Uz!",
                2000,
                " are Experts!",
                2000,
                " are biggest medical database!",
                2000,
                " care about your health!",
                2000,
                " love you!",
                2000,
              ]}
            />
          )}
        </h1>
        <div id="quote">
          <p className="info">
            {lan
              ? "Kasallikni davolagandan uni oldini olgan afzaldir!"
              : "Therefore in Medicine We ought to know the causes of sickness and health!"}
          </p>
          <p id="author">
            <i>- {lan ? "Ibn Sino" : "Avicena"}</i>
          </p>
        </div>
        <div className="offers">
          <div className="offer">
            {lan ? "Kasallik Izlash" : "Find a Disease"}
            <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
          <div className="offer">
            {lan ? "Dori izlash" : "Find a Parmacy"}
            <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
          <div className="offer">
            {lan ? "Shifokor izlash" : "Find a Doctor"}
            <AiOutlineArrowRight class="short-icon" />
            <BsArrowRight class="longer-icon" />
          </div>
        </div>
      </div>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  width: 100vw;
  height: calc(100% - 18rem);
  margin-bottom: 2.7rem;
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
      font-size: 3.5rem;
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
        transform: scale(1.1);

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
