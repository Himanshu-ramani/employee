import React, { Fragment, useState } from "react";
import "./UpdateForm.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
const UpdateForm = ({ closeUpdateForm, obj }) => {
  const fetchdata = JSON.parse(localStorage.getItem("employee"));
  let employee = fetchdata === null ? [] : fetchdata;
  const dispatch = useDispatch();
  const [isValue, setIsValue] = useState({
    firstName: obj.firstName,
    lastName: obj.lastName,
    age: obj.age,
    number: obj.number,
    email: obj.email,
    address: obj.address,
    id: obj.id,
  });
  const firstNameChangeHandler = (e) => {
    setIsValue({ ...isValue, firstName: e.target.value });
  };
  const lastNameChangeHandler = (e) => {
    setIsValue({ ...isValue, lastName: e.target.value });
  };
  const ageChangeHandler = (e) => {
    setIsValue({ ...isValue, age: e.target.value });
  };
  const numberChangeHandler = (e) => {
    setIsValue({ ...isValue, number: e.target.value });
  };
  const emailChangeHandler = (e) => {
    setIsValue({ ...isValue, email: e.target.value });
  };
  const addressChangeHandler = (e) => {
    setIsValue({ ...isValue, address: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newDataArray = employee.map(
      (obj) => [isValue].find((o) => o.id === obj.id) || obj
    );
    console.log(newDataArray);
    localStorage.setItem("employee", JSON.stringify(newDataArray));
    dispatch({ type: "EDIT", payload: newDataArray });
    closeUpdateForm();
  };

  return (
    <Fragment>
      <tr>
        <td colSpan="6">
          <div className="overlay"></div>
          <form onSubmit={submitHandler} className="form">
            <div className={"form-control"}>
              <Input
                onChange={firstNameChangeHandler}
                value={isValue.firstName}
                placeholder="First Name"
              />
            </div>
            <div className={"form-control"}>
              <Input
                onChange={lastNameChangeHandler}
                value={isValue.lastName}
                placeholder="Last Name"
              />
            </div>
            <div className={"form-control"}>
              <Input
                type="number"
                onChange={ageChangeHandler}
                value={isValue.age}
                placeholder="Age"
              />
            </div>
            <div className={"form-control"}>
              <Input
                type="number"
                onChange={numberChangeHandler}
                value={isValue.number}
                placeholder="Ph. Number"
              />
            </div>
            <div className={"form-control"}>
              <Input
                type="email"
                onChange={emailChangeHandler}
                value={isValue.email}
                placeholder="Email"
              />
            </div>
            <div className={"form-control"}>
              <textarea
                placeholder="Address..."
                onChange={addressChangeHandler}
                value={isValue.address}
              ></textarea>
            </div>
            <div>
              <div></div>
              <div className="button_div">
                <Button type="submit">Add</Button>
                <Button type="button" onClick={closeUpdateForm}>
                  Cancel{" "}
                </Button>
              </div>
            </div>
          </form>
        </td>
      </tr>
    </Fragment>
  );
};

export default UpdateForm;
