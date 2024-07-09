import { useSetRecoilState } from "recoil";
import { countryState } from "../utils/atom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Btn = styled.button``;

const Input = styled.input``;

export default function CreactCountry() {
  const setCountries = useSetRecoilState(countryState);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = ({ country }: any) => {
    setCountries((prev) => [
      {
        text: country,
        id: Date.now(),
        category: "dreamCountry",
      },
      ...prev,
    ]);
    setValue("country", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("country", { required: true })} placeholder="이름" />
      <Btn>가자!</Btn>
    </form>
  );
}
