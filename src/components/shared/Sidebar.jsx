// import React, { useState } from 'react'
// import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
// import { BsArrowLeftShort, BsChevronDown, BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse, BsSearch } from 'react-icons/bs'
// import { RiDashboardFill } from 'react-icons/ri';

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const Menus = [
//     { title: 'Dashboard' },
//     { title: 'Pages', icon: <AiOutlineFileText /> },
//     { title: 'Media', spacing: true, icon: <BsFillImageFill /> },
//     {
//       title: 'Projects',
//       icon: <BsReverseLayoutTextSidebarReverse />,
//       submenu: true,
//       submenuItems: [
//         { title: 'Submenu 1'},
//         { title: 'Submenu 2'},
//         { title: 'Submenu 3'},
//       ],
//     },
//     { title: 'Analytics', icon: <AiOutlineBarChart /> },
//     { title: 'Inbox', icon: <AiOutlineMail /> },
//     { title: 'Profile', spacing: true, icon: <BsPerson /> },
//     { title: 'Setting', icon: <AiOutlineSetting /> },
//     { title: 'Log Out', icon: <AiOutlineLogout /> },
//   ];

//   return (
//     <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
//       <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />

//       <div className='inline-flex '>
//         <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`} />
//         <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Tailwind</h1>
//       </div>

//       <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
//         <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`} />
//         <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />
//       </div>

//       <ul className='pt-2'>
//         {Menus.map((menu, index) => (
//           <>
//             <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}`}>
//               <span className='text-2xl block float-left'>
//                 {menu.icon ? menu.icon : <RiDashboardFill />}
//               </span>
//               <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
//               {menu.submenu && open && (
//                 <BsChevronDown className={`duration-200 ${submenuOpen && 'rotate-180'}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
//               )}
//             </li>

//             {menu.submenu && submenuOpen && open && (
//               <ul>
//                 {menu.submenuItems.map((submenuItem, index) => (
//                 <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'>
//                   {submenuItem.title}
//                 </li>
//               ))}
//               </ul>
//             )}
//           </>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Sidebar;


import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEnvironment, AiOutlineLogout } from 'react-icons/ai';
import { BsArrowLeftShort, BsChevronDown, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { Menus } from '../../utils/Datas';
import { service } from '../../services/service';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  // fonction de deconnexion
  const logOut = () => {
    service.logOut();
    navigate('/');
  }

  return (
    <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
        onClick={() => { setOpen(!open); setActiveMenuItem(''); }}
      />

      <div className='inline-flex'>
        <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`} />
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Tailwind</h1>
      </div>

      <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
        <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`} />
        <input type="search" placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />
      </div>

      <ul className='pt-2'>
        {Menus.map((menu, index) => (
          <Fragment key={index}>
            <Link
              to={menu.route}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'} ${menu.route === activeMenuItem ? 'bg-blue-500' : ''}`}
              onMouseEnter={() => setHoveredMenuItem(menu.id)}
              onMouseLeave={() => setHoveredMenuItem(null)}
            >
              <span className='text-2xl block float-left'>
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
              {menu.submenu && open && (
                <BsChevronDown className={`duration-200 ${submenuOpen && 'rotate-180'}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
              )}
              {!open && hoveredMenuItem === menu.id && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-2 bg-indigo-100 text-indigo-800 text-sm whitespace-nowrap">
                  {menu.title}
                </div>
              )}
            </Link>

            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <Fragment key={index}>
                    <Link to={submenuItem.route} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'>
                      <span className='text-xl block float-left'>
                        {submenuItem.icon ? submenuItem.icon : <RiDashboardFill />}
                      </span>
                      {submenuItem.title}
                    </Link>
                  </Fragment>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </ul>

      <ul className='pt-2'>
        <div className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md' onClick={logOut}>
          <span className='text-2xl block float-left'>
            <AiOutlineLogout />
          </span>
          <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>Log Out</span>
        </div>
      </ul>
      
    </div>
  );
}

export default Sidebar;

