import React from "react";
// import signup from "./signup.jpeg";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      {/* <img classname='absolute w-ull h-full object-cover mix-blend-overlay' src={signup} alt="" srcset="" /> */}
      <div className="flex justify-center items-center  shadow-2xl rounded-2xl ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <div className="flex flex-col mb-4">
            <h1 className="text-center text-5xl font-serif font-bold">LogIn</h1>
            <label>Email:</label>
            <input className="border relative bg-gray-100 p-2" name="email" id="email" placeholder="Username" type="text" />
          </div>
          <div className="flex flex-col ">
            <label>Password:</label>
            <input
              name="password" id="password" placeholder="Password"
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
