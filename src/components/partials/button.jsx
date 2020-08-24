import React from "react";

import "../../assets/scss/button.scss";

const Button = ({ children, isGoogleSignIn, ...props }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
