import React from "react";

//IMPORT COMPONENTS
import SearchBar from "../../elements/SearchBar/SearchBar";
import Playlist from "../../elements/Playlist/Playlist";
import ExploreBtn from "../../elements/ExploreBtn/ExploreBtn";

//IMPORT STYLES
import { MainBg, MainWrapper, InputStyle, Subtitle } from "./Main.styles";

//IMPORT DATA
import { list } from "../../data/cards";

const Main = ({ placeholder, type, icon }) => {
  return (
    <main>
      <MainBg>
        <MainWrapper>
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
          <ExploreBtn />
        </MainWrapper>
      </MainBg>
    </main>
  );
};

export default Main;
