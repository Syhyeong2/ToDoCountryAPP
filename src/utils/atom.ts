import { AtomEffect, atom } from "recoil";
import { ICountry } from "./interface";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const countryState = atom<ICountry[]>({
  key: "country",
  default: [],
  effects: [localStorageEffect("country")],
});
