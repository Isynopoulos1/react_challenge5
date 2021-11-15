import React from "react";

//IMPORT COMPONENTS
import SearchBar from "../../elements/SearchBar/SearchBar";
import Card from "../../elements/Card/Card";

//IMPORT STYLES
import { InputStyle, Subtitle } from "./Main.styles";

const Main = ({ placeholder, type, icon }) => {
  return (
    <main>
      <InputStyle>
        <SearchBar
          placeholder="Search for artist, bands, tracks, podcast"
          type="text"
          icon="search"
        />
      </InputStyle>
      <Subtitle>
        Hear what’s trending for free in the SoundCloud community
      </Subtitle>
      <Card />
    </main>
  );
};

export default Main;
