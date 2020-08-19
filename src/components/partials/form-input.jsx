import React from "react";

import "../../assets/scss/form-input.scss";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input {...props} className="form-input" onChange={handleChange} />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
