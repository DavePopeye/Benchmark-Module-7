import React from "react";
import { HomePageProps } from "../types/types";

interface HeaderState {
  city_name: string;
}

class HomePage extends React.Component<HomePageProps, HeaderState> {
  componentDidMount = async () => {
    await fetch(
      "api.openweathermap.org/data/2.5/weather?q=udine&appid=6e30e10032b1fc317229d8301ee89caa"
    );
  };

  render() {
    return <div></div>;
  }
}

export default HomePage;
