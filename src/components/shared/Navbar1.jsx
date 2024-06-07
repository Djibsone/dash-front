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
//     <div classNameName='bg-dark-purple text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center fixed w-full z-50'> {/* Added fixed, w-full, and z-50 */}
//       <div classNameName='flex items-center'>
//         <span classNameName='text-amber-500 text-xl mr-1'>
//           <MessageCircle />
//         </span>
//         <h1 classNameName='text-xl'>Designer</h1>
//       </div>

//       <span
//         classNameName='absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl'
//         onClick={() => setOpen(!open)}
//       >
//         {!open ? <BiMenuAltRight /> : 'X'}
//       </span>

//       <ul
//         classNameName={`md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-dark-purple md:w-auto w-full top-14 duration-700 ease-in ${
//           open ? 'left-0' : 'left-[100%]'
//         }`}
//       >
//         {Links.map((link, index) => (
//           <li classNameName={`md:mx-4 md:my-0 my-6`} key={index}>
//             <Link
//               to={link.route}
//               classNameName={`text-xl hover:text-blue-500 ${
//                 link.route === activeLink ? 'text-amber-500' : ''
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}

//         <Link
//           to='/sign-in'
//           classNameName='bg-indigo-300 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded py-1.5 px-4'
//         >
//           Se Connecter
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


// import { MessageCircle } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
// import { Link, useLocation } from 'react-router-dom';
// import { X } from 'react-feather';
// import { Links } from '../../utils/Datas';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location.pathname]);

//   return (
//     <div classNameName='bg-dark-purple text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center fixed w-full top-0 z-50'>
//       <div classNameName='flex items-center'>
//         <span classNameName='text-amber-500 text-xl mr-1'>
//           <MessageCircle />
//         </span>
//         <h1 classNameName='text-xl'>Designer</h1>
//       </div>

//       <span
//         classNameName='absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl'
//         onClick={() => setOpen(!open)}
//       >
//         {!open ? <BiMenuAltRight /> : <X />}
//       </span>

//       <ul
//         classNameName={`md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-dark-purple md:w-auto w-full top-14 duration-700 ease-in ${
//           open ? 'left-0' : 'left-[100%]'
//         }`}
//       >
//         {Links.map((link, index) => (
//           <li classNameName={`md:mx-4 md:my-0 my-6`} key={index}>
//             <Link
//               to={link.route}
//               classNameName={`text-xl hover:text-blue-500 ${
//                 link.route === activeLink ? 'text-amber-500' : ''
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}

//         <Link
//           to='/auth'
//           classNameName='bg-indigo-300 hover:bg-blue-500 hover:text-white duration-300 font-sm text-black rounded py-1.5 px-4'
//         >
//           Se Connecter
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


// Navbar en cours
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Links } from '../../utils/Datas';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-dark-purple">
    {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
      <div className="flex flex-wrap justify-between items-center w-full p-4">
        <div className="flex items-center w-full md:w-auto justify-between">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button  
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-dark-purple md:dark:bg-dark-purple dark:border-gray-700">
          {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
            {Links.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.route} 
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
                  ${link.route === activeLink ? 'md:dark:text-blue-500' : ''} 
                  `}
                >
                  {/* ${isOpen && link.route === activeLink && 'bg-blue-700'} */}
                  {link.name}
                </Link>
              </li>
            ))}
            
            <Link
              to='/auth'
              className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            >
              Se Connecter
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

