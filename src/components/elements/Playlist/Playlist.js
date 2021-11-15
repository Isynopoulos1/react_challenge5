import React from "react";

//IMPORT STYLES
import { ListTracks, List1, List2 } from "./Playlist.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";

const Playlist = () => {
  return (
    <ListTracks>
      <List1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List1>
      <List2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List2>
    </ListTracks>
  );
};

export default Playlist;
