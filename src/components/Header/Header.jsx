import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="titles">
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
      </div>
      <Link to="/"></Link>
      <Search />
    </div>
  );
};

export default Header;
