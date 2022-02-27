import React from "react";
import styled from "styled-components";
import {
  FaStethoscope as MedTool,
  FaRegClipboard as Board,
  FaHandHoldingHeart as Heart,
} from "react-icons/fa";
import { ImAccessibility as HappyIcon } from "react-icons/im";

const About = () => {
  return (
    <AboutWrap>
      <section className="about">
        <div className="left-div">
          <h2 className="about-title">
            Why to choose <br />
            e-medicine.uz?
          </h2>
          <button className="btn-about">Learn more about e-medicine.uz</button>
        </div>
        <div className="right-div">
          <div className="one">
            <MedTool className="icon1" />
            <h3>Innovation</h3>
            <p>
              The million patients we treat each year prepares us to treat the
              one who matters most—you.
            </p>
          </div>
          <div className="two">
            <Board className="icon1" />
            <h3>The right answers</h3>
            <p>
              Count on our experts to deliver an accurate diagnosis and the
              right plan for you the first time.
            </p>
          </div>
          <div className="three">
            <Heart className="icon1" />
            <h3>You come first</h3>
            <p>
              Treatment at Mayo Clinic is a truly human experience. You’re cared
              for as a person first.
            </p>
          </div>
          <div className="four">
            <HappyIcon className="icon1" />
            <h3> Impact</h3>
            <p>
              All of our patient care, education and research are driven to make
              discoveries that can help heal you.
            </p>
          </div>
        </div>
      </section>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 6% 4%;
  background-color: rgb(250, 250, 250);

  .about {
    height: 100%;
    width: 100%;
    display: flex;
    color: #0060b1;

    & > .left-div {
      & > .about-title {
        font-size: 3rem;
        letter-spacing: 1.5px;
        font-weight: 500;
        margin-bottom: 2rem;
      }

      & > .btn-about {
        padding: 1.2rem 1.5rem;
        font-size: 16px;
        border-radius: 2rem;
        border: none;
        background-color: #0060b1;
        color: rgb(250, 250, 250);
        cursor: pointer;
      }
    }
  }

  .about > .left-div {
    flex: 2;
  }

  .about > .right-div {
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
  }

  .right-div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top: 1px solid blue;
  }

  .right-div > div > .icon1 {
    font-size: 2rem;
  }
  .right-div > div > h3 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1.5px;
  }

  .right-div > div > p {
    letter-spacing: 1px;
    line-height: 2rem;
  }

  .right-div > .one {
  }
`;
export default About;
