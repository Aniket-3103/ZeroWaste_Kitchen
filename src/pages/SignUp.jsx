import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const changeCheckboxValue = () => {
    setIsChecked(!isChecked);
  };

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          borderRadius: "24px",
          height: "80vh",
          width: "50vw",
          display: "flex",
        }}
      >
        <div
          style={{
            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
            backgroundColor: "white",
            width: "50%",
          }}
        >
          <div className="p-6 pt-7">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: 36,
              }}
            >
              Sign Up
            </h2>
            <p>
              Already have an account ?
              <span
                onClick={navigateToLoginPage}
                style={{
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                Login here
              </span>
            </p>
          </div>

          <div className="max-w-sm p-6 pt-1 pb-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="max-w-sm px-6 pt-1 pb-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email address "
              required
            />
          </div>
          <div className="max-w-sm p-6 pt-1 pb-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password "
              required
            />
          </div>
          <div className="max-w-sm p-6 pt-1 pb-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mobile Number"
              required
            />
          </div>

          <div className="max-w-sm p-6 pt-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email Address "
              required
            />
          </div>

          <div
            className="max-w-sm p-6 pt-4 pb-4"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={changeCheckboxValue}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <p className="px-2">Register as an Organization</p>
          </div>

          <div className="px-6">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div
          style={{
            borderTopRightRadius: "24px",
            borderBottomRightRadius: "24px",
            backgroundColor: "lightgreen",
            width: "50%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}

export { SignUp };
