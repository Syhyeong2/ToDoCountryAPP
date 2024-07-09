import { useRecoilValue } from "recoil";
import { countryState } from "../utils/atom";
import Country from "./country";

export default function CountriesList(category1: any) {
  const countries = useRecoilValue(countryState);
  return (
    <ul>
      {countries?.map(
        (country) =>
          country.category === category1 && (
            <Country
              key={country.id}
              text={country.text}
              id={country.id}
              category={country.category}
            />
          )
      )}
    </ul>
  );
}
