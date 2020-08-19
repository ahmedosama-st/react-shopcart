import React from "react";

import "../../assets/scss/button.scss";

const Button = ({ children, ...props }) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default Button;
