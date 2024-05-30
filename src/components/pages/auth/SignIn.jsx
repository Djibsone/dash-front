import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { service } from '../../../services/service';
import { Eye, EyeOff } from 'react-feather';

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await service.login(formData);
            service.saveToken(res.data.authorisation.token);
            toast.success(res.data.status);
            navigate('/admin');
        } catch (error) {
            if (error?.response?.data) {
                // const apiErrors = Object.values(error.response.data).flat();
                setErrors(error.response.data);
                // apiErrors.forEach(err => toast.error(err));
            } else {
                toast.error('Login failed.');
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://www.svgrepo.com/show/301692/login.svg" className="w-12 mx-auto" alt="Login" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign in
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            {/* SVG path */}
                                        </svg>
                                    </div>
                                    <span className="ml-4">Sign In with Google</span>
                                </button>

                                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6" viewBox="0 0 48 48">
                                            {/* SVG path */}
                                        </svg>
                                    </div>
                                    <span className="ml-4">Sign In with Facebook</span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign in with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email" name='email' placeholder="Email" onChange={handleChange}
                                        />
                                        {errors.email && <span className="text-red-500 text-sm">{errors.email[0]}</span>}
                                    </div>

                                    <div className="mb-3">
                                        <div className="relative w-full">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type={showPassword ? 'text' : 'password'}
                                                name='password' placeholder="Password" onChange={handleChange}
                                            />
                                            <span
                                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff /> : <Eye />}
                                            </span>
                                        </div>
                                        {errors.password && <span className="text-red-500 text-sm">{errors.password[0]}</span>}
                                    </div>

                                    <div className="mt-8 flex justify-between items-center">
                                        <div className="flex">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label className="ml-2 text-xs text-gray-600 cursor-pointer" htmlFor="remember">Remember for 30 days</label>
                                        </div>
                                        <Link to='./forgot-password' className="border-b text-xs border-gray-500 border-dotted text-violet-500">Forgot password?</Link>
                                    </div>

                                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        <span className="ml-3">Sign In</span>
                                    </button>
                                </form>

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Don't have an account? &nbsp;
                                    <Link to='./sign-up' className="border-b border-gray-500 border-dotted text-violet-500">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
