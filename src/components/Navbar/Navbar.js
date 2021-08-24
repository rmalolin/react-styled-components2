import React from "react";
import { Nav, NavbarContainer, NavLogo, NavIcon } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          ULTRA
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
