import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksBar = links.map(linkObj => {
  return <a href={"#"+linkObj} key={linkObj}>{linkObj}</a>
  })

  return (
  <nav>
    {linksBar}
  </nav>
  
)}

export default NavBar;
