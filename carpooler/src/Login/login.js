import React, { Component } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";

class Login extends Component {
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
    xhr.open("POST", "http://localhost:4000/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const { token,user_id } = response;
          
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);
          console.log("Login successfully")
          window.location.href = "/home";
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
      <div className="container mt-4 square-container d-flex justify-content-center align-items-center">
        <form onSubmit={this.handleSubmit} className="border p-4">
          <h1>Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {error && error.includes('email') && <div className="text-danger">{error}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {error && error.includes('password') && <div className="text-danger">{error}</div>} 
          </div>
        
          <button type="submit" className="btn btn-success btn-lg btn-block mb-3">
            Login
          </button>
          <br></br>
          <Link to="/register">
            <button type="submit" className="btn btn-secondary btn-lg btn-block">
              Don't have an account? Register
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
