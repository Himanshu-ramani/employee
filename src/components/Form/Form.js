import useInput from "../../hook/input_hook";
import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import "./Form.css";
import { useDispatch } from "react-redux";
const Form = (props) => {
  const fetchdata = JSON.parse(localStorage.getItem("employee"));
  const employee = fetchdata === null ? [] : fetchdata;

  const {
    value: firstNamevalue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastNamevalue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: agevalue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetage,
  } = useInput((value) => value.trim() !== "");
  const {
    value: numbervalue,
    isValid: numberIsValid,
    hasError: numberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetnumber,
  } = useInput((value) => value.length === 10);
  const {
    value: emailvalue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput((value) => value.trim() !== "");

  const {
    value: addressvalue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetaddress,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    ageIsValid &&
    numberIsValid &&
    emailIsValid &&
    addressIsValid
  ) {
    formIsValid = true;
  }

  const [update, setUpdate] = useState(employee);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    let resdata = {
      firstName: firstNamevalue,
      lastName: lastNamevalue,
      age: agevalue,
      number: numbervalue,
      email: emailvalue,
      address: addressvalue,
      id: Math.random(),
      select: false,
    };
    const reEntryNumber = employee.filter((obj) => {
      if (obj.number == resdata.number) {
        return true;
      }
    });
    if (reEntryNumber === true) {
      return
    }
    

    update.unshift(resdata);
    localStorage.setItem("employee", JSON.stringify(update));
    dispatch({ type: "ADD", payload: update });

    resetFirstName();
    resetlastName();
    resetage();
    resetnumber();
    resetemail();
    resetaddress();
    props.showFormHandler();
  };
  const firstnameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const ageClasses = ageHasError ? "form-control invalid" : "form-control";

  const numberClasses = numberHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const addressClasses = addressHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <>
      <div className="overlay"></div>
      <form onSubmit={submitHandler} className="form">
        <div className={firstnameClasses}>
          <Input
            onChange={firstNameChangeHandler}
            value={firstNamevalue}
            onBlur={firstNameBlurHandler}
            placeholder="First Name"
          />
          {firstNameHasError && (
            <p className="error-text"> Please enter firstName </p>
          )}
        </div>
        <div className={lastnameClasses}>
          <Input
            onChange={lastNameChangeHandler}
            value={lastNamevalue}
            onBlur={lastNameBlurHandler}
            placeholder="Last Name"
          />
          {lastNameHasError && (
            <p className="error-text"> Please enter lastName </p>
          )}
        </div>
        <div className={ageClasses}>
          <Input
            type="date"
            onChange={ageChangeHandler}
            value={agevalue}
            onBlur={ageBlurHandler}
            placeholder="Age"
          />
          {ageHasError && (
            <p className="error-text"> Please enter valid age! </p>
          )}
        </div>
        <div className={numberClasses}>
          <Input
            type="number"
            onChange={numberChangeHandler}
            value={numbervalue}
            onBlur={numberBlurHandler}
            placeholder="Ph. Number"
          />
          {numberHasError && (
            <p className="error-text"> Please enter 10(ten) digit number! </p>
          )}
        </div>
        <div className={emailClasses}>
          <Input
            type="email"
            onChange={emailChangeHandler}
            value={emailvalue}
            onBlur={emailBlurHandler}
            placeholder="Email"
          />
          {lastNameHasError && (
            <p className="error-text"> Please enter Email include "@" </p>
          )}
        </div>
        <div className={addressClasses}>
          <textarea
            placeholder="Address..."
            onChange={addressChangeHandler}
            value={addressvalue}
            onBlur={addressBlurHandler}
          ></textarea>
          {lastNameHasError && (
            <p className="error-text"> Please enter Address </p>
          )}
        </div>
        <div>
          <div></div>
          <div className="button_div">
            <Button type="submit" disabled={!formIsValid}>
              Add
            </Button>
            <Button type="button" onClick={props.showFormHandler}>
              Cancel{" "}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
