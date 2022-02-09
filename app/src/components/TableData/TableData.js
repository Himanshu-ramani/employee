import React,{Fragment, useState,useContext,useEffect} from 'react';
import Form from '../Form/Form';
import TableExpand from '../TableExpand/TableExpand';
import UpdateForm from '../UpdateForm/UpdateForm';
import TableRow from './TableRow';
import {FormState} from '../../App'
import { useDispatch } from "react-redux";

function TableData({data}) {
  const formState = useContext(FormState)
  const dispatch = useDispatch()
  const [employee, setEmployee] = useState(data);
  useEffect(() => {
    setEmployee(data);
  }, [formState,data]);

  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const [updateFormState, setUpdateFormState] = useState(null)
  const updateFormHandler = (event, objId) =>{
   event.stopPropagation()
    setUpdateFormState(objId)
    setviewID(null);
    console.log("hi");
  }
  const closeUpdateForm = () =>{
    setUpdateFormState(null)
  }
  const hideExpand = () =>{
    setviewID(null)
  }
  //delete function
    const deleteData = (event, curid) => {
 
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
  console.log(localStorageData);
        const newArray = data.filter((elem) => {
          return elem.id !== curid;
        });
        localStorage.setItem("employee", JSON.stringify(newArray));

        setEmployee(newArray)
        dispatch({ type: 'DELETE', payload:{ update: newArray } })
  }


  return(<Fragment>
    {employee.map(obj =><Fragment key={obj.id} >
    <TableRow obj={obj} expandHnadler={expandHnadler} deleteData={deleteData} updateFormHandler={updateFormHandler} />
   {viewID === obj.id && <TableExpand obj={obj} hideExpand={hideExpand}/>}
   {updateFormState === obj.id && <UpdateForm obj={obj} closeUpdateForm={closeUpdateForm}/>}
    </Fragment>)
    }

</Fragment>);
}

export default TableData;
