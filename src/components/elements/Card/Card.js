import React from "react";

import { CardImg, CardStyle, Title, Album } from "./Card.styles";

const Card = () => {
  return (
    <CardStyle>
      <CardImg
        src="https://ik.imagekit.io/ppayaz/ppayaz-website/paypal-logo_2_38uvSe1MY.png?updatedAt=1634221510370"
        alt="track"
      />
      <Title>Bizarrap, Anuel</Title>
      <Album>abc</Album>
    </CardStyle>
  );
};
export default Card;
