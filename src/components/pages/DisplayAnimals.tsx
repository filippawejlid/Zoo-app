import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultImage } from "../../helpers/helpers";
import { IAnimal } from "../../models/IAnimal";

interface IDisplayAnimalsProps {
  animals: IAnimal[];
}

const AnimalContainer = styled.div`
  float: left;
  padding: 30px;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export function DisplayAnimals(props: IDisplayAnimalsProps) {
  let AnimalHtml = props.animals.map((animal) => {
    return (
      <AnimalContainer key={animal.id}>
        <div className="card">
          <div className="img-con">
            <img
              src={animal.imageUrl}
              onError={defaultImage}
              alt={"Picture of" + animal.name}
            />
          </div>
          <div className="con-text">
            <h2>{animal.name}</h2>
            <p>
              {animal.shortDescription}
              <button>
                <Link to={"/zoo/animal/" + animal.id} style={linkStyle}>
                  See more
                </Link>
              </button>
            </p>
          </div>
        </div>
      </AnimalContainer>
    );
  });

  return <>{AnimalHtml}</>;
}
