// import React from 'react'
// import { IoSearch } from 'react-icons/io5'
// import { IoIosArrowDown } from 'react-icons/io'

// const Header = () => {
//   return (
//     <section className='w-full ml-4 mt-1 lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4 border border-black'>
//         <div>
//             <h1 className='text-2xl font-semibold'>Overview</h1>
//         </div>

//         <div className="flex justify-between items-center gap-10">
//             <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all' />
//             <div id='client-info' className='flex justify-center items-center gap-4'>
//                 <img src='' alt="client-image" className='rounded-full w-12 h-12' />
//                 <div className='flex flex-col justify-center items-start'>
//                     <div className='flex justify-center items-center -mb-1 gap-2'>
//                         <h1 className='text-lg font-semibold'>Hi, TD</h1><IoIosArrowDown />
//                     </div>
//                     <p>Admin</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Header;

import React from 'react';
import { IoSearch } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  return (
    <header className='w-full lg:h-20 flex justify-between items-center p-4 rounded-xl border border-black'>
      <div>
        <h1 className='text-xl font-semibold'>Overview</h1>
      </div>

      <div className="flex items-center gap-6">
        <IoSearch className='w-6 h-6 cursor-pointer hover:text-yellow-500 transition-all' />
        <div id='client-info' className='flex items-center gap-2'>
          <img src='' alt="client-image" className='rounded-full w-12 h-12' />
          <div className='flex flex-col'>
            <h1 className='text-lg font-semibold'>Hi, TD</h1>
            <p className="text-sm">Admin</p>
          </div>
          <IoIosArrowDown className="w-6 h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header;

