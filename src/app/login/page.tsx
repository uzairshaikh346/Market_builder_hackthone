import Navbar from "../components/Navbar";

export default function LoginComponent() {
    return (
        <div>
        <Navbar/>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
  <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md">
    <h2 className="text-4xl font-bold text-center text-gray-900">WELCOME</h2>
    <p className="text-center text-gray-500 mb-8">
      Welcome! Please enter your details.
    </p>

    <form className="space-y-8">
      <div>
        <label
          htmlFor="email"
          className="block text-base font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm p-3"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-base font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm p-3"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-400-500"
          />
          <span className="ml-2 text-base text-gray-600">Remember me</span>
        </label>
        <a
          href="#"
          className="text-base font-medium text-blue-500-500 hover:underline"
        >
          Forgot password
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-4 text-lg text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:ring-4 focus:ring-red-300"
      >
        Sign in
      </button>
    </form>

    <p className="mt-8 text-center text-base text-gray-600">
      Dont have an account?{" "}
      <a
        href="#"
        className="font-medium text-blue-500 hover:underline"
      >
        Sign up!
      </a>
    </p>
  </div>
</div>
      </div>
    );
  }
  