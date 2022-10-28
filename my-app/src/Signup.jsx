import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";



const SignUp = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("Successfully Register");
  };

  const [userRegistration, setuserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    date: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);
    //  console.log(records);
  };

  // const [SignUp, setSignup] = useState(true);
  // const [Login, setLogin] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <form onSubmit={handleSubmit} className="shadow-2xl rounded-2xl ">
          <div>
            <h1 className="text-center text-5xl font-serif font-bold">SignUp</h1>
            <label className="m-3 "> Name:</label>
            <input
              type="text"
              value={userRegistration.firstname}
              onChange={handleInput}
              name="firstname"
              placeholder="First name"
              id="firstname"
              className="border relative bg-gray-100 p-2 m-1"
            />

            {/* <label>Last Name: </label> */}
            <input
              type="text"
              value={userRegistration.lastname}
              onChange={handleInput}
              name="lastname"
              placeholder="Last name"
              id="lastname"
              className="border relative bg-gray-100 p-2 m-1"
            />
          </div>
          <div>
            <label className="m-3">Email: </label>
            <input
              type="text"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              placeholder="Email"
              id="email"
              className="border relative bg-gray-100 p-2 m-1"
            />
          </div>
          <div>
            <label className="m-3">Password: </label>
            <input
              type="text"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              placeholder="Password"
              id="password"
              className="border relative bg-gray-100 p-2 m-1"
            />
          </div>
          <div>
            <label className="m-3">Date:</label>
            <TextField
              id="date"
              value={userRegistration.date}
              onChange={handleInput}
              name="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              className="border relative bg-gray-100 p-2 m-1"
            />
          </div>
          <div className="p-2 m-3">
            <input
              type="checkbox"
              id="agree"
              name="checkbox"
              onChange={checkboxHandler}
            />
            <label htmlFor="agree">
              {" "}
              I agree to <b>terms and conditions</b>
            </label>
          </div>
          <div>
            <label className="p-2 m-3">
              Already have an account ?
              <Link classname='font-bold'to="/Login">
                Login
              </Link>
            </label>
          </div>
          <div className="m-6">
            <button
              disabled={!agree}
              className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
              onClick={btnHandler}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
