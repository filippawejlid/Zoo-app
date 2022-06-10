import { saveAnimalList } from "./../../services/StorageService";
import { createSlice } from "@reduxjs/toolkit";
import { getAnimalList } from "../../services/StorageService";
import { IAnimal } from "../../models/IAnimal";
import { IAction } from "../models/IAction";
import { useDispatch } from "react-redux";
import { add } from "./NotisSlice";

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
          // setTimeout(() => {
          //   animal.isFed = false;
          //   saveAnimalList(state.value);
          //   console.log("hejhjehej");
          // }, 3000);
          // //10800000
          // setTimeout(() => {
          //   const dispatch = useDispatch();
          //   dispatch(add(animal));
          //   saveAnimalList(state.value);
          // }, 14400000);
        }
        saveAnimalList(state.value);
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
