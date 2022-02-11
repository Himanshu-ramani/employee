import React, { useState,} from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
const mutliDelete = () =>{
//   const localStorageData =JSON.parse(localStorage.getItem("employeeData"))  
//   const fetchdata = localStorageData === null ? [] : localStorageData

// for (const id of state.idArray.checkedArray) {
//   const newData =JSON.parse(localStorage.getItem("employeeData"))  
//   const newArray = newData.filter((elem) => {
//     return elem.id !== id;
//   });
//   localStorage.setItem("employeeData", JSON.stringify(newArray));
// }
  const localStorageData =JSON.parse(localStorage.getItem("employee"))  
  const fetchdata = localStorageData === null ? [] : localStorageData
  for (const obj of fetchdata ) {
    // if (obj.select === true) {
      
    // }
  }

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
          <FontAwesomeIcon icon={faTrash} onClick={mutliDelete} />{1}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
