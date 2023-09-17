import React, { useState } from "react";
import Header from "./Header";
import { Form } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm ] = useState(true)

  const handleSignupSignIn = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-80">
          <h4 className="text-white  text-2xl font-bold mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h4>
          {!isSignInForm &&  <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="name"
            >
             Name 
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-gray-600"
              id="name"
              type="Text"
              placeholder="Full Name"
            ></input>
          </div>}
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
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="text-gray-400 mt-16" onClick={handleSignupSignIn}>{!isSignInForm ? "Already Registered  Netflix User?": "New to Netflix?"}<span className="font-bold text-xl text-white ">{!isSignInForm ? "Sign In now.":"Sign up now."}</span> </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
