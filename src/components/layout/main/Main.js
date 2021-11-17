import React from "react";

//IMPORT COMPONENTS
import SearchBar from "../../elements/SearchBar/SearchBar";
import Playlist from "../../elements/Playlist/Playlist";
import ExploreBtn from "../../elements/ExploreBtn/ExploreBtn";

//IMPORT STYLES
import { MainBg, MainWrapper, MainSearch, Subtitle } from "./Main.styles";

//IMPORT DATA
import { list } from "../../../data/cards";

const Main = ({ placeholder, type, icon }) => {
  return (
    <MainBg>
      <MainWrapper>
        <MainSearch>
          <SearchBar
            placeholder="Search for artist, bands, tracks, podcast"
            type="text"
            icon="search"
          />
        </MainSearch>
        <Subtitle>
          Hear what’s trending for free in the SoundCloud community
        </Subtitle>
        <Playlist list={list} />
        <ExploreBtn />
      </MainWrapper>
    </MainBg>
  );
};

export default Main;
