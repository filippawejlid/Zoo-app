import { Link } from "react-router-dom";
import styled from "styled-components";
import { IAnimal } from "../../models/IAnimal";

interface IDisplayAnimalsProps {
  animals: IAnimal[];
}

export function DisplayAnimals(props: IDisplayAnimalsProps) {
  const AnimalContainer = styled.div``;

  const AnimalHeading = styled.h2``;

  const ImgContainer = styled.div``;

  const Img = styled.img``;

  const AnimalDesc = styled.div``;

  const linkStyle = {
    textDecoration: "none",
    color: "grey",
  };

  let AnimalHtml = props.animals.map((animal) => {
    return (
      <AnimalContainer key={animal.id}>
        <ImgContainer>
          <Img src={animal.imageUrl}></Img>
        </ImgContainer>
        <AnimalHeading>{animal.name}</AnimalHeading>
        <hr />
        <AnimalDesc>
          {animal.shortDescription}
          <Link to={"/animal/" + animal.id} style={linkStyle}>
            <br />
            Läs mer...
          </Link>
        </AnimalDesc>
      </AnimalContainer>
    );
  });

  return <>{AnimalHtml}</>;
}
