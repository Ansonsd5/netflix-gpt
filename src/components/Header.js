import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
const navigate = useNavigate();
  const avatarClick = () => {
    
  }

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
    <div className=" px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-icon"
      />
      <div className="flex items-center gap-4">
      <button onClick={() =>  avatarClick() }>
      <img className="w-8 h-8 rounded-xl bg-clip-border" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="icon"/></button>
      <button onClick={()=> handleSignOut()} className="font-bold bg-red-600 px-4 py-1 rounded-sm">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
