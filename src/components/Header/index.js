import React from "react";
import styled from "styled-components";
import Home from "../Home";
import logo from "../../assets/e-Medicine.Uz.png";
import {
  Search,
  Facebook,
  WhatsApp,
  YouTube,
  Telegram,
  Person,
} from "@material-ui/icons/";

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
              <a href={<Home />}>Request Appointment</a>
              <a href="#">Find a Doctor</a>
              <a href="#">Find a Job</a>
              <a href="#">Give New</a>
            </div>
            <div className="social">
              <div className="sign-in">
                <Person />
                <span>sign in</span>
              </div>
              <div className="languages">
                <label for="cars">language: </label>
                <select id="cars" name="cars">
                  <option value="english">English</option>
                  <option value="german">Deutsch</option>
                  <option value="russian">Russian</option>
                  <option value="uzbek">Uzbek</option>
                </select>
              </div>
              <ul>
                <li>
                  <a href="https://facebook.com">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com">
                    <WhatsApp />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com">
                    <YouTube />
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org">
                    <Telegram />
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

const HeaderWrap = styled.header`
  #logo {
    height: auto;
    width: 8rem;
  }
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
    padding: 0 8rem;
    color: black;
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
    flex: 4;
    display: flex;
    justify-content: space-between;

    /* input */
    & > .input-container {
      width: 28rem;
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
      border-left: 1px solid #2895f1;
      padding-left: 1rem;

      & > a {
        text-decoration: none;
        letter-spacing: 0.5px;
      }
    }

    /* social network icons */
    .social {
      border-left: 1px solid #2895f1;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #0060b1;

      & > .sign-in {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 6rem;
        padding-right: 1rem;
        cursor: pointer;
      }

      & > ul {
        display: flex;
        justify-content: space-between;
        width: 7rem;
      }

      & > ul > li {
        list-style-type: none;
      }
    }
  }
`;

const BottomBar = styled.div`
  width: 100vw;
  min-height: 3rem;
  background-color: rgb(250, 250, 250);
  color: #0060b1;

  & > ul {
    display: flex;
    justify-content: center;
    list-style-type: none;

    & > li {
      padding: 1% 3%;
      font-weight: 600;
      letter-spacing: 1.5px;
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
