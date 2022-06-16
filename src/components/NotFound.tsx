import { Link } from "react-router-dom";
import styled from "styled-components";

import BgImg from "../assets/404.4.png";

const ImgContainer = styled.div`
  background-image: url(${BgImg});
  width: 80%;
  height: 500px;
  background-size: cover;
  background-position: center;
  margin: 50px auto;
`;
const Text = styled.div`
  margin: 50px auto;
  text-align: center;
  font-family: "Fascinate", cursive;
  font-size: 1.5rem;
  //   color: #e18b33;
  color: #dbac44;
`;

const LinkCon = styled.div`
  margin: 0px auto;
  text-align: center;
  font-family: "Fascinate", cursive;
  font-size: 1.5rem;
  border-radius: 17px;
  background-color: #1babbc;
  border: 3px solid #dbac44;
  width: 170px;
  padding: 10px;

  &:hover {
    background-color: #dbac44;
    border: 3px solid #1babbc;
  }
`;

const linkStyle = {
  margin: "50px auto",
  fontFamily: "'Fascinate'",
  color: "white",
  textDecoration: "none",
};

export function NotFound() {
  return (
    <>
      <div>
        <Text>Hoppsan! Något gick snett...</Text>
        <LinkCon>
          <Link style={linkStyle} to="/zoo">
            Gå tillbaka
          </Link>
        </LinkCon>
      </div>

      <ImgContainer></ImgContainer>
    </>
  );
}
