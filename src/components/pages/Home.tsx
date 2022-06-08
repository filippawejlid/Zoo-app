import { Link } from "react-router-dom";
import styled from "styled-components";
import BgImg from "../../assets/illustration5.jpg";

export function Home() {
  const LandingPage = styled.div`
    background-image: url(${BgImg});
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const LandingPageHeading = styled.h1`
    // position: absolute;
    color: white;
  `;

  const LandingPageButton = styled.button`
    background-color: orange;
    color: white;
    border-radius: 40px;
    border: none;
    padding: 15px;
    cursor: pointer;
  `;

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <LandingPage>
        <LandingPageHeading>Alvik Zoo</LandingPageHeading>
        <LandingPageButton>
          <Link to="/zoo" style={linkStyle}>
            Explore the zoo
          </Link>
        </LandingPageButton>
      </LandingPage>
    </>
  );
}
