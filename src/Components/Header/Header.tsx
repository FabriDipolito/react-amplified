import Link from "next/link";
import React from "react";
import {
  ButtonContainer,
  ButtonSignOut,
  HeaderContainer,
  LinkContainer,
  LogoContainer,
} from "./styles";

const Header = (signOut) => {
  return (
    <HeaderContainer>
      <LogoContainer></LogoContainer>
      <LinkContainer>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Tablero</Link>
      </LinkContainer>
      <ButtonContainer>
        <ButtonSignOut onClick={signOut}>Sign Out</ButtonSignOut>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
