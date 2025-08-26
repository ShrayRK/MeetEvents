import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

const Header = ({ setSearchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchData(searchTerm.trim().toLowerCase());
  };

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand d-flex align-items-center gap-2 me-4"
            to="/"
          >
            <i className="bi bi-people-fill"></i>
            <span className="text-danger fst-italic">Community Meet-up</span>
          </NavLink>
          <div className="d-flex">
            <input
              className="form-control me-3"
              type="text"
              placeholder="Search"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="btn btn-outline-success" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
