import React, { Component } from "react";

import "../assets/scss/sign-in.scss";

import FormInput from "./partials/form-input";
import Button from "./partials/button";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            type="text"
            name="email"
            required
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            required
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
          />

          <Button type="submit" value="Submit Form">
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
