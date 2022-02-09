import React,{useState,useEffect,useContext} from "react";
import TableData from "../TableData/TableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";
import ReactPaginate from "react-paginate";
import { useSelector} from "react-redux";
import { SearchTerm } from "../../App";
const Table = () => {
      const localStorageData = JSON.parse(localStorage.getItem("employee"));
  const employee = localStorageData === null ? [] : localStorageData
    const [tableData, setTableData] = useState(employee);
    const state = useSelector((state)=>state)

    useEffect(() => {
setTableData(employee)
    }, [state]);
  //Search term 
const searchTerm = useContext(SearchTerm) 
  useEffect(() => {
    if (searchTerm !== "") {
      const newData = tableData.filter((employe) => {
        return Object.values(employe)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setTableData(newData)
    } else{
      setTableData(employee)
    }
  }, [searchTerm])
    
    //sorting
    const [icon ,setIcon] = useState(false)
    const [order, setOreder] = useState("ASC");
    const sorting = (col) => {
      setIcon(preState => !preState)
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
console.log(tableData);
    ///pagination
const [pageNumber , setPageNumber] =useState(0)
const employeePerPage = 5
const pageVisited = pageNumber * employeePerPage
const displayEmployee = tableData.slice(pageVisited ,  pageVisited + employeePerPage)
const pageCount =Math.ceil(tableData.length / employeePerPage)
const onPageChange=({selected}) =>{

  setPageNumber(selected)
}
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th onClick={() => sorting("firstName")}>First Name {icon === true ?<FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} /> }</th>
            <th onClick={() => sorting("lastName")}>Last Name</th>
          <th onClick={() => sorting("lastName")}>Age </th>
          <th>Email</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
          <TableData data={displayEmployee}/>
          <tr className='pagination'>
            <td  colSpan="6" >
              <ReactPaginate
               previousLabel={"Pervious"}
               nextLabel={'Next'}
               pageCount={pageCount}
               onPageChange={onPageChange}
               containerClassName={'pagination_container'}
              previousLinkClassName={'previousBtn'}
              nextLinkClassName={'nextBtn'}
              activeClassName={'pagination_Active'}
               />
            </td>
          </tr>
      </tbody>
    </table>
  );
};

export default Table;
