import React, { Component } from "react";

import "../assets/scss/sign-in.scss";

import FormInput from "./partials/form-input";
import Button from "./partials/button";

import { signInWithGoogle } from "../firebase/init";

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
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            type="email"
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

          <div className="buttons">
            <Button type="submit" value="Submit Form">
              Sign in
            </Button>

            <Button onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
