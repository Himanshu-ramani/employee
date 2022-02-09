import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const TableRow = ({obj , expandHnadler,deleteData,updateFormHandler}) => {


  return  <tr key={obj.id} onClick={(event) => expandHnadler(event, obj)}>
  <td><input type='checkbox' /></td>
  <td>{obj.firstName}</td>
  <td>{obj.lastName}</td>
  <td>{obj.age}</td>
  <td>{obj.email}</td>
  <td className='last'> <FontAwesomeIcon icon={faPencil} onClick={(event) => updateFormHandler(event, obj.id)}  /> <FontAwesomeIcon icon={faTrash} onClick={(event) => deleteData(event, obj.id)}/> </td>
</tr>;
};

export default TableRow;
