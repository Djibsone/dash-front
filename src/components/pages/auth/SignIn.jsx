import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { service } from '../../../services/service';


const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword,  setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
            await service.login(formData)
            .then(res => {
                service.saveToken(res.data.authorisation.token);
                toast.success(res.data.status);
                navigate('/admin');
            })
            // .catch(error => console.log(error))
            .catch(error => toast.error(error.response.data.message))
        
        // } catch (error) {
        //     console.log(error);
        //     const resError = error.response.data.message;
        //     if (error.response) {
        //         toast.error(resError, {
        //             theme: 'dark',
        //         });
        //     } else {
        //         if (resError && error.response.status === 422) {
        //             toast.error(error.response.data.password, {
        //                 theme: 'dark',
        //             });

        //             /*voila ce que donne ma console "AxiosError {message: 'Request failed with status code 422', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
        //             code
        //             : 
        //             "ERR_BAD_REQUEST"
        //             config
        //             : 
        //             {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
        //             message
        //             : 
        //             "Request failed with status code 422"
        //             name
        //             : 
        //             "AxiosError"
        //             request
        //             : 
        //             XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
        //             response
        //             : 
        //             config
        //             : 
        //             {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
        //             data
        //             : 
        //             password
        //             : 
        //             ['The password field is required.']
        //             [[Prototype]]
        //             : 
        //             Object
        //             headers
        //             : 
        //             AxiosHeaders {cache-control: 'no-cache, private', content-type: 'application/json'}
        //             request
        //             : 
        //             XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
        //             status
        //             : 
        //             422
        //             statusText
        //             : 
        //             "Unprocessable Content" et je ne sais pas comment m'y prendre pour afficher l'error si le password et vide et au cas ou c'est email*/
                
        //         } else {
        //             toast.error('Logged failed.', {
        //                 theme: 'dark',
        //             });
        //         }
        //     }
        // }
    }

    return (    
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://www.svgrepo.com/show/301692/login.svg"
                            className="w-12 mx-auto" />
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
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Google
                                    </span>
                                </button>
        
                                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6" viewBox="0 0 48 48">
                                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Facebook
                                    </span>
                                </button>
                            </div>
        
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign in with e-mail
                                </div>
                            </div>
        
                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" name='email' placeholder="Email" onChange={handleChange} />
                                    {/* <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" /> */}
                                    <div className='flex justify-center'>
                                        <div className="relative w-full py-4">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-12"
                                                type={showPassword ? 'text' : 'password'} 
                                                name='password' placeholder="Password" onChange={handleChange}
                                            />
                                            <span
                                                className="absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff /> : <Eye />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-between items-center">
                                        <div className="flex">
                                            <input type="checkbox" name="" id="remember" />
                                            <label className="ml-2 text-xs text-gray-600 cursor-pointer" htmlFor="remember">Remember for 30 days</label>
                                        </div>
                                        <Link to='./forgot-password' className="border-b text-xs border-gray-500 border-dotted text-violet-500">Forgot password?</Link>
                                    </div>
                                    <button
                                        // className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        <span className="ml-3">
                                            Sign In
                                        </span>
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
                        style={{backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'}}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
