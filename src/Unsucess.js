import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import "./Unsucess.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Star from "./Star";


function Unsuccess() {
  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");
  const [messageError, setMessageError] = useState("");
  let navigate = useNavigate();
  const handleChangePhone = (event) => {
    const value = event.target.value;
    if (!value) {
      setPhone("");
    } else if (value.length <= 12) {
      setPhone(
        value
          .replace(/[^\d]/g, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
      );
    }
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (
      event.target.value.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      )
    ) {
      setError(false);
      setHelperText("");
    } else {
      setError(true);
      setHelperText("Invalid email address");
    }
  };
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [helperTextName, setHelperTextName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value.match(/^[a-zA-Z\s]+$/)) {
      setErrorName(false);
      setHelperTextName("");
    } else {
      setErrorName(true);
      setHelperTextName("Invalid name");
    }
  };
  const validateMessage = (value) => {
    let error = "";
    if (!value) {
      error = "Please enter a message";
    } else if (value.length < 10) {
      error = "Message must be at least 10 characters long";
    }
    return error;
  };
  const handleBlur = () => {
    const error = validateMessage(value);
    setMessageError(error);
  };

  async function  onFormSubmit (e)  {
    e.preventDefault();
    try {
      if (name.length === 0 || errorName === true) {
        setErrorName(true);
        setHelperTextName("Name is required");
      } else if (email.length === 0 || error === true) {
        setError(true);
        setHelperText("Email is required");
      } else if (phone.length === 0) {
        setPhone("");
        setHelperText("Phone is required");
      } else if (value.length === 0) {
        setMessageError(messageError);
        return;
      } else {
        let data = {
          email,
          phone,
          name,
          value,
        };

         const  res = await axios.post(`/contact`, data);
        if (res.status === 200) {
          toast.success("Form submitted successfully");
          navigate("/email_success")
        } else {
          toast.error("Error in submission, please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Star />
  
    <form  className="review-form">
      <div>
        <TextField
          id="name"
          variant="outlined"
          label="Name"
          value={name}
          error={errorName}
          helperText={helperTextName}
          onChange={handleChangeName}
        />
      </div>

      <TextField
        id="email"
        variant="outlined"
        label="Email"
        type="email"
        value={email}
        error={error}
        helperText={helperText}
        onChange={handleChangeEmail}
      />
      <div>
        <TextField
          id="phone"
          variant="outlined"
          label="Phone Number"
          value={phone}
          onChange={handleChangePhone}
        />
      </div>

      <div>
        <TextField
          variant="outlined"
          id="message"
          label="Tell us about your experience"
          multiline
          rows={4}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={handleBlur}
          error={!!messageError}
          helperText={messageError}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={onFormSubmit}
        >
          Submit
        </Button>
      </div>
    </form>
    </>
  );
}
export default Unsuccess;
