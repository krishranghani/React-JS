import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Login Forms */}
      <div className="flex flex-col md:flex-row justify-center gap-5 w-full p-4 sm:p-10 mt-6 sm:mt-10">
        {/* Login */}
        <div className="p-6 bg-white border border-gray-300 rounded-lg w-full md:w-1/2">
          <div className="flex justify-center items-center text-xl sm:text-2xl gap-2 underline">
            <FaUser />
            <h2 className="mb-6 font-bold text-center text-gray-800">Login</h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">
                Username Or Email Address{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 sm:py-3 leading-tight text-gray-700 border rounded-full appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 sm:py-3 leading-tight text-gray-700 border rounded-full appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
              <div className="flex items-center mb-2 sm:mb-0">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="rememberMe"
                />
                <label
                  className="text-sm text-gray-700 mr-2"
                  htmlFor="rememberMe"
                >
                  Remember Me
                </label>
              </div>
              <a
                className="inline-block text-sm font-bold text-blue-500 hover:text-blue-800"
                href="#"
              >
                Lost Your Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-[#000] rounded-full hover:bg-[#ff0000] duration-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
