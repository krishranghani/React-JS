// Login.js
import { useState } from "react";
import {useformik} from 'formik'

function Login() {
    const [username, setUsername] = useState("");
    const [Email , setemail] =useState("");
    const [password1, setPassword1] = useState("");

    const handleUsernameChange1 = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange2 = (event) => {
        setemail(event.target.value);
    };

    const handlePasswordChange1 = (event) => {
        setPassword1(event.target.value);
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Username:", username);
        console.log("Password:", password1);
        // Perform login logic here
    };


    return (
        <>

            <div className="bg-blue-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-md shadow-md w-96">
                    <h2 className="text-xl font-bold mb-2">Login</h2>
                    <form onSubmit={handleSubmit1}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                Username 
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={username}
                                onChange={handleUsernameChange1}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={Email}
                                onChange={handleEmailChange2}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={password1}
                                onChange={handlePasswordChange1}
                                required
                            />
                        </div>
                        <div className="flex items-center mb-6">
                            <input type="checkbox" className="mr-2" />
                            <label htmlFor="remember-me" className="text-gray-700 text-sm font-bold">
                                Remember Me
                            </label>
                            <a href="#" className="text-blue-500 ml-auto">
                                Lost Your Password?
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Login;
