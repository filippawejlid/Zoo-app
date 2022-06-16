import axios from "axios";

const LS_animal_KEY = "animals";
const LS_notis_KEY = "notis";

export const getAnimalList = <T>(): T[] => {
  if (localStorage.getItem(LS_animal_KEY) === null) {
    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        saveAnimalList(response.data);
      });
  }

  let lsList = localStorage.getItem(LS_animal_KEY) || "[]";
  return JSON.parse(lsList) as T[];
};

export const saveAnimalList = <T>(updatedList: T): void => {
  localStorage.setItem(LS_animal_KEY, JSON.stringify(updatedList));
};

export const getNotisList = <T>(): T[] => {
  let lsList = localStorage.getItem(LS_notis_KEY) || "[]";
  return JSON.parse(lsList) as T[];
};

export const saveNotisList = <T>(updatedList: T): void => {
  localStorage.setItem(LS_notis_KEY, JSON.stringify(updatedList));
};
