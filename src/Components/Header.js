import styled from "styled-components";
import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../Features/User/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home"></img>
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="Search"></img>
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="Watchlist"></img>
              <span>WATCHLIST</span>
            </a>
            <a href="/original">
              <img src="/images/original-icon.svg" alt="Original"></img>
              <span>ORIGINAL</span>
            </a>
            <a href="/movie">
              <img src="/images/movie-icon.svg" alt="Movie"></img>
              <span>MOVIE</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="Series"></img>
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <ProfileImage src={photo} alt="" />
            <Dropdown>
              <span onClick={handleAuth}>Log Out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #060a14;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 16px;
  padding: 0 20px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 70px;
  margin-top: 8px;
  margin-bottom: 20px;
  max-height: 50px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 40px;

  a {
    display: flex;
    align-items: center;
    padding: 0 20px;

    img {
      height: 25px;
      min-width: 25px;
      width: 25px;
      padding-right: 5px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      color: rgb(249, 249, 249);
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      padding: 2px 0px;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
    border-color: transparent;
  }
`;

const ProfileImage = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  border-radius: 4px;
  background-color: #0f1d2c;
  color: white;
  font-size: 12px;
  padding: 10px;
  letter-spacing: 3px;
  text-align: center;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  ${ProfileImage} {
    border-radius: 50%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
