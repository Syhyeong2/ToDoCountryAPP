export interface ICountry {
  text: string;
  id: number;
  category: "dreamCountry" | "visitedCountry" | "favoriteCounty";
}

export interface IProp {
  category: string;
}
