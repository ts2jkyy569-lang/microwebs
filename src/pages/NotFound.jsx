import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">

      <h1 className="text-8xl font-black text-yellow-400">
        404
      </h1>

      <p className="text-2xl mt-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"
      >
        Back Home
      </Link>

    </div>
  );
}