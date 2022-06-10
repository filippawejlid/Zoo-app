import { IAnimal } from "./../../models/IAnimal";
export interface IStateAnimals {
  animals: IValue;
}

interface IValue {
  value: IAnimal[];
}
