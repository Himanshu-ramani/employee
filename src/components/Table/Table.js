import React, { useState, useEffect, Fragment } from "react";
import TableData from "../TableData/TableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
  const employee = localStorageData === null ? [] : localStorageData;
  const [tableData, setTableData] = useState(employee);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTableData(employee);
  }, [state]);

  //sorting
  const [icon, setIcon] = useState(false);
  const [order, setOreder] = useState("ASC");
  const sorting = (col) => {
    setIcon((preState) => !preState);
    if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOreder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOreder("ASC");
    }
  };
 
  const selectAll = (event) => {
    dispatch({ type: "SELECTTOGGLE", payload: !state.selectToggle });
    const newData = JSON.parse(localStorage.getItem("employee"));
    const employeeData = newData === null ? [] : newData;
    const { checked } = event.target;
    const selcted = employeeData.map((ele) => {
      return { ...ele, select: checked };
    });
    const newDataArray = employeeData.map(
      (obj) => selcted.find((o) => o.id === obj.id) || obj
    );
    localStorage.setItem("employee", JSON.stringify(newDataArray));
    dispatch({ type: "CHECK", payload: selcted });
  };
 

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={selectAll}
                checked={state.selectToggle}
              />
            </th>
            <th onClick={() => sorting("firstName")}>
              First Name{" "}
              {icon === true ? (
                <FontAwesomeIcon icon={faArrowDown} />
              ) : (
                <FontAwesomeIcon icon={faArrowUp} />
              )}
            </th>
            <th onClick={() => sorting("lastName")}>Last Name</th>
            <th onClick={() => sorting("lastName")}>Date of Birth</th>
            <th>Email</th>
            <th>Update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableData data={tableData}  />
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
