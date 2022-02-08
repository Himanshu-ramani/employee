import React, { useState, Fargment } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Nav = (props) => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const searchHanlder = () => {
    setIsSearch((pre) => !pre);
    setSearch("")
    props.getSearchTerm('');
  };
 
  const searchValue = (event) => {
    setSearch(event.target.value);
    props.getSearchTerm(event.target.value);
  };

  return (
    <nav className="nav">
      {isSearch === false ? (
        <h3>Employee</h3>
      ) : (
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onChange={searchValue} />
          <FontAwesomeIcon icon={faTimes} onClick={searchHanlder} />
        </div>
      )}

      <ul>
        <li>
          <FontAwesomeIcon icon={faSearch} onClick={searchHanlder} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAdd} onClick={props.showFormHandler} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
