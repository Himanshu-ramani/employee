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
  const [isVaild ,setIsValid] =useState({
    firstNameHasError : false ,
    lastNameHasError: false,
    ageHasError:false,
    numberHasError:false,
    emailHasError:false,
    addressHasError:false,
  })
  console.log(isValue.firstName);
  const firstNameChangeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value.trim() !== '') {
     setIsValid({...isVaild ,firstNameHasError :true})
    }
    setIsValue({ ...isValue, firstName: e.target.value });
  };
  const lastNameChangeHandler = (e) => {
    if (e.target.value.trim() === '') {
      setIsValid({...isVaild ,lastNameHasError :true})
     }
    setIsValue({ ...isValue, lastName: e.target.value });
  };
  const ageChangeHandler = (e) => {
    if (e.target.value.trim() === '') {
      setIsValid({...isVaild ,ageHasError :true})
     }
    setIsValue({ ...isValue, age: e.target.value });
  };
  const numberChangeHandler = (e) => {
    if (e.target.value.length !== 10) {
      setIsValid({...isVaild ,numberHasError :true})
     }
    setIsValue({ ...isValue, number: e.target.value });
  };
  const emailChangeHandler = (e) => {
    if (e.target.value.trim() === '') {
      setIsValid({...isVaild ,emailHasError :true})
     }
    setIsValue({ ...isValue, email: e.target.value });
  };
  const addressChangeHandler = (e) => {
    if (e.target.value.trim() === '') {
      setIsValid({...isVaild ,addressHasError :true})
     }
    setIsValue({ ...isValue, address: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
// console.log(Object.values(isVaild) =[false,false,false,false,false,false]);
    if (isVaild.firstNameHasError === true && isVaild.lastNameHasError === true &&isVaild.ageHasError === true && isVaild.numberHasError === true && isVaild.emailHasError === true && isVaild.addressHasError === true) {
      return
    }



    const newDataArray = employee.map(
      (obj) => [isValue].find((o) => o.id === obj.id) || obj
    );
    localStorage.setItem("employee", JSON.stringify(newDataArray));
    dispatch({ type: "EDIT", payload: newDataArray });
    closeUpdateForm();
  };
  const firstnameClasses = isVaild.firstNameHasError
  ? "form-control invalid"
  : "form-control";
const lastnameClasses = isVaild.lastNameHasError
  ? "form-control invalid"
  : "form-control";
const ageClasses = isVaild.ageHasError ? "form-control invalid" : "form-control";

const numberClasses = isVaild.numberHasError
  ? "form-control invalid"
  : "form-control";
const emailClasses = isVaild.emailHasError ? "form-control invalid" : "form-control";
const addressClasses = isVaild.addressHasError
  ? "form-control invalid"
  : "form-control";

  return (
    <Fragment>
      <tr>
        <td colSpan="6">
          <div className="overlay"></div>
          <form onSubmit={submitHandler} className="form">
            <div className={firstnameClasses}>
              <input
                onChange={firstNameChangeHandler}
                value={isValue.firstName ?? ""}
                placeholder="First Name"
              />
            </div>
            {isVaild.firstNameHasError && (
            <p className="error-text"> Please enter valid First Name </p>
          )}
            <div className={lastnameClasses}>
              <Input
                onChange={lastNameChangeHandler}
                value={isValue.lastName || ""}
                placeholder="Last Name"
              />
            </div>
            {isVaild.lastNameHasError && (
            <p className="error-text"> Please enter valid last Name </p>
          )}
            <div className={ageClasses}>
              <Input
                type="date"
                onChange={ageChangeHandler}
                value={isValue.age || ""}
                placeholder="Age"
              />
            </div>
            {isVaild.ageHasError && (
            <p className="error-text"> Please enter valid Age </p>
          )}
            <div className={numberClasses}>
              <Input
                type="number"
                onChange={numberChangeHandler}
                value={isValue.number || ""}
                placeholder="Ph. Number"
              />
            </div>
            {isVaild.numberHasError && (
            <p className="error-text"> Please enter valid First Name </p>
          )}
            <div className={emailClasses}>
              <Input
                type="email"
                onChange={emailChangeHandler}
                value={isValue.email || ""}
                placeholder="Email"
              />
            </div>
            {isVaild.emailHasError && (
            <p className="error-text"> Please enter valid First Name </p>
          )}
            <div className={addressClasses}>
              <textarea
                placeholder="Address..."
                onChange={addressChangeHandler}
                value={isValue.address || ""}
              ></textarea>
            </div>
            {isVaild.addressHasError && (
            <p className="error-text"> Please enter valid First Name </p>
          )}
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
