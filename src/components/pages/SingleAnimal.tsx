import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { IAnimal } from "../../models/IAnimal";

export function SingleAnimal() {
  let params = useParams();
  let paramsId: string = params.id!;

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

  useEffect(() => {
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          const fetchedAnimal = response.data[i];

          if (fetchedAnimal.id === parseInt(paramsId)) {
            setAnimal(fetchedAnimal);
          }
        }
      });
  }, []);

  const AnimalContainer = styled.div``;

  const AnimalHeading = styled.h2``;
  const AnimalYear = styled.h3``;

  const ImgContainer = styled.div``;

  const Img = styled.img``;

  const AnimalDesc = styled.div``;

  const linkStyle = {
    textDecoration: "none",
    color: "grey",
  };

  return (
    <>
      {console.log(animal)}
      <AnimalContainer key={animal.id}>
        <ImgContainer>
          <Img src={animal.imageUrl}></Img>
        </ImgContainer>
        <AnimalHeading>{animal.name}</AnimalHeading>
        <hr />
        <AnimalDesc>{animal.longDescription}</AnimalDesc>
      </AnimalContainer>
    </>
  );
}
