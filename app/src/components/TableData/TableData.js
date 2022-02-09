import React,{Fragment, useState,useEffect} from 'react';
import TableExpand from '../TableExpand/TableExpand';
import UpdateForm from '../UpdateForm/UpdateForm';
import TableRow from './TableRow';
import { useSelector,useDispatch} from "react-redux";

function TableData(props) {

  const {data} = props
  const dispatch = useDispatch()

  const state = useSelector((state)=>state)
  const [employee, setEmployee] = useState(data);
    useEffect(() => {
    setEmployee(data);
  }, [state,data]);
  console.log(employee);
  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const [updateFormState, setUpdateFormState] = useState(null)
  const updateFormHandler = (event, objId) =>{
  //  event.stopPropagation()
    setUpdateFormState(objId)
    setviewID(null);
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
        const newArray = localStorageData.filter((elem) => {
          return elem.id !== curid;
        });
        localStorage.setItem("employee", JSON.stringify(newArray));
        setEmployee(newArray)
        dispatch({ type: 'DELETE', payload: newArray  })
  }
  ///multiple Select 


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
