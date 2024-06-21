import React, { useRef, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { userService } from "../../services/user";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
	// State to manage the navbar's visibility
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const [userInfo, setUserInfo] = useState([]);
  const flag = useRef(false);

	// Toggle function to handle the navbar's display
	const toggleNavbar = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	// Array containing navigation items
	const navItems = [
		{ id: 1, text: "Home", target: '' },
		{ id: 2, text: "Company", target: '/company' },
		{ id: 4, text: "About", target: '/about' },
		{ id: 5, text: "Contact", target: '/contact' },
	];

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

	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 text-white">
				{/* Logo */}
				<NavLink to={''}>
					<h1 className="w-full text-3xl font-bold text-white">LOGO.</h1>
				</NavLink>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex">
					{navItems.map((item, index) => (
						<li
							key={item.id}
							className="px-4 py-1 hover:bg-white rounded-md m-2 cursor-pointer duration-300 hover:text-black"
						>
							<NavLink to={item.target}>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-3 relative'>
					<div>
						<ShoppingCart />
					</div>
					<div onClick={toggleNavbar} className='flex items-center gap-2 bg-[#BEC1C9] rounded-full p-2 cursor-pointer ml-3'>
						{userInfo ? (
							<div>
								<Avatar name={userInfo.name} />
							</div>
						) : (
							""
						)}
						<div>
							<BiChevronDown className={`transform transition-transform duration-300 ${isNavbarOpen ? "rotate-180" : ""} `} />
						</div>

					</div>
					{isNavbarOpen ?
						<div className='flex z-20 flex-col gap-2 absolute right-0 w-44 items-center top-14 rounded-md p-2 border-2 border-white bg-gray-800'>

							{userInfo == 0 &&
								<NavLink className='' to={"/mes-commandes"}>
									<div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
										Mes commandes
									</div>
								</NavLink>
							}

							{userInfo == 1 &&
								<NavLink className='' to={"/dashboard"}>
									<div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
										Dashboard
									</div>
								</NavLink>
							}
							<NavLink className='' to={"/paramètre"}>
								<div className='hover:bg-white px-4 py-1 cursor-pointer rounded-md duration-300 hover:text-black'>
									Paramètres
								</div>
							</NavLink>


							<button className='hover:bg-white px-4 py-1 text-white rounded-md w-full hover:text-black' onClick={() => ('') }>Se déconnecter</button>

						</div>
						:
						""
					}
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
					<NavLink to={''} className={'ml-3 mt-1 mb-2 block'}>
						<h1 className="w-full text-3xl font-bold text-white">LOGO.</h1>
					</NavLink>

					{/* Mobile Navigation Items */}
					{navItems.map((item, index) => (
						<li
							key={item.id}
							className="text-white hover:bg-gray-700 px-4 py-2 block lg:inline-block"
						>
							<NavLink to={item.target}>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
