// import { MessageCircle } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { BiMenuAltRight } from 'react-icons/bi';
// import { Link, useLocation } from 'react-router-dom';
// import { Links } from '../../utils/Datas';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className='bg-dark-purple text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center fixed w-full z-50'> {/* Added fixed, w-full, and z-50 */}
//       <div className='flex items-center'>
//         <span className='text-amber-500 text-xl mr-1'>
//           <MessageCircle />
//         </span>
//         <h1 className='text-xl'>Designer</h1>
//       </div>

//       <span
//         className='absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl'
//         onClick={() => setOpen(!open)}
//       >
//         {!open ? <BiMenuAltRight /> : 'X'}
//       </span>

//       <ul
//         className={`md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-dark-purple md:w-auto w-full top-14 duration-700 ease-in ${
//           open ? 'left-0' : 'left-[100%]'
//         }`}
//       >
//         {Links.map((link, index) => (
//           <li className={`md:mx-4 md:my-0 my-6`} key={index}>
//             <Link
//               to={link.route}
//               className={`text-xl hover:text-blue-500 ${
//                 link.route === activeLink ? 'text-amber-500' : ''
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}

//         <Link
//           to='/sign-in'
//           className='bg-indigo-300 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded py-1.5 px-4'
//         >
//           Se Connecter
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import { MessageCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { Links } from '../../utils/Datas';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className='bg-dark-purple text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center fixed w-full top-0 z-50'>
      <div className='flex items-center'>
        <span className='text-amber-500 text-xl mr-1'>
          <MessageCircle />
        </span>
        <h1 className='text-xl'>Designer</h1>
      </div>

      <span
        className='absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl'
        onClick={() => setOpen(!open)}
      >
        {!open ? <BiMenuAltRight /> : /*<BiMenuAltLeft />*/ 'X'}
      </span>

      <ul
        className={`md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-dark-purple md:w-auto w-full top-14 duration-700 ease-in ${
          open ? 'left-0' : 'left-[100%]'
        }`}
      >
        {Links.map((link, index) => (
          <li className={`md:mx-4 md:my-0 my-6`} key={index}>
            <Link
              to={link.route}
              className={`text-xl hover:text-blue-500 ${
                link.route === activeLink ? 'text-amber-500' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <Link
          to='/auth'
          className='bg-indigo-300 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded py-1.5 px-4'
        >
          Se Connecter
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;



/*


<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/
