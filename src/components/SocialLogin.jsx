import {
  googleLogin,
  appleLogin
} from "../services/socialAuth";

import {
  useNavigate
} from "react-router-dom";

import toast from "react-hot-toast";


export default function SocialLogin(){

const navigate = useNavigate();



const handleGoogle = async()=>{

try{

await googleLogin();

toast.success(
"Google login successful"
);

navigate("/dashboard");


}catch(error){

toast.error(
error.message
);

}

};




const handleApple = async()=>{

try{

await appleLogin();

toast.success(
"Apple login successful"
);

navigate("/dashboard");


}catch(error){

toast.error(
error.message
);

}

};




return (

<div className="space-y-3 mt-5">


<button

type="button"

onClick={handleGoogle}

className="w-full bg-white text-black py-3 rounded-xl font-bold"

>

Continue with Google

</button>




<button

type="button"

onClick={handleApple}

className="w-full bg-neutral-800 text-white py-3 rounded-xl font-bold"

>

Continue with Apple

</button>



</div>

);

}