import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultImage } from "../../helpers/helpers";
import { IAnimal } from "../../models/IAnimal";
import { StyledImg, StyledImgContainer } from "../StyledComponents/Images";

interface IDisplayAnimalsProps {
  animals: IAnimal[];
}

const AnimalContainer = styled.div``;

const AnimalHeading = styled.h2``;

const AnimalDesc = styled.div``;

const linkStyle = {
  textDecoration: "none",
  color: "grey",
};

export function DisplayAnimals(props: IDisplayAnimalsProps) {
  let AnimalHtml = props.animals.map((animal) => {
    return (
      <AnimalContainer key={animal.id}>
        <StyledImgContainer>
          <StyledImg src={animal.imageUrl} onError={defaultImage}></StyledImg>
        </StyledImgContainer>
        <AnimalHeading>{animal.name}</AnimalHeading>
        <hr />
        <AnimalDesc>
          {animal.shortDescription}
          <Link to={"/zoo/animal/" + animal.id} style={linkStyle}>
            <br />
            Läs mer...
          </Link>
        </AnimalDesc>
      </AnimalContainer>
    );
  });

  return <>{AnimalHtml}</>;
}
