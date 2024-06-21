import React, { useRef, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { userService } from "../../services/user";
import { service } from "../../services/service";
import { Links } from '../../utils/Datas';
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
	const navigate = useNavigate();
    // State to manage the navbar's visibility
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [userInfo, setUserInfo] = useState(null); // Changer le type initial à null
    const flag = useRef(false);

    // Toggle function to handle the navbar's display
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        if (flag.current === false) {
            userService.getUserProfile()
                .then(res => {
                    setUserInfo(res.data.user);
                })
                .catch(error => {
                    console.log(error);
                });
            return () => flag.current = true;
        }
    }, []);

	// fonction de deconnexion
	const logOut = () => {
		service.logOut();
		navigate('/auth');
	 }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 text-white">
                {/* Logo */}
                <NavLink to={''}>
                    <h1 className="w-full text-3xl font-bold text-white">LOGO.</h1>
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex">
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className="px-4 py-1 hover:bg-white rounded-md m-2 cursor-pointer duration-300 hover:text-black"
                        >
                            <NavLink to={link.route}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-3 relative'>
                    <div>
                        <ShoppingCart />
                    </div>
                    <div onClick={toggleNavbar} className='flex items-center gap-2 bg-[#BEC1C9] rounded-full p-1 cursor-pointer ml-3'>
                        {userInfo ? (
                            <div>
                                <Avatar name={userInfo.name} />
                            </div>
                        ) : (
                            ""
                        )}
                        <div>
                            <BiChevronDown className={`transform transition-transform duration-300 ${isNavbarOpen ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                    {isNavbarOpen && (
                        <div className='flex z-20 flex-col gap-2 absolute right-0 w-44 items-center top-14 rounded-md p-2 border-2 border-white bg-gray-800'>
                            {userInfo ? (
                                <>
                                    {userInfo.role === 0 ? (
                                        <NavLink to={'/mes-commandes'}>
                                            <div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
                                                Mes commandes
                                            </div>
                                        </NavLink>
                                    ) : (
                                        <NavLink to={'/admin'}>
                                            <div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
                                                Dashboard
                                            </div>
                                        </NavLink>
                                    )}
                                    <button className='hover:bg-white px-4 py-1 text-white rounded-md w-full hover:text-black' onClick={logOut}>Se déconnecter</button>
                                </>
                            ) : (
                                <NavLink to={'/auth'}>
                                    <div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
                                        Se connecter
                                    </div>
                                </NavLink>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Navigation Icon */}
                <div onClick={toggleNavbar} className="block md:hidden">
                    {isNavbarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        isNavbarOpen
                            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                    }
                >
                    {/* Mobile Logo */}
                    <NavLink to={''} className='ml-3 mt-1 mb-2 block'>
                        <h1 className="w-full text-3xl font-bold text-white">LOGO.</h1>
                    </NavLink>

                    {/* Mobile Navigation Items */}
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className="text-white hover:bg-gray-700 px-4 py-2 block lg:inline-block"
                        >
                            <NavLink to={link.route}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* Mobile Icons */}
                    <div className='flex items-center gap-3 mt-4'>
                        <div>
                            <ShoppingCart />
                        </div>
                        <div onClick={toggleNavbar} className='flex items-center gap-2 bg-[#BEC1C9] rounded-full p-2 cursor-pointer'>
                            {userInfo ? (
                                <div>
                                    <Avatar name={userInfo.name} />
                                </div>
                            ) : (
                                ""
                            )}
                            <div>
                                <BiChevronDown className={`transform transition-transform duration-300 ${isNavbarOpen ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
