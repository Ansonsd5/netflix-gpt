import React, { useRef, useState } from "react";
import Header from "./Header";
import { Form, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignupSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleFormSubmit = () => {
    const userEnteredEmail = email.current.value;
    const userEnteredPassword = password.current.value;
    const message = checkValidData(userEnteredEmail, userEnteredPassword);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        userEnteredEmail,
        userEnteredPassword
      )
        .then((userCredential) => {
          // Signed Up
          const user = userCredential.user;
          console.log("Signed  Up sucessfully");
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, userEnteredEmail, userEnteredPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed In sucessfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="w-full max-w-xs mx-auto">
        <form
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-80"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4 className="text-white  text-2xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h4>
          {!isSignInForm && (
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-gray-600"
                id="name"
                type="Text"
                placeholder="Full Name"
                ref={name}
              ></input>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-gray-600"
              id="email"
              type="email"
              placeholder="Email Address"
              ref={email}
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
              ref={password}
            ></input>
          </div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <div className="mt-6 flex justify-center w-full">
            <button
              className="bg-red-600 py-2 px-6 w-full text-white text-xs font-bold rounded"
              onClick={handleFormSubmit}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="text-gray-400 mt-16" onClick={handleSignupSignIn}>
            {!isSignInForm
              ? "Already Registered  Netflix User?"
              : "New to Netflix?"}
            <span className="font-bold text-xl text-white ">
              {!isSignInForm ? "Sign In now." : "Sign up now."}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
