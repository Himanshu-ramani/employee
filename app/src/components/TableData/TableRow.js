import React,{Fragment,useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const TableRow = ({obj , expandHnadler,deleteData}) => {


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
