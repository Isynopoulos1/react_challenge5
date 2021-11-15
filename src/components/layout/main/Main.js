import React from "react";

//IMPORT COMPONENTS
import SearchBar from "../../elements/SearchBar/SearchBar";
import Playlist from "../../elements/Playlist/Playlist";

//IMPORT STYLES
import { InputStyle, Subtitle } from "./Main.styles";

//IMPORT DATA
import { list } from "../../data/cards";

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
      <Playlist list={list} />
    </main>
  );
};

export default Main;
