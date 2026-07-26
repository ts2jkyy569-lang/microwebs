import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Account created successfully!");

      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <form
        onSubmit={register}
        className="bg-neutral-900 p-10 rounded-2xl w-full max-w-md"
      >

        <h1 className="text-white text-4xl font-bold mb-8">
          Create Account
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
          Create Account
        </button>

        <p className="text-gray-400 mt-5 text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-yellow-400 ml-2"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}