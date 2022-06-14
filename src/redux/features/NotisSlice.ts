import { getNotisList, saveNotisList } from "./../../services/StorageService";
import { INotis } from "../../models/INotis";
import { createSlice } from "@reduxjs/toolkit";
import { IAction } from "../models/IAction";
import { IAnimal } from "../../models/IAnimal";

let notisList: INotis[] = getNotisList<INotis>();

const notisSlice = createSlice({
  name: "notis",
  initialState: { value: notisList },
  reducers: {
    add: (state, action: IAction<IAnimal>) => {
      let fullDate = new Date(action.payload.lastFed);
      let date = fullDate.getDate();
      let month = fullDate.getMonth() + 1;
      let hour = fullDate.getHours();
      let minutes = fullDate.getMinutes();

      let newNotis: INotis = {
        id: action.payload.id,
        name: action.payload.name,
        timestamp: `${hour}:${minutes} den ${date}/${month} `,
      };

      state.value.push(newNotis);
      saveNotisList(state.value);
    },
    update: (state, action: IAction<IAnimal>) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload.id) {
          state.value.splice(i, 1);
        }
      }
      saveNotisList(state.value);
    },
  },
});

export const { add, update } = notisSlice.actions;

export default notisSlice.reducer;
