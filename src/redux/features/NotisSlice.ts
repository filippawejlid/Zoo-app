import {
  getAnimalList,
  getNotisList,
  saveNotisList,
} from "./../../services/StorageService";
import { INotis } from "./../../models/INotis";
import { createSlice } from "@reduxjs/toolkit";
import { IAction } from "../models/IAction";
import { IAnimal } from "../../models/IAnimal";

let notisList: INotis[] = getNotisList<INotis>();

const notisSlice = createSlice({
  name: "notis",
  initialState: { value: notisList },
  reducers: {
    add: (state, action: IAction<IAnimal>) => {
      let newNotis: INotis = {
        id: action.payload.id,
        name: action.payload.name,
      };

      state.value.push(newNotis);
      saveNotisList(state.value);
    },
  },
});

export const { add } = notisSlice.actions;

export default notisSlice.reducer;
