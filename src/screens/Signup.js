import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <>
        <div id="login-bg" className="container-fluid">
          <div className="bg-img"></div>
          <div className="bg-color"></div>
        </div>

        {/* <!-- End Backgrounds --> */}

        <div className="container" id="login">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="login">
                <h1>Sign Up</h1>

                {/* <!-- Loging form --> */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Name"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Address"
                      name="geolocation"
                      value={credentials.geolocation}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-check">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <label className="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>

                    <label className="forgot-password">
                      <Link to="/login">Already a User </Link>
                    </label>
                  </div>

                  <br />
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-success"
                  >
                    Sign in
                  </button>
                </form>
                {/* <!-- End Loging form --> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
