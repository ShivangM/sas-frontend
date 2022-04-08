import React, { useState } from "react";
import Button from "./Button";
import FormGroup from "./FormGroup";
import InputGroup from "./InputGroup";
import { useNavigate } from "react-router-dom"

function SideLogin(props) {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    const response = await fetch("https://sasietdavv-backend.herokuapp.com/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json)

    if (json.success) {
      localStorage.setItem('token', json.authToken)
      alert("Logged in successfully")
      history("/dashboard")
    }
    else {
      alert("Invalid credentials")
    }
  }

  const handleEmail = (e) => {
    setCredentials({ ...credentials, "email": e })
  }

  const handlePassword = (e) => {
    setCredentials({ ...credentials, "password": e })
  }

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full">
        <img
          src="https://content3.jdmagicbox.com/comp/indore/d6/0731px731.x731.171001174539.g3d6/catalogue/iet-davv-khandwa-road-indore-education-consultants-tv769yp9sl.jpg?clr=1b2b4b"
          className="w-full h-full object-cover"
          alt="clg"
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <form className="w-5/6 sm:w-1/2 mx-auto text-center" onSubmit={handleSubmit}>
          <img
            src="https://mace.edu.in/assets/uploads/notification/logo@2x.png"
            className="h-8 block mx-auto"
            alt="logo"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">{props.type === "student" ? "Welcome back" : "Faculty Login"}</h2>

            {props.type === "student" ?
              <p className="mt-3 text-gray-800">
                New to Student Attendance System?{" "}
                <a href="/signup" className="text-blue-400">
                  Sign up
                </a>
              </p>
              : null
            }
          </div>
          <div className="mt-12">
            <FormGroup>
              <InputGroup
                type="email"
                name="email"
                placeholder="Your email address"
                onChange={handleEmail}
                value={credentials.email}
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                type="password"
                name="password"
                placeholder="Your password"
                onChange={handlePassword}
                value={credentials.password}
              />
            </FormGroup>
            <FormGroup>
              <Button text="Log In" submit full />
            </FormGroup>
            <div className="text-right">
              <a href="/" className="text-blue-400">
                Forgot your password?
              </a>
            </div>

            <div className="mt-6 border-t border-b border-gray-300"></div>

            {
              props.type === "student" ?
                <p className="text-sm mt-6 text-left">
                  By continuing you accept our{" "}
                  <a href="/" className="text-blue-400">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="/" className="text-blue-400">
                    Privacy Policy
                  </a>
                  .
                </p>
                : null
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default SideLogin;