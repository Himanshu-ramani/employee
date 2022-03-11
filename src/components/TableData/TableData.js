import React, { Fragment, useState, useEffect, useContext } from "react";
import TableExpand from "../TableExpand/TableExpand";
import UpdateForm from "../UpdateForm/UpdateForm";
import TableRow from "./TableRow";
import { useDispatch,} from "react-redux";
import { SearchTerm } from "../../App";
import Pagination from "../Pagination/Pagination";
function TableData(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    setEmployee(data);
  }, [data]);
  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const [updateFormState, setUpdateFormState] = useState(null);
  const updateFormHandler = (event, objId) => {
    setUpdateFormState(objId);
    setviewID(null);
  };
  const closeUpdateForm = () => {
    setUpdateFormState(null);
  };
  const hideExpand = () => {
    setviewID(null);
  };

  ///multiple Select
  const checkedHandler = (event, data) => {
    const { checked } = event.target;
    const newData = JSON.parse(localStorage.getItem("employee"));
    const employeeData = newData === null ? [] : newData;
    const checkArray = employeeData.map((ele) => {
      if (ele.id === data.id) {
        return { ...ele, select: checked };
      }
      return ele;
    });
    
    localStorage.setItem("employee", JSON.stringify(checkArray));
    setEmployee(checkArray);
    dispatch({ type: "CHECK", payload: employee });
  };
  //Search term
  const searchTerm = useContext(SearchTerm);

  useEffect(() => {
    if (searchTerm !== "") {
      const newData = employee.filter((employe) => {
        return Object.values(employe)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newData);
      setEmployee(newData);
    } else {
      setEmployee(data);
    }
  }, [searchTerm]);
  //pagination

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)


  // Get Current posts
  const indexOfLastPosts = currentPage * postPerPage;
  const  indexOfFirstPost = indexOfLastPosts -postPerPage;
  const currentPosts = employee.slice(indexOfFirstPost , indexOfLastPosts)


  //change Page
  const paginate =(pageNumber) =>{
    setCurrentPage(pageNumber)
  }

const perPage =(post) =>{
  setPostPerPage(post)
}

const newData = JSON.parse(localStorage.getItem("employee"));
const employeeData = newData === null ? [] : newData;
  return (
    <Fragment>
      {currentPosts.map((obj) => (
        <Fragment key={obj.id}>
          <TableRow
            obj={obj}
            expandHnadler={expandHnadler}
            updateFormHandler={updateFormHandler}
            checkedHandler={checkedHandler}
            hideExpand ={hideExpand}
          />
          {viewID === obj.id && (
            <TableExpand obj={obj} hideExpand={hideExpand} />
          )}
          {updateFormState === obj.id && (
            <UpdateForm obj={obj} closeUpdateForm={closeUpdateForm} />
          )}
        </Fragment>
      ))}
      {employeeData.length === 0 ? <></> : <Pagination postPerPage={postPerPage} totalPosts={employee.length} paginate={paginate} perPage={perPage} currentPage={currentPage} />}
    </Fragment>
  );
}

export default TableData;
