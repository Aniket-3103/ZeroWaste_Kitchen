import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { toastError, toastSuccess } from "../components/notifications";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  // const { addUser } = useAuthContext();

  const navigateToSignupPage = () => {
    navigate("/sign-up");
  };

  const navigateToDashboardPage = () => {
    navigate("/dashboard");
  };

  const handleLogin = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      toastError("Please fill the values");
      return setLoading(false);
    }

    const payload = {
      query: email,
      password,
    };

    const response = await login(payload);

    setLoading(true);
    if (response) {
      if (response?.user) {
        toastSuccess("Logged in successfully");
        localStorage.setItem('user', JSON.stringify(response.user));
        resetValues();

        // addUser(response.user, response.token, url);
        setLoading(false);
        navigateToDashboardPage();
        return;
      } else {
        toastError(response?.message ?? "Something went wrong");
        return setLoading(false);
      }
    } else {
      toastError("Server error, try again later");
      return setLoading(false);
    }
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
          height: "60vh",
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
              Log In
            </h2>
            <p>
              Don't have an account ?{" "}
              <span
                onClick={navigateToSignupPage}
                style={{
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                Register with us
              </span>
            </p>
          </div>

          <div className="max-w-sm px-6 pt-2 pb-1">
            <input
              type="email"
              value={email} // Bind state to input
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="max-w-sm p-6 pt-1">
            <input
              type="password"
              value={password} // Bind state to input
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="px-6">
            <button
              type="button"
              onClick={handleLogin} // Trigger login on button click
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
            >
              Log In
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full"
            >
              Sign In
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
              "url('https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}

export { LoginPage };
