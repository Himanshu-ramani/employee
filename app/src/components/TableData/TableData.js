import React,{Fragment, useState} from 'react';
import Form from '../Form/Form';
import TableExpand from '../TableExpand/TableExpand';
import UpdateForm from '../UpdateForm/UpdateForm';
import TableRow from './TableRow';

function TableData({data}) {
  console.log(data);
  const [viewID, setviewID] = useState(null);
  const expandHnadler = (event, obj) => {
    setviewID(obj.id);
  };
  const hideExpand = () =>{
    setviewID(null)
  }
  return(<Fragment>
    {data.map(obj =><Fragment key={obj.id} >
    <TableRow obj={obj} expandHnadler={expandHnadler}  />
   {/* {viewID === obj.id && <TableExpand obj={obj} hideExpand={hideExpand}/>} */}
   {/* {viewID === obj.id && <UpdateForm obj={obj}/>} */}
    </Fragment>)
    }

</Fragment>);
}

export default TableData;
