import React from "react";
// scss
import "../../asset/scss/header.scss";

//images
import Logo from "../../asset/images/Logo.png";

function Header() {

  return (
    <div className="header_wrap">
      <img src={Logo} alt="Logo" className="Logo" />
    </div>
  )

}


export default Header;
