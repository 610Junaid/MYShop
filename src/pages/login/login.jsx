import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
// import { auth } from "../../firebase/firebase";

function Login() {
  const navigateHome = useNavigate();

  const [UserSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!UserSignUp.email || !UserSignUp.password) {
      return toast.error("All Field Are Required");
    } else {
      signInWithEmailAndPassword(auth, UserSignUp.email, UserSignUp.password)
        .then((res) => {
          navigateHome("/");
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={login}
            alt="loginimage"
            className="object-cover w-full object-center h-[200px]"
          />

          <div className="w-full h-[200px] bg-black absolute top-[0.16%] left-0 opacity-[0.5]"></div>
          <h2 className="absolute top-[40%] left-[45%] right-auto text-white font-semibold text-4xl md:text-5xl text-center">
            Login
          </h2>
        </div>

        {/* login form */}

        <div className="container px-5 py-16 mx-auto flex">
          <div className=" bg-gray-500 rounded-lg p-8 flex flex-col mx-auto mt-10 md:mt-0 relative shadow-md">
            <h2 className="text-gray-900 text-4xl font-semibold mb-1 title-font text-center">
              Login
            </h2>

            <div className="relative mb-4">
              <label className="leading-7  text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={UserSignUp.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4E161F] focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7  text-black font-semibold">
                Password
              </label>
              <input
                type="Password"
                id="password"
                name="password"
                autoComplete="off"
                value={UserSignUp.password}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4E161F] f focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-white bg-indigo-600  border-0 py-2 px-6 focus:outline-none hover:bg-[#4E161F] rounded text-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className="text-sm text-black mt-4 text-center">
              Don't have an Account{" "}
              <Link to="/signUp">
                <button className="hover:text-blue-800 hover:underline">
                  Sign Up
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
