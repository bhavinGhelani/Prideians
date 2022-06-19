// import React from "react";
// import { auth, provider } from "../services/firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Login({ setIsAuth }) {
//   let navigate = useNavigate();

//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result) => {
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/");
//     });
//   };

//   return (
//     <div className="loginPage">
//       <p>Sign In With Google to Continue</p>
//       <button className="login-with-google-btn" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

// export default Login;

import React from 'react'
import firebase from 'firebase'
import { auth } from '../services/firebase'
import LoginImg from "../assets/login.svg"
import GoogleLogo from "../assets/google_logo.png"

function LogIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-tertiary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-primary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-white">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-6xl self-center font-bold tracking-wider text-white">
                            <span className="text-red-600">P</span><span className="text-orange-600">r<span className="text-green-500">i</span></span><span className="text-blue-500">d</span><span className="text-indigo-500">e</span><span className="text-red-600">i</span><span className="text-orange-600">a<span className="text-green-500">n</span></span><span className="text-blue-500">s</span>
                        </h2>

                        <div className="relative mt-4 outline-transparent outline">
                            <input type="email" name="email" placeholder=" " className="block w-full p-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border border-gray-400 appearance-none rounded-md focus:border-blue-700 focus:outline-none" required />
                            <label className="absolute top-0 p-3 text-lg text-gray-400 duration-300 md:text-lg -z-1 origin-0" style={{ marginTop: '5px' }}>Email</label>
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input type="password" name="password" placeholder=" " className="block w-full p-3 text-lg text-gray-200 placeholder-gray-400 border bg-transparent border-gray-400 appearance-none rounded-md focus:border-blue-700 focus:outline-none" required />
                            <label className="absolute top-0 p-3 text-lg text-gray-400 duration-300 md:text-lg -z-1 origin-0" style={{ marginTop: '5px' }}>Password</label>
                        </div>

                        <div className="grid justify-center grid-cols-1 gap-1 md:gap-4 mx-4 md:grid-cols-2">

                            <button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 hover:shadow-xl transition-all ease-in-out delay-400" style={{ backgroundColor: "#1e488f" }}>Sign In</button>

                            <button type="button" className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 hover:shadow-xl transition-all ease-in-out delay-400" style={{ backgroundColor: "#1e488f", "&:hover": { backgroundColor: 'black' } }}>Sign Up</button>
                        </div>

                        <div className="w-full flex items-center justify-center text-lg mb-4">
                            <div className="inline-flex h-1 mx-4 bg-blue-800 rounded-full w-52"></div>
                            or
                            <div className="inline-flex h-1 mx-4 bg-blue-800 rounded-full w-52"></div>
                        </div>

                        <div className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-white cursor-pointer shadow-lg" onClick={signInWithGoogle}>
                            <div className="flex items-center justify-center bg-white">
                                <img src={GoogleLogo} alt="google" className="bg-white w-4" />
                                <span className="bg-white ml-4" >Sign in with Google</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-tertiary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
