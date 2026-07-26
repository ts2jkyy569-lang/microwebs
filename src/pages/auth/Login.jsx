import { useState } from "react";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

import {
  useNavigate,
  Link
} from "react-router-dom";

import toast from "react-hot-toast";

import SocialLogin from "../../components/SocialLogin";



export default function Login() {


const navigate = useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");




const login = async(e)=>{


e.preventDefault();



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



toast.success(
"Welcome back!"
);



navigate("/dashboard");



}catch(error){


toast.error(
error.message
);


}


};




return (

<div className="min-h-screen bg-black flex items-center justify-center">


<form

onSubmit={login}

className="bg-neutral-900 p-10 rounded-2xl w-full max-w-md"


>


<h1 className="text-white text-4xl font-bold mb-8">

Login

</h1>




<input

type="email"

placeholder="Email"

className="w-full p-4 rounded-lg mb-4 bg-neutral-800 text-white"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="password"

placeholder="Password"

className="w-full p-4 rounded-lg mb-6 bg-neutral-800 text-white"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>




<button

className="w-full bg-yellow-400 py-4 rounded-xl font-bold"

>

Login

</button>





{/* Social Login */}

<SocialLogin />





<p className="text-center text-gray-400 mt-5">


Don't have an account?


<Link

to="/register"

className="text-yellow-400 ml-2"

>

Register

</Link>


</p>



</form>


</div>


);


}