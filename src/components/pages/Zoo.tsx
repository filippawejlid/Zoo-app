import { useEffect, useState } from "react";
import styled from "styled-components";
import { IAnimal } from "../../models/IAnimal";
import { getAnimalList } from "../../services/StorageService";
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
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    setAnimals(getAnimalList());
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
      <StyledHeading>Djuren</StyledHeading>

      <div className="animals">
        <DisplayAnimals animals={animals}></DisplayAnimals>
      </div>
    </>
  );
}
