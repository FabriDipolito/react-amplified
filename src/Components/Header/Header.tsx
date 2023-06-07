import Link from "next/link";
import React from "react";
import Image from "next/image";

import { VaquitaMuLechePNG } from "../../../public/Assets/PNG";
import { LinkContainer, LogoContainer } from "./styles";

const Header = () => {
  return (
    <>
      <Link href="/">
        <LogoContainer>
          <Image src={VaquitaMuLechePNG} alt="" width={70} height={70} />
        </LogoContainer>
      </Link>
      <LinkContainer>
        <Link href="/"><p style={{ fontFamily: 'Poppins-ExtraBold'}}>Home</p></Link>
      </LinkContainer>
    </>
  );
};

export default Header;
