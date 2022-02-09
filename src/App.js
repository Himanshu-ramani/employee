import React,{Fargment , useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Table from './components/Table/Table';
import {createContext} from 'react';
// import { useSelector } from "react-redux";
export const FormState = createContext()
function App() {
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
  const employee = localStorageData === null ? [] : localStorageData
  const [employeeData, setEmployeeData] = useState(employee)
  const [showFrom , SetShowFrom] = useState(false)

useEffect(() => {
  setEmployeeData(localStorageData)
}, [showFrom])

const showFormHandler=() =>{
  SetShowFrom(pre =>!pre)
}
//serach function

const [searchTerm ,setSearchTerm] = useState("")
const [newEmploye ,setNewEmployee] =useState([])
  const getSearchTerm = (search) => {
    setSearchTerm(search);
    if (search !== "") {
      const newData = employeeData.filter((employe) => {
        return Object.values(employe)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setNewEmployee(newData)
    } 
  }
  const finalDataArray = searchTerm !== '' ? newEmploye : employeeData
  console.log(finalDataArray);

  return (<div>
    <Nav showFormHandler={showFormHandler}  getSearchTerm={getSearchTerm} />
   {showFrom && <Form showFormHandler={showFormHandler} />}
   <FormState.Provider value={showFrom} >
   <Table  data={finalDataArray}/>
   </FormState.Provider>
    </div>
  

  );
}

export default App;
