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
