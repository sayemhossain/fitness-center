import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googleImg from "../../../Images/google.svg";

const SocialMedia = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div onClick={() => signInWithGoogle()} className="text-center w-100">
      <button className="btn">
        <img src={googleImg} alt="" /> Continue with Google
      </button>
    </div>
  );
};

export default SocialMedia;
