import React from "react";
import styled from "styled-components";
import { data } from "./data";
import buble from "../../assets/sounds/buble.wav";
import useSound from "use-sound";
import { BsArrowRight as Arrow } from "react-icons/bs";

const Disease = () => {
  const [play] = useSound(buble);
  return (
    <DiseaseWrap>
      <section className="disease">
        <div className="disease-left">
          <h2>Find Diseases & Conditions</h2>
          <p>Find a disease or condition by its first letter</p>
        </div>
        <div className="disease-middle">
          {data.map((item) => {
            return (
              <a onClick={play} href={item.link}>
                {item.char}
              </a>
            );
          })}
        </div>
        <div className="disease-right">
          <h3>Check Your Symptoms to find a possible cause</h3>
          <div className="symptom">
            <a href="https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075">
              Try Symptom Checker
            </a>
            <Arrow />
          </div>
          <h3>Featured Topics</h3>
          <div className="most-visited">
            <span>Breast Cancer</span>
            <span> Cancer</span>
            <span>Breast Cancer</span>
            <span> Cancer</span>
            <span>Breast Cancer</span>
            <span> Cancer</span>
            <span>Breast Cancer</span>
            <span> Cancer</span>
            <span>Breast Cancer</span>
          </div>
          <div className="btm symptom">
            <a href="https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075">
              See more Diseases and Conditions
            </a>
            <Arrow />
          </div>
        </div>
      </section>
    </DiseaseWrap>
  );
};
const DiseaseWrap = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 6% 4%;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid #0060b1;

  .disease {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 5rem;
  }

  .disease > .disease-right {
    flex: 5;
    color: #0060b1;

    h3 {
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 1.5px;
      padding-bottom: 1rem;
      border-bottom: 1px solid #0060b1;
    }

    .symptom {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      margin-bottom: 2rem;

      & > a {
        text-decoration: none;
      }
    }

    .most-visited {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1rem 0;
      padding: 0.5rem 0;
    }

    .btm {
      border-top: 1px solid #0060b1;
    }

    .most-visited > span {
      padding: 0.5rem 1rem;
      border-radius: 3rem;
      border: 1px solid #0060b1;
      cursor: pointer;
    }

    .most-visited > span:hover {
      background-color: #0060b1;
      color: rgb(250, 250, 250);
    }
  }

  .disease > .disease-left {
    flex: 4;

    & > h2 {
      font-size: 3rem;
      letter-spacing: 1.5px;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #0060b1;
      font-weight: 500;
    }

    & > p {
      font-size: 16px;
      border: none;
      letter-spacing: 0.5px;
      color: #0060b1;
    }
  }

  .disease > .disease-middle {
    flex: 5;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-bottom: 13rem;

    & > a {
      width: 3rem;
      height: 3rem;
      font-size: 1.3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      outline: none;
      background: #fafafa;
      background: #fafafa;
      box-shadow: inset 6px 6px 12px #e9e9e9, inset -6px -6px 12px #ffffff;
      transition: 0.6s;
      color: #0060b1;
    }

    & > a:hover {
      background-color: rgb(250, 250, 250);
      background: linear-gradient(145deg, #ffffff, #e1e1e1);
      box-shadow: 8px 8px 16px #b9b9b9, -8px -8px 16px #ffffff;
      transition: 0.6s;
      transform: scale(1.05);
    }
  }
`;

export default Disease;
