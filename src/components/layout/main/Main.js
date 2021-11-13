import React from "react";
import PropTypes from "prop-types";
//IMPORT COMPONENTS
import CreateAccount from "../../elements/CreateAccount/CreateAccount";

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
        <CreateAccount />
      </MainContainer>
    </main>
  );
};

export default SearchBar;
