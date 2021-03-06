import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AlertContext } from "../../contexts/AlertContext";
import { defaultImage } from "../../helpers/helpers";
import { IAnimal } from "../../models/IAnimal";
import { add, update } from "../../redux/features/NotisSlice";
import { getAnimalList, saveAnimalList } from "../../services/StorageService";
import { StyledImg, StyledImgContainer } from "../StyledComponents/Images";

const AnimalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 50px auto;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const AnimalHeading = styled.div`
  font-size: 1.8rem;
  display: inline;
  margin: 40px 0px 30px 0px;
`;

const Name = styled(AnimalHeading)`
  color: #e18b33;
  font-weight: 900;
  font-size: 2.3rem;
  font-family: "Fascinate", cursive;
`;

const AnimalYear = styled.h3`
  background-color: #1babbc;
  margin: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
`;

const AnimalDesc = styled.div`
  text-align: center;
  z-index: 20;
  background-color: #1babbc;
  color: white;
  padding: 20px;
  border: #1babbc solid 5px;
`;

const Button = styled.button`
  padding: 7px 17px;
  border-radius: 12px;
  color: #fff;
  background-color: #1babbc;
  cursor: pointer;
  border: none;
  position: absolute;
  left: 10%;

  &:hover {
    color: #fff;
    background-color: #e18b33;
  }

  @media (min-width: 768px) {
    left: 15%;
  }

  @media (min-width: 1024) {
    left: 20%;
  }
`;

const IsFed = styled(Button)`
  cursor: none;

  &:hover {
    background-color: #1babbc;
  }
`;

export function SingleAnimal() {
  const animals: IAnimal[] = getAnimalList();
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: "",
  });

  let alerts = React.useContext(AlertContext);

  let params = useParams();
  let paramsId: string = params.id!;

  let dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < animals.length; i++) {
      const element = animals[i];

      if (element.id === +paramsId) {
        setAnimal(element);
      }
    }
  }, [paramsId]);

  let interval: NodeJS.Timer;

  useEffect(() => {
    if (animal.isFed) {
      interval = setInterval(() => {
        checkTime();
      }, 1000);
    }
  });

  function checkTime() {
    let animalLastFed = new Date(animal.lastFed);
    let animalMilliseconds = animalLastFed.getTime();
    let time = Date.now();

    if (time - animalMilliseconds >= 10800000) {
      if (animal) {
        for (let i = 0; i < animals.length; i++) {
          const element = animals[i];

          if (element.id === +paramsId) {
            element.isFed = false;
            setAnimal(element);
            saveAnimalList(animals);
          }
        }
      }
    }

    if (time - animalMilliseconds >= 14400000) {
      dispatch(update(animal));
      dispatch(add(animal));
      alerts.newNotis();
      clearInterval(interval);
    }
  }

  function feedAnimal() {
    if (animal) {
      animals.forEach((element) => {
        if (element.id === +paramsId) {
          const beenFed = Date.now();
          element.lastFed = new Date(beenFed).toISOString();
          element.isFed = true;
          setAnimal(element);
          saveAnimalList(animals);
        }
      });
      dispatch(update(animal));
    }
  }

  return (
    <>
      <AnimalContainer key={animal?.id}>
        <AnimalHeading>
          Hej jag heter <Name>{animal?.name}</Name>
        </AnimalHeading>
        <StyledImgContainer>
          <StyledImg src={animal?.imageUrl} onError={defaultImage}></StyledImg>
        </StyledImgContainer>
        {animal?.isFed ? (
          <IsFed disabled>{animal?.name} ??r m??tt</IsFed>
        ) : (
          <Button
            onClick={() => {
              feedAnimal();
            }}
          >
            Mata mig
          </Button>
        )}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1babbc"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <AnimalYear>F??dd {animal?.yearOfBirth}</AnimalYear>
        <AnimalDesc>{animal?.longDescription}</AnimalDesc>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1babbc"
            fillOpacity="1"
            d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </AnimalContainer>
    </>
  );
}
