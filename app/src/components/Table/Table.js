import React,{useState,useEffect} from "react";
import TableData from "../TableData/TableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";
const Table = ({ data }) => {
    const [tableData, setTableData] = useState(data);
    useEffect(() => {
setTableData(data)
    }, [data]);
  
    console.log(data);

    //sorting
    const [icon ,setIcon] = useState(false)
    const [order, setOreder] = useState("ASC");
    const sorting = (col) => {
      setIcon(preState => !preState)
      if (order === "ASC") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setTableData(sorted);
        setOreder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setTableData(sorted);
        setOreder("ASC");
      }
    };
console.log(tableData);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th onClick={() => sorting("firstName")}>First Name {icon === true ?<FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} /> }</th>
            <th onClick={() => sorting("lastName")}>Last Name</th>
          <th>Age</th>
          <th>Number</th>
          <th>Email</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
          <TableData  data={tableData}/>
      </tbody>
    </table>
  );
};

export default Table;
