import { useRecoilValue } from "recoil";
import { countryState } from "../utils/atom";
import Country from "./country";
import { IProp } from "../utils/interface";

export default function CountryList({ category }: IProp) {
  const countries = useRecoilValue(countryState);
  return (
    <ul>
      {countries?.map(
        (country) =>
          country.category === category && (
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
