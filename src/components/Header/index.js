import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/e-Medicine.Uz.png";
import { Search } from "@material-ui/icons/";
import { BsPerson as Person } from "react-icons/bs";
import { AiOutlineBulb as On, AiFillBulb as Off } from "react-icons/ai";

const Header = ({ lan, handleLanClick }) => {
  const [bulbOn, setBulbOn] = useState(true);

  const handleClick = () => {
    setBulbOn(!bulbOn);
  };
  return (
    <HeaderWrap className={bulbOn ? "dark-bg" : "light-bg"}>
      <TopBar>
        <div className="container">
          <div className="navbar-brand">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav-elements">
            <div className="input-container">
              <input
                type="text"
                placeholder={lan ? "Qidirish" : "Search"}
                className="inpt"
              />
              <div className="search">
                <Search />
                <span>{lan ? "Qidirish" : "Search"}</span>
              </div>
            </div>
          </div>
          <div className="sign-in">
            <div className="languages icon">
              <Person class="avatar" />
            </div>
            <div className="languages" onClick={handleLanClick}>
              {!lan ? "EN" : "UZ"}
            </div>
            <div className="languages" onClick={handleClick}>
              {bulbOn ? <Off className="icon" /> : <On className="icon" />}
            </div>
          </div>
        </div>
      </TopBar>
      <BottomBar className={bulbOn ? "dark-bg" : "light-bg"}>
        <ul>
          <li>{lan ? "Sog'lik to'grisida" : "Helth  Information"}</li>
          <li>
            {lan ? "Meditsina  Hodimlariga" : "For Medical  Professionals"}
          </li>
          <li>{lan ? "Bizning Hizmatlar" : "Our Services"}</li>
          <li>{lan ? "Kasalliklar" : "Diseases & Illnesses"}</li>
          <li>{lan ? "Testlar" : "Tests"}</li>
          <li>{lan ? "Aloqa" : "Contacts"}</li>
        </ul>
      </BottomBar>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;1,400;1,700&display=swap");

  .dark {
    background-color: #0060b1 !important;
  }

  .light {
    background-color: #fff !important;
  }
`;

const TopBar = styled.div`
  .dark {
    background-color: #0060b1 !important;
  }

  .light {
    background-color: #fff !important;
  }
  /* logo image */
  img {
    height: auto;
    width: 8rem;
  }

  /* top-bar container */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88%;
    margin: 0 auto;
    color: black;
    position: relative;

    .sign-in {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid white;

      .languages {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px double #0060b1;
        border-radius: 50%;
        color: #0060b1;
        margin: 5px;
        cursor: pointer;

        & > select {
          outline: 0;
          border: none;
        }

        .icon {
          font-size: 1.4rem;
        }
      }
    }
  }

  /*  */
  .navbar-brand {
    display: flex;
    align-items: left;
    text-decoration: none;
    flex: 1;
    margin-left: -1.5rem;
  }

  .nav-elements {
    flex: 2.7;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* input */
    & > .input-container {
      width: 50%;
      border: 2px solid #0060b1;
      display: flex;
      justify-content: space-between;
      border-radius: 3px;
      font-size: 16px;
      color: #0060b1;
      position: absolute;
      left: 25%;
    }
    .inpt {
      height: 2.5rem;
      outline: none;
      border: none;
      display: inline-block;
      font-size: 16px;
      flex: 3;
      padding: 0 1rem;
      letter-spacing: 1px;
    }

    .search {
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0060b1;
      color: white;
      font-weight: 600;
      flex: 1.5;
      cursor: pointer;

      span {
        margin-left: 2%;
      }
    }
  }
`;

const BottomBar = styled.div`
  .dark {
    background-color: #0060b1 !important;
  }

  .light {
    background-color: #fff !important;
  }

  width: 92%;
  margin: 0 auto;
  min-height: 3rem;
  /* background-color: rgb(250, 250, 250); */
  color: #0060b1;
  font-family: "Courier Prime", monospace;
  font-weight: 700 !important;

  & > ul {
    display: flex;
    justify-content: center;
    list-style-type: none;

    & > li {
      font-size: 1.2rem;
      padding: 1% 3%;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 0.2s;
    }

    & > li:hover {
      background-color: rgb(250, 250, 250);
      color: #2895f1;
      transition: 0.2s;
    }
  }
`;

export default Header;
