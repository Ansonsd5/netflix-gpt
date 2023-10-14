import React, { useEffect } from "react";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LOGO, PROFILE_AVATAR, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const avatarClick = () => {};

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe will be called when header component unmounts;
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectOption = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" bg-gradient-to-b from-black  items-center  z-30 absolute  pr-3 grid grid-flow-col-dense w-screen py-4">
      <div className="">
        <img className="w-36 z-30 h-7" src={LOGO} alt="netflix-icon" />
      </div>
      {user && (
        <div className="flex items-center gap-2 z-20 py-2 pr-1 justify-end">
          {showGptSearch && (
            <select
              className="font-bold bg-red-400 md:px-4 py-1 rounded-sm shadow-inner text-xs px-2"
              onChange={handleSelectOption}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="border-r-0 bg-black text-white"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {
            <button
              className="font-bold bg-red-400 md:px-4 py-1 rounded-sm shadow-inner text-xs px-2 "
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Home" : "Gpt search"}
            </button>
          }
          {/* <button onClick={() => avatarClick()} >
            <img
              className="w-8 h-8 rounded-xl bg-clip-border"
              src={PROFILE_AVATAR}
              alt="icon"
            />
          </button> */}

          {/* <div className="w-16 h-16 relative bg-gradient-to-br from-crimson to-orange  -transform-135"></div> */}
          <button
            onClick={handleSignOut}
            className="font-bold bg-red-400 md:px-4 py-1 rounded-sm shadow-inner text-xs px-2 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
