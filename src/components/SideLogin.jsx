import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/components/Button";
import FormGroup from "../components/components/FormGroup";
import InputGroup from "../components/components/InputGroup";

function SideLogin() {
  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full">
        <img
          src="https://content3.jdmagicbox.com/comp/indore/d6/0731px731.x731.171001174539.g3d6/catalogue/iet-davv-khandwa-road-indore-education-consultants-tv769yp9sl.jpg?clr=1b2b4b"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <a
          href="#"
          className="absolute text-3xl text-blue-400 cursor-pointer top-0 right-0 mt-6 mr-8"
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <form className="w-5/6 sm:w-1/2 mx-auto text-center">
          <img
            src="https://mace.edu.in/assets/uploads/notification/logo@2x.png"
            className="h-8 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
            <p className="mt-3 text-gray-800">
              New to Student Attendance System?{" "}
              <a href="#" className="text-blue-400">
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-12">
            <FormGroup>
              <InputGroup
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                type="password"
                name="password"
                placeholder="Your password"
              />
            </FormGroup>
            <FormGroup>
              <Button text="Log In" submit full />
            </FormGroup>
            <div className="text-right">
              <a href="#" className="text-blue-400">
                Forgot your password?
              </a>
            </div>

            <div className="mt-6 border-t border-b border-gray-300"></div>

            <p className="text-sm mt-6 text-left">
              By continuing you accept our{" "}
              <a href="#" className="text-blue-400">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SideLogin;
