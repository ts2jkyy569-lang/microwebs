export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-neutral-900 p-10 rounded-xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-neutral-800 mb-5"
        />

        <button className="w-full bg-yellow-400 text-black py-3 rounded font-bold">
          Reset Password
        </button>

      </div>

    </div>
  );
}