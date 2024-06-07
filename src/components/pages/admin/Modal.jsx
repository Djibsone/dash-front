// export function Modal({children}) {
//     return (
//         <div classNameNameNameName="relative z-50">
//             <div classNameNameNameName="fixed inset-0 bg-black/10" ariaHidden="true"/>

//             <div classNameNameNameName="fixed inset-0 flex items-center justify-center p-4">
//                 <div classNameNameNameName="flex min-h-full items-center justify-center">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };



// import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { FiAlertCircle } from 'react-icons/fi';

// const Modal = ({ isOpen, toggleModal }) => {
//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onClick={toggleModal}
//                     classNameNameName="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
//                 >
//                     <motion.div
//                         initial={{ scale: 0, rotate: "12.5deg" }}
//                         animate={{ scale: 1, rotate: "0deg" }}
//                         exit={{ scale: 0, rotate: "0deg" }}
//                         onClick={(e) => e.stopPropagation()}
//                         classNameNameName="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-8 rounded-lg w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden"
//                     >
//                         <FiAlertCircle classNameNameName="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
//                         <div classNameNameName="relative z-10">
//                             <div classNameNameName="bg-white w-16 h-16 mb-4 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
//                                 <FiAlertCircle />
//                             </div>
//                             <h3 classNameNameName="text-3xl font-bold text-center mb-4">
//                                 Modifier les informations de l'utilisateur
//                             </h3>
//                             <form classNameNameName="space-y-4">
//                                 <div>
//                                     <label htmlFor="username" classNameNameName="block text-sm font-medium">
//                                         Nom d'utilisateur
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="username"
//                                         classNameNameName="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" classNameNameName="block text-sm font-medium">
//                                         Adresse e-mail
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         classNameNameName="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="role" classNameNameName="block text-sm font-medium">
//                                         Rôle
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="role"
//                                         classNameNameName="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
//                                     />
//                                 </div>
//                                 <div classNameNameName="flex gap-2">
//                                     <button
//                                         type="button"
//                                         onClick={toggleModal}
//                                         classNameNameName="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
//                                     >
//                                         Annuler
//                                     </button>
//                                     <button
//                                         type="submit"
//                                         classNameNameName="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
//                                     >
//                                         Sauvegarder
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// };

// export default Modal;

import React from 'react';

const Modal = ({ isOpen, toggleModal }) => {
    return (
      isOpen && (
        <div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3 className="font-bold text-gray-800">
                  Modal title
                </h3>
                <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" dataHsOverlay="#hs-slide-down-animation-modal" onClick={toggleModal}>
                  <span className="sr-only">Close</span>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <p className="mt-1 text-gray-800">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-slide-down-animation-modal" onClick={toggleModal}>
                  Close
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  };
  
  
export default Modal;
