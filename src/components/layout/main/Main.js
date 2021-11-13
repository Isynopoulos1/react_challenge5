import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import SearchBar from "../../elements/SearchBar/SearchBar";

//IMPORT STYLES
import { InputStyle } from "./Main.styles";

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
    </main>
  );
};

export default Main;
