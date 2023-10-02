import React, { useEffect } from "react";


import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PROFILE_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
 
  const avatarClick = () => {
    
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
    
  }

  useEffect(()=>{
   const unsubscribe  =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName } = user;
        dispatch(addUser({uid : uid, displayName : displayName , email : email}));
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate("/")
      }
    });


    // unsubscribe will be called when header component unmounts;
    return () => unsubscribe();
  },[]);

  return (
    <div className=" px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center z-30">
      <img className="w-44 z-30"
        src={LOGO}
        alt="netflix-icon"
      />
      {user && <div className="flex items-center gap-4 z-20">
      <button onClick={() =>  avatarClick() }>
      <img className="w-8 h-8 rounded-xl bg-clip-border" src={PROFILE_AVATAR} alt="icon"/></button>
      <button onClick={ handleSignOut} className="font-bold bg-red-400 px-4 py-1 rounded-sm shadow-inner">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
