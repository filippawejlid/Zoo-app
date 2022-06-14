import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Notification } from "../components/pages/Notification";
import BgImg from "../assets/header.jpg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const Heading = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadingText = styled.h1`
  font-size: 2.5rem;

  &::first-letter {
    color: #1babbc;
    font-family: "Fascinate", cursive;
  }
`;

const HeadingText2 = styled(HeadingText)`
  &::first-letter {
    color: #e18b33;
  }
`;

const StyleDiv = styled.div`
  width: 30%;
`;

const HeaderImg = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${BgImg});
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: bottom;

  @media (min-width: 830px) {
    height: 350px;
  }
`;

const IconContainer = styled.div`
  padding: 10px;

  width: 30%;
  display: flex;
  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 5px;
  }
`;

const LinkStyle = {
  padding: "5px",
  paddingTop: "7px",
  textDecoration: "none",
  color: "black",
};

export function Layout() {
  return (
    <>
      <Header>
        <IconContainer>
          <Notification></Notification>
          <Link to="/zoo" style={LinkStyle}>
            Home
          </Link>
        </IconContainer>
        <Heading>
          <HeadingText>Alvik</HeadingText>
          <HeadingText2>Zoo</HeadingText2>
        </Heading>
        <StyleDiv>
          <p></p>
        </StyleDiv>
      </Header>
      <HeaderImg></HeaderImg>
      <Outlet></Outlet>
    </>
  );
}
