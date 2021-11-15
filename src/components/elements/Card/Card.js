import React from "react";

import { CardImg, CardStyle, Title, Album } from "./Card.styles";

const Card = () => {
  return (
    <CardStyle>
      <CardImg
        src="https://ik.imagekit.io/ppayaz/react_challenge5/Captura_de_Pantalla_2021-11-14_a_la_s__15.54.33_2PgPk3EEt8.png?updatedAt=1636901869272"
        alt="track"
      />
      <Title>Bizarrap, Anuel AA</Title>
      <Album>abc</Album>
    </CardStyle>
  );
};
export default Card;
