import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back,
          {" "}
          {currentUser?.email || "Client"}
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
        {currentUser?.email?.charAt(0).toUpperCase() || "M"}
      </div>

    </div>
  );
}