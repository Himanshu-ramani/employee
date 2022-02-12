import React,{Fragment, useState,useEffect} from 'react';
import TableExpand from '../TableExpand/TableExpand';
import UpdateForm from '../UpdateForm/UpdateForm';
import TableRow from './TableRow';
import { useSelector,useDispatch} from "react-redux";

function TableData(props) {

  const {data} = props
  const dispatch = useDispatch()

  // const state = useSelector((state)=>state)  
  const [employee, setEmployee] = useState([]);
    useEffect(() => {
    setEmployee(data);
  }, [,data]);
  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const [updateFormState, setUpdateFormState] = useState(null)
  const updateFormHandler = (event, objId) =>{
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
  const checkedHandler =(event,data) =>{
    const {checked} = event.target
    const checkArray = employee.map(ele => {
      if (ele.id === data.id) {
        return {...ele, select: checked }
      }
      return ele
    })
      console.log(checkArray);
    localStorage.setItem("employee", JSON.stringify(checkArray));
    setEmployee(checkArray)
    dispatch({ type: 'CHECK', payload: employee  })
    console.log("action");
  }
// console.log("table-Data");
  return(<Fragment>
    {employee.map(obj =><Fragment key={obj.id} >
    <TableRow obj={obj} expandHnadler={expandHnadler} deleteData={deleteData} updateFormHandler={updateFormHandler} checkedHandler={checkedHandler} />
   {viewID === obj.id && <TableExpand obj={obj} hideExpand={hideExpand}/>}
   {updateFormState === obj.id && <UpdateForm obj={obj} closeUpdateForm={closeUpdateForm}/>}
    </Fragment>)
    }

</Fragment>);
}

export default TableData;
