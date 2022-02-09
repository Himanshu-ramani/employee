import React,{Fragment, useState,useContext,useEffect} from 'react';
import Form from '../Form/Form';
import TableExpand from '../TableExpand/TableExpand';
import UpdateForm from '../UpdateForm/UpdateForm';
import TableRow from './TableRow';
import {FormState} from '../../App'
// import { useDispatch } from "react-redux";

function TableData({data}) {
  const formState = useContext(FormState)
  // const dispatch = useDispatch()
  const [employee, setEmployee] = useState(data);
  useEffect(() => {
    setEmployee(data);
  }, [formState,data]);
  console.log(formState);
  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const hideExpand = () =>{
    setviewID(null)
  }
  //delete function
    const deleteData = (event, curid) => {
        // event.stopPropagation()
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
        const newArray = localStorageData.filter((elem) => {
          return elem.id !== curid;
        });
        localStorage.setItem("employee", JSON.stringify(newArray));
        console.log(newArray);
        setEmployee(newArray)
        // dispatch({ type: 'DELETE', payload:{ update: newArray } })
  }


  return(<Fragment>
    {employee.map(obj =><Fragment key={obj.id} >
    <TableRow obj={obj} expandHnadler={expandHnadler} deleteData={deleteData} />
   {/* {viewID === obj.id && <TableExpand obj={obj} hideExpand={hideExpand}/>} */}
   {/* {viewID === obj.id && <UpdateForm obj={obj}/>} */}
    </Fragment>)
    }

</Fragment>);
}

export default TableData;
