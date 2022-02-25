import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/e-Medicine.Uz.png";
import { Search } from "@material-ui/icons/";
import { BsPerson as Person } from "react-icons/bs";
import { AiOutlineBulb as On, AiFillBulb as Off } from "react-icons/ai";

const Header = () => {
  const [bulbOn, setBulbOn] = useState(true);
  const [lan, setLan] = useState(true);

  const handleLanClick = () => {
    setLan(!lan);
  };

  const handleClick = () => {
    setBulbOn(!bulbOn);
  };
  return (
    <HeaderWrap>
      <TopBar>
        <div className="container">
          <div className="navbar-brand">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav-elements">
            <div className="input-container">
              <input type="text" placeholder="Search" className="inpt" />
              <div className="search">
                <Search />
                <span>Search</span>
              </div>
            </div>
            <div className="sign-in">
              <div className="languages icon">
                <Person class="avatar" />
              </div>
              <div className="languages" onClick={handleLanClick}>
                {lan ? "EN" : "DE"}
              </div>
              <div className="languages" onClick={handleClick}>
                {bulbOn ? <Off className="icon" /> : <On className="icon" />}
              </div>
            </div>
          </div>
        </div>
      </TopBar>
      <BottomBar>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Diseases</li>
          <li>Tests</li>
          <li>Contacts</li>
        </ul>
      </BottomBar>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;1,400;1,700&display=swap");
`;

const TopBar = styled.div`
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
    padding: 0 6rem;
    color: black;
    position: relative;
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
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* input */
    & > .input-container {
      width: 20rem;
      border: 2px solid #0060b1;
      display: flex;
      justify-content: space-between;
      border-radius: 3px;
      font-size: 16px;
      color: #0060b1;
      margin-left: 6%;
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
    .sign-in {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
`;

const BottomBar = styled.div`
  width: 100vw;
  min-height: 3rem;
  background-color: rgb(250, 250, 250);
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
