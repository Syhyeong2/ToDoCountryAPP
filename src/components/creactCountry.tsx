import { useSetRecoilState } from "recoil";
import { countryState } from "../utils/atom";
import { useForm } from "react-hook-form";

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
      <input {...register("country", { required: true })} placeholder="이름" />
      <button>가자!</button>
    </form>
  );
}
