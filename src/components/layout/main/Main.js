import React from "react";
import PropTypes from "prop-types";
//IMPORT COMPONENTS
import Upload from "../../elements/Upload/Upload";

//IMPORT STYLES
import { InputBar, MainContainer } from "./Main.styles";

const SearchBar = () => {
  return (
    <main>
      <MainContainer>
        <InputBar
          type="text"
          placeholder="Search for artist, bands, tracks, podcast"
        ></InputBar>
        <p>or</p>
        <Upload />
      </MainContainer>
    </main>
  );
};

export default SearchBar;
