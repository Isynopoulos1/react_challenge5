import React from "react";

//IMPORT COMPONENTS

import Logo from "../../elements/logo/Logo";

//IMPORT STYLES
import { header, Menu, HeroContainer, HeroImage } from "./Header.styles";

const Header = () => {
  return (
    <header>
      <HeroContainer>
        <Menu>
          <Logo />
        </Menu>
        <HeroImage
          style={{
            backgroundImage: `url(${"https://ik.imagekit.io/ppayaz/react_challenge5/sc_landing_header_web_featured_artists_2x-00444712_wDKHkU-AZ3.jpeg?updatedAt=1636645480363"})`
          }}
        ></HeroImage>
      </HeroContainer>
    </header>
  );
};

export default Header;
