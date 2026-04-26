import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <Link href="/">
        <span className="p-4 rounded-full text-start bg-white text-black">
          Back
        </span>
      </Link>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 mb-3 border border-gray-300 text-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 border border-gray-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
          Sign In
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-indigo-500 font-semibold cursor-pointer">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
