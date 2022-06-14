import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IAnimal } from "../../models/IAnimal";
import { getAnimalList, saveAnimalList } from "../../services/StorageService";
import { DisplayAnimals } from "./DisplayAnimals";

const StyledHeading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  margin: 0px auto;
  margin-top: 90px;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  color: #1babbc;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: "Fascinate", cursive;
`;

const StyledH3 = styled.h3`
  font-size: 2.5rem;
  font-family: "Fascinate", cursive;
`;

const Text = styled.div`
  background-color: #e18b33;
  width 80%;
  border-radius: 20px;
  padding: 20px;
  margin: 40px auto;
  text-align: center;
  color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export function Zoo() {
  const [animalsState, setAnimalsState] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animalsState.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        saveAnimalList(response.data);
        setAnimalsState(getAnimalList());
      });
  });

  return (
    <>
      <Text>
        <StyledH3>Välkommen!</StyledH3>
        <p>
          På Alvik Zoo kan du hälsa på, läsa om och ta hand om djuren. Du kan
          mata de var tredje timme och de bör inte gå hungriga i mer än 4
          timmar, men oroa dig inte, vi påminner dig!
        </p>
        <p>Seså, gå nu och utforska!</p>
      </Text>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1babbc"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <StyledHeading>Djuren</StyledHeading>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1babbc"
          fill-opacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,181.3C480,149,600,75,720,85.3C840,96,960,192,1080,213.3C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
      <div className="animals">
        <DisplayAnimals animals={animalsState}></DisplayAnimals>
      </div>
    </>
  );
}
