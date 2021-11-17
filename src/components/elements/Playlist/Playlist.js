import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { ListTracks } from "./Playlist.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";

const Playlist = ({ list }) => {
  //MAPPED LIST
  const mappedList = list.map((card, i) => (
    <Card key={i} img={card.img} title={card.title} album={card.album} />
  ));

  //RENDER
  return <ListTracks>{mappedList}</ListTracks>;
};

Playlist.propTypes = {
  list: PropTypes.array
};

Playlist.defaultProps = {
  list: []
};

export default Playlist;
