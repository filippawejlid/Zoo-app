import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { DisplayAnimals } from "./DisplayAnimals";

export function Zoo() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  });

  return (
    <>
      <div className="animals">
        <DisplayAnimals animals={animals}></DisplayAnimals>
      </div>
    </>
  );
}
