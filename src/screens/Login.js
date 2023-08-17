import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';


export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);

      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    
       <div>


<div id="login-bg" className="container-fluid">

      <div className="bg-img"></div>
      <div className="bg-color"></div>
    </div>

    {/* <!-- End Backgrounds --> */}

    <div className="container" id="login">
        <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="login">

            <h1>Login</h1>
            
            {/* <!-- Loging form --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"
                                            
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      />

                      
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
                      />
                    </div>

                      <div className="form-check">

                      <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"></span>
                    </label>
                      <label className="form-check-label" for="exampleCheck1">Remember me</label>
                      
                      <label className="forgot-password"><Link to="/creatuser"> New User? Singup </Link></label>

                    </div>
                  
                    <br/>
                    <button type="submit" className="btn btn-lg btn-block btn-success">Sign in</button>
                  </form>
             {/* <!-- End Loging form --> */}

          </div>
        </div>
        </div>
    </div>

    

</div>

  
)
  };



