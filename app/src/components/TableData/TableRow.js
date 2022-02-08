import React,{Fragment} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const TableRow = ({obj , expandHnadler}) => {
    const deleteData = (event, curid) => {
        // event.stopPropagation()
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
        const newArray = localStorageData.filter((elem) => {
          return elem.id !== curid;
        });
        localStorage.setItem("employee", JSON.stringify(newArray));
        console.log(newArray);
  }

  return  <tr key={obj.id} onClick={(event) => expandHnadler(event, obj)}>
  <td><input type='checkbox' /></td>
  <td>{obj.firstName}</td>
  <td>{obj.lastName}</td>
  <td>{obj.age}</td>
  <td>{obj.number}</td>
  <td>{obj.email}</td>
  <td> <FontAwesomeIcon icon={faPencil} /> <FontAwesomeIcon icon={faTrash} onClick={(event) => deleteData(event, obj.id)}/> </td>
</tr>;
};

export default TableRow;
