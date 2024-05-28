import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
                    <form>
                        <div className="py-4">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" placeholder="Enter your email address" 
                            />
                        </div>
                        <button className="tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center">
                            Reset Password
                        </button>
                    </form>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                        Forgot your password? &nbsp;
                        <Link to='/auth' className="border-b border-gray-500 border-dotted text-violet-500">
                            Reset it here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
