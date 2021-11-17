import React from "react";

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo";
import SignIn from "../../elements/SignIn/SignIn";
import CreateAccount from "../../elements/CreateAccount/CreateAccount";
import ForCreators from "../../elements/ForCreators/ForCreators";

//IMPORT STYLES
import { MenuContainer, HeroContainer, HeroImage } from "./Header.styles";

const Header = () => {
  return (
    <HeroContainer>
      <MenuContainer>
        <Logo />
        <SignIn />
        <CreateAccount />
        <ForCreators />
      </MenuContainer>
      <HeroImage />
    </HeroContainer>
  );
};

export default Header;
