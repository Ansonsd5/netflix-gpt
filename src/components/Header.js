import React from "react";

const Header = () => {

  const avatarClick = () => {
    alert("Avatar Clicked")
  }
  return (
    <div className=" px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-icon"
      />
      <button onClick={() =>  avatarClick() }>
      <img className="w-8 h-8 rounded-sm bg-clip-border" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"/></button>
    </div>
  );
};

export default Header;
