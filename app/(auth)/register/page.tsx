import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center ">
      <Link href="/">
        {" "}
        <span className="p-4 rounded-full text-start bg-white text-black">
          Back
        </span>
      </Link>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
          Create Account
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-purple-500 font-semibold cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
