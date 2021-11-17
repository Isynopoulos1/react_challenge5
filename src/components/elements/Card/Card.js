import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { CardImg, CardStyle, Title, Album } from "./Card.styles";

const Card = ({ img, title, album }) => {
  return (
    <CardStyle>
      <CardImg src={img} />
      <Title>{title}</Title>
      <Album>{album}</Album>
    </CardStyle>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  album: PropTypes.string
};

Card.defaultProps = {
  img: "",
  title: "",
  album: ""
};
export default Card;
