import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import { Search, Facebook, WhatsApp, YouTube } from "@material-ui/icons/";

const Header = () => {
  return (
    <HeaderWrap>
      <TopBar>
        <div className="container">
          <a href="https://google.com" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <div className="nav-elements">
            <div className="input-container">
              <input type="text" placeholder="Search" className="inpt" />
              <div className="search">
                <Search />
                <span>Search</span>
              </div>
            </div>
            <div className="offers">
              <a href="">Request Appointment</a>
              <a href="">Find a Doctor</a>
              <a href="">Find a Job</a>
              <a href="">Give New</a>
            </div>
            <div className="social">
              <div className="sign-in">user</div>
              <div className="languages">Lan</div>
              <ul>
                <li>
                  <a href="">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <WhatsApp />
                  </a>
                </li>
                <li>
                  <a href="">
                    <YouTube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TopBar>
      <BottomBar>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </BottomBar>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header``;

const TopBar = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    color: black;
    /* border: 1px solid black; */
  }
  a {
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

    & > .input-container {
      width: 24rem;
      border: 2px solid green;
      display: flex;
      justify-content: space-between;
      border-radius: 6px;
      font-size: 16px;
    }
    .inpt {
      height: 3rem;
      outline: none;
      border: none;
      display: inline-block;
      font-size: 16px;
      flex: 4;
      padding: 0 1rem;
      letter-spacing: 1px;
    }
    .search {
      display: inline-block;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: black;
      color: white;
      font-weight: 600;
      flex: 2;
      cursor: pointer;
    }
  }

  .social > ul {
    display: flex;
    justify-content: space-around;
    width: 5rem;
  }

  .social > ul > li {
    list-style-type: none;
  }

  img {
    height: auto;
    width: 8rem;
  }
`;

const BottomBar = styled.div`
  width: 100vw;
  min-height: 3rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  & > ul {
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
  }
`;

export default Header;
