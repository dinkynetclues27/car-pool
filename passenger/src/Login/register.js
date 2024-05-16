import React, { Component } from "react";
import Joi from "joi";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.email": "Email must be a valid email address",
          "any.required": "Email is required",
        }),
      password: Joi.string().min(5).required().messages({
        "string.min": "Password must be at least 5 characters long",
        "any.required": "Password is required",
      }),
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { error } = this.schema.validate({ email, password }, { abortEarly: false });
    if (error) {
      this.setState({ error: error.details[0].message });
     return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4000/registerpassenger", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log("Register successfully")
          window.location.href = "/";
        } else {
          const errorResponse = JSON.parse(xhr.responseText);
          this.setState({ error: errorResponse.error });
        }
      }
    };
    xhr.send(JSON.stringify({ email, password }));
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit} className="border p-4">
            <h1> Register</h1>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email: </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
             {error && error.includes('email') && <div className="text-danger">{error}</div>}
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password:</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              {error && error.includes('password') && <div className="text-danger">{error}</div>} 
            </div>
          </div>
        
          <button type="submit" class="btn btn-primary">
           Sign Up
          </button>
          <br />
          <br />
        
        </form>
      </div>
    );
  }
}

export default Register;
