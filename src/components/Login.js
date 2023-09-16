import React from "react";
import Header from "./Header";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-80">
          <h4 className="text-white  text-2xl font-bold mb-8">Sign In</h4>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-gray-600"
              id="email"
              type="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-gray-600"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="mt-6 flex justify-center w-full">
            <button className="bg-red-600 py-2 px-6 w-full text-white text-xs font-bold rounded">
              Submit
            </button>
          </div>
          <div className="text-gray-400 mt-16">New to Netflix?<span className="font-bold text-xl text-white pl-4">Sign up now.</span> </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
