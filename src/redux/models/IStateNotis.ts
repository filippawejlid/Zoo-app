import { INotis } from "../../models/INotis";
export interface IStateNotis {
  notis: IValue;
}

interface IValue {
  value: INotis[];
}
