import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getAnimalList, saveAnimalList } from "../../services/StorageService";
import { DisplayAnimals } from "./DisplayAnimals";

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
      <div className="animals">
        <DisplayAnimals animals={animalsState}></DisplayAnimals>
      </div>
    </>
  );
}
