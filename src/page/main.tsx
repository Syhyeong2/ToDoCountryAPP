import { useRecoilValue } from "recoil";
import { countryState } from "../utils/atom";
import CreactCountry from "../components/creactCountry";
import Country from "../components/country";

export default function Main() {
  const countries = useRecoilValue(countryState);

  return (
    <div>
      <h1>내가 가고싶은 나라들</h1>
      <CreactCountry />
      <ul>
        {countries?.map(
          (country) =>
            country.category === "dreamCountry" && (
              <Country
                key={country.id}
                text={country.text}
                id={country.id}
                category={country.category}
              />
            )
        )}
      </ul>
      <h1>내가 가본 나라들</h1>
      <ul>
        {countries?.map(
          (country) =>
            country.category === "visitedCountry" && (
              <Country
                key={country.id}
                text={country.text}
                id={country.id}
                category={country.category}
              />
            )
        )}
      </ul>
      <h1>내가 좋아하는 나라들</h1>
      <ul>
        {countries?.map(
          (country) =>
            country.category === "favoriteCounty" && (
              <Country
                key={country.id}
                text={country.text}
                id={country.id}
                category={country.category}
              />
            )
        )}
      </ul>
    </div>
  );
}
