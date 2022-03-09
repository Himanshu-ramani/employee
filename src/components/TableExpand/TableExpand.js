import React from 'react';
import classes from './TableExpand.module.css'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TableExpand({obj,hideExpand,}) {
console.log("expandTable.js");
  return  <tr>
  <td colSpan="6" className={classes.expandContainer}>
    <div className={classes.head}>
      <h2>
   {obj.firstName} {obj.lastName}
      </h2>
      <div>
        <button onClick={hideExpand}   >
          <FontAwesomeIcon icon={faArrowUp} /> up
        </button>
      </div>
    </div>
    <div className={classes.expand}>
      <p className={classes.label}>FIRST NAME</p>
      <p>{obj.firstName}</p>
      <p className={classes.label}>LAST NAME</p>
      <p>{obj.lastName}</p>
      <p className={classes.label}>DATE OF BIRTH</p>
      <p>{obj.age}</p>
      <p className={classes.label}>NUMBER</p> <p>{obj.number}</p>
      <p className={classes.label}>EMAIL</p> <p>{obj.email}</p>
      <p className={classes.label}>ADDRESS</p>
      <p>{obj.address}</p>
    </div>
  </td>
</tr>;
}

export default TableExpand;
