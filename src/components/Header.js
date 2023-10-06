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

    const handleSelectOption = (e) =>{
    dispatch(changeLanguage(e.target.value))
   
  }

  return (
    <div className="w-screen  bg-gradient-to-b from-black  z-30 absolute flex justify-between pr-10">
      <img className="w-44 z-30" src={LOGO} alt="netflix-icon" />
      {user && (
        <div className="flex items-center gap-4 z-20">
          {/* !showGptSearch && */}
          {showGptSearch &&
          <select className=" font-bold bg-red-400 px-4 py-1 rounded-sm shadow-inner" onChange={handleSelectOption}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="border-r-0 bg-black text-white"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>}
          {
            <button
              className="font-bold bg-red-400 px-4 py-1 rounded-sm shadow-inner"
              onClick={handleGptSearch}
            >
             {showGptSearch ? 'Home': "Gpt search"}
            </button>
          }
          <button onClick={() => avatarClick()}>
            <img
              className="w-8 h-8 rounded-xl bg-clip-border"
              src={PROFILE_AVATAR}
              alt="icon"
            />
          </button>
          <button
            onClick={handleSignOut}
            className="font-bold bg-red-400 px-4 py-1 rounded-sm shadow-inner"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
