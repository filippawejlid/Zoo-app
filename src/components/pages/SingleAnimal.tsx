import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { defaultImage } from "../../helpers/helpers";
import { IAnimal } from "../../models/IAnimal";
import { feed, hungryAgain } from "../../redux/features/AnimalsSlice";
import { add } from "../../redux/features/NotisSlice";
import { IStateAnimals } from "../../redux/models/IStateAnimals";
import { StyledImg, StyledImgContainer } from "../StyledComponents/Images";

const AnimalContainer = styled.div``;

const AnimalHeading = styled.h2``;

const AnimalYear = styled.h3``;

const AnimalDesc = styled.div``;

const LastFed = styled.div``;

const IsFed = styled.div``;

const linkStyle = {
  textDecoration: "none",
  color: "grey",
};

export function SingleAnimal() {
  let params = useParams();
  let paramsId: string = params.id!;

  const dispatch = useDispatch();

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

  const animals = useSelector((state: IStateAnimals) => state.animals.value);

  useEffect(() => {
    if (animal.name !== "") return;

    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id === parseInt(paramsId)) {
        setAnimal(animals[i]);
      }
    }
  });

  function feedAnimal() {
    dispatch(feed(animal.id));
    setAnimal(animal);
    setTimeout(() => {
      dispatch(hungryAgain(animal.id));
    }, 10800000);
    setTimeout(() => {
      dispatch(add(animal));
      console.log("heddddssj");
    }, 14400000);
  }

  return (
    <>
      {console.log(animals)}
      <AnimalContainer key={animal.id}>
        <StyledImgContainer>
          <StyledImg src={animal.imageUrl} onError={defaultImage}></StyledImg>
        </StyledImgContainer>
        <AnimalHeading>{animal.name}</AnimalHeading>
        <AnimalYear>{animal.yearOfBirth}</AnimalYear>
        <hr />
        {animal.isFed ? (
          <p>{animal.name} är mätt</p>
        ) : (
          <button
            onClick={() => {
              feedAnimal();
            }}
          >
            Mata mig
          </button>
        )}
        <LastFed>Senaste utfodringen: {animal.lastFed}</LastFed>
        <hr />
        <AnimalDesc>{animal.longDescription}</AnimalDesc>
      </AnimalContainer>
    </>
  );
}
