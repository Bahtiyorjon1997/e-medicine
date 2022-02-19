import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import { Search, Facebook, WhatsApp, YouTube } from "@material-ui/icons/";

const Header = () => {
  return (
    <HeaderWrap>
      <TopBar>
        <div className="container">
          <div className="navbar-brand">
            <a href="#">
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

const HeaderWrap = styled.header``;

const TopBar = styled.div`
  img {
    height: auto;
    width: 8rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    color: black;
    /* & > div {
      border: 1px solid black;
    } */
  }
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

    & > .input-container {
      width: 24rem;
      border: 2px solid #0060b1;
      display: flex;
      justify-content: space-between;
      border-radius: 3px;
      font-size: 16px;
      color: #0060b1;
      margin: 1rem 0;
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
      justify-content: center;
      align-items: center;
      background-color: #0060b1;
      color: white;
      font-weight: 600;
      flex: 2;
      cursor: pointer;

      span {
        margin-left: 2%;
      }
    }
    .offers {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 13px;
      height: auto;
      & > a {
        text-decoration: none;
        letter-spacing: 0.5px;
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
  }
`;

const BottomBar = styled.div`
  width: 100vw;
  min-height: 3rem;
  background-color: #2895f1;
  color: white;

  & > ul {
    display: flex;
    justify-content: center;
    list-style-type: none;

    & > li {
      padding: 1.5% 3%;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 0.2s;
    }

    & > li:hover {
      background-color: rgb(250, 250, 250);
      color: #2895f1;
      transition: 0.2s;
      box-shadow: 3px 3px 3px #0060b1;
    }
  }
`;

export default Header;
