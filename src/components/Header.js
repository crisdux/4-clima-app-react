import React from "react";
function Header({ titulo }) {
  return (
    <>
      <header>
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand h" href="#!" >
              {titulo}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
