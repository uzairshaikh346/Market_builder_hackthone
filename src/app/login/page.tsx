import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import { User } from "@clerk/nextjs/server";

export default function LoginComponent() {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900">WELCOME</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Welcome! Please enter your details.
                    </p>
                    <div className="flex items-center justify-center">
                        <SignedIn>
                            <UserButton />

                        </SignedIn>
                    </div>
                    <SignedOut>
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-semibold text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-lg font-semibold text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Remember me</span>
                                </label>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    Forgot password
                                </a>
                            </div>
                            <div
                                className="w-full py-3 text-lg flex items-center justify-center text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition duration-200"
                            >
                                <SignInButton mode="modal" />
                            </div>
                        </div>
                        <p className="mt-6 text-center text-gray-700">
                            Dont have an account?{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-900"
                            >
                                Sign up!
                            </a>
                        </p>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}
