import { saveAnimalList } from "./../../services/StorageService";
import { createSlice } from "@reduxjs/toolkit";
import { getAnimalList } from "../../services/StorageService";
import { IAnimal } from "../../models/IAnimal";
import { IAction } from "../models/IAction";

let animalsList: IAnimal[] = getAnimalList<IAnimal>();

const animalsSlice = createSlice({
  name: "animals",
  initialState: { value: animalsList },
  reducers: {
    feed: (state, action: IAction<number>) => {
      state.value.forEach((animal) => {
        if (animal.id === action.payload) {
          const beenFed = Date.now();
          animal.lastFed = new Date(beenFed).toISOString();
          animal.isFed = true;
          saveAnimalList(state.value);
        }
      });
    },
    hungryAgain: (state, action: IAction<number>) => {
      state.value.forEach((animal) => {
        if (animal.id === action.payload) {
          animal.isFed = false;
        }
        saveAnimalList(state.value);
      });
    },
  },
});

export const { feed, hungryAgain } = animalsSlice.actions;

export default animalsSlice.reducer;
