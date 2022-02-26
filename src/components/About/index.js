import React from "react";
import styled from "styled-components";
import logo from "../../assets/e-Medicine.Uz.png";

const About = () => {
  return (
    <AboutWrap>
      <section className="about">
        <div className="logo-image-big">
          <img src={logo} alt="" />
        </div>
        <div className="text-about">
          <h2>E-Medicine.Uz</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            itaque tempore tempora quis alias, doloribus maiores deserunt sit
            dolores ad commodi optio nesciunt placeat fuga pariatur magnam
            voluptatem non repudiandae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Assumenda, aliquam? Minima, mollitia atque!
            Perspiciatis, iusto voluptatem? Laboriosam nisi, delectus tenetur et
            impedit excepturi laudantium reprehenderit, molestias dolorum,
            tempora accusantium praesentium.
          </p>
        </div>
      </section>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  width: 100vw;
  height: 80%;
  background-color: rgb(250, 250, 250);

  .about {
    padding: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about > div {
    flex: 1;
    height: 70%;
  }

  .about > .logo-image-big {
    img {
      width: 80%;
      border: 5px solid #0060b1;
      border-radius: 50%;
    }
  }

  .about > .text-about {
    color: #0060b1;

    h2 {
      margin-bottom: 2rem;
      font-size: xx-large;
      letter-spacing: 3px;
      text-decoration: underline;
      cursor: pointer;
    }
    p {
      letter-spacing: 1px;

      line-height: 20px;
      font-size: 14px;
    }
  }
`;
export default About;
