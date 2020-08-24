import React from "react";

import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

import "../assets/scss/authentication.scss";

const AuthenticationPage = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
