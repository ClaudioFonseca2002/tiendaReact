import React from "react";
import logo from "../assets/images/nuevoLogo.png";
import corazon from "../assets/images/corazon.png";
import perfil from "../assets/images/perfil.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="80" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <img
                    src={corazon}
                    alt="Logo"
                    width="20"
                    height="15"
                    className="d-inline-block align-text-center"
                  />
                  Favoritos
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <img
                    src={perfil}
                    alt="Logo"
                    width="20"
                    height="15"
                    className="d-inline-block align-text-center"
                  />
                  Cuenta
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
