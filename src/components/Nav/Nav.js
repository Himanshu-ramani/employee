import React, { useState,} from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch} from "react-redux";
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
  const dispatch = useDispatch()
  console.log();
const mutliDelete = () =>{
  dispatch({ type: "SELECTTOGGLE",payload :false})
  const localStorageData =JSON.parse(localStorage.getItem("employee"))  
  const fetchdata = localStorageData === null ? [] : localStorageData
  const newArray = fetchdata.filter(ele =>{
    return ele.select === false
  })
  localStorage.setItem("employee", JSON.stringify(newArray));
  dispatch({ type: 'DELETE', payload: newArray  })

}

  return (
    <nav className="nav">
      {isSearch === false ? (
        <h3>EmployeeList</h3>
      ) : (
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onChange={searchValue} value={search} />
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
        <li>
          <FontAwesomeIcon icon={faTrash} onClick={mutliDelete} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
