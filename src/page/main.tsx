import { useRecoilValue } from "recoil";
import { countryState } from "../utils/atom";
import CreactCountry from "../components/creactCountry";
import Country from "../components/country";
import CountryList from "../components/countryList";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 170px;
  gap: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: tomato;
`;

export default function Main() {
  return (
    <Container>
      <Title>내가 가고싶은 나라들</Title>
      <CreactCountry />
      <CountryList category="dreamCountry" />
      <Title>내가 가본 나라들</Title>
      <CountryList category="visitedCountry" />
      <Title>내가 좋아하는 나라들</Title>
      <CountryList category="favoriteCounty" />
    </Container>
  );
}
