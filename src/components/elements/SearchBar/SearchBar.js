import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import Upload from "../Upload/Upload";
//IMPORT STYLES

import {
  SearchWrapper,
  InputWrapper,
  Text,
  IconStyle,
  InputBar
} from "./SearchBar.styles";

const SearchBar = ({ placeholder, type, icon }) => {
  return (
    <SearchWrapper>
      <InputWrapper>
        <InputBar type={type} placeholder={placeholder} />
        <IconStyle>{icon}</IconStyle>
      </InputWrapper>

      <Text>or</Text>
      <Upload />
    </SearchWrapper>
  );
};
SearchBar.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string
};

SearchBar.defaultProps = {
  type: "text",
  placeholder: "",
  icon: ""
};

export default SearchBar;
