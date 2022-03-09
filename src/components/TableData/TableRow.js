import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const TableRow = ({obj , expandHnadler,deleteData,updateFormHandler,checkedHandler}) => {


const onCheck =(event) =>{
  event.stopPropagation()
  
}
  return  <tr key={obj.id} onClick={(event) => expandHnadler(event, obj)}>
  <td data-label="Select" onClick={onCheck}><input type='checkbox'name={obj.id} checked={obj.select} onChange={(event)=>checkedHandler(event,obj)} /></td>
  <td data-label="First Name">{obj.firstName}</td>
  <td data-label="Last Name">{obj.lastName}</td>
  <td data-label="Date of Birth">{obj.age}</td>
  <td data-label="Email">{obj.email}</td>
  <td className='number' data-label="Number">{obj.number}</td>
  <td className='address' data-label="Address">{obj.address}</td>
  <td className='last' data-label="Update/Delete"> <FontAwesomeIcon icon={faPencil} onClick={(event) => updateFormHandler(event, obj.id)}  /> <FontAwesomeIcon icon={faTrash} onClick={(event) => deleteData(event, obj.id)}/> </td>
</tr>;
};

export default TableRow;
