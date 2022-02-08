import React,{Fargment , useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Table from './components/Table/Table';
function App() {
  const localStorageData = JSON.parse(localStorage.getItem("employee"));
  const employeeData = localStorageData === null ? [] : localStorageData
  console.log(employeeData);
const [showFrom , SetShowFrom] = useState(false)
const showFormHandler=() =>{
  SetShowFrom(pre =>!pre)
}
//serach function
const [newEmploye, setNewEmploye] = useState([]);
const [searchTerm ,setSearchTerm] = useState("")
  const getSearchTerm = (search) => {
    setSearchTerm(search);
    if (search !== "") {
      const newData = employeeData.filter((employe) => {
        return Object.values(employe)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setNewEmploye(newData)
      console.log(newData);
    } 
  };
  const finalDataArray = searchTerm !== '' ? newEmploye : employeeData

  return (<div>
    <Nav showFormHandler={showFormHandler}  getSearchTerm={getSearchTerm} />
   {showFrom && <Form showFormHandler={showFormHandler} />}
   <Table  data={finalDataArray}/>
    </div>
  

  );
}

export default App;
