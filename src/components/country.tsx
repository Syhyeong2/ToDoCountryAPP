import { useRecoilState } from "recoil";
import { ICountry } from "../utils/interface";
import { countryState } from "../utils/atom";

export default function Country({ text, id, category }: ICountry) {
  const [countries, setCountries] = useRecoilState(countryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCountries((prev) => {
      const targetIndex = prev.findIndex((country) => country.id === id);
      const newToDo = { text, id, category: event.currentTarget.name as any };
      if (event.currentTarget.name === "delete") {
        return [...prev.slice(0, targetIndex), ...prev.slice(targetIndex + 1)];
      }
      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  console.log(countries);

  return (
    <li>
      <span>{text}</span>
      {category === "dreamCountry" && (
        <button name="visitedCountry" onClick={onClick}>
          check
        </button>
      )}
      {category === "visitedCountry" && (
        <button name="favoriteCounty" onClick={onClick}>
          good
        </button>
      )}{" "}
      {category === "favoriteCounty" && (
        <button name="visitedCountry" onClick={onClick}>
          bad
        </button>
      )}
      <button name="delete" onClick={onClick}>
        delete
      </button>
    </li>
  );
}
