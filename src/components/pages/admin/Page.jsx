// import React, { useEffect, useRef, useState } from 'react';
// import Modal from 'react-modal';
// import { userService } from '../../../services/user';
// import { Edit, Trash } from 'lucide-react';
// // import 'bootstrap/dist/css/bootstrap.css';

// const Page = () => {
//   const [users, setUsers] = useState([]);
//   const flag = useRef(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   const openModal = (user) => {
//     setCurrentUser(user);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setCurrentUser(null);
//   };
  
//     useEffect(() => {//niveau 26

//       if (flag.current === false) {
//         userService.getAllUsers()
//         .then(res => {
//           console.log(res.data.users);
//           setUsers(res.data.users)
//         })
//         .catch(error => console.log(error))
//       }

//       return () => flag.current = true;
//     }, [])


//   return (
//     <>
//       <h5 className="text-lg font-semibold mb-4">Les Utilisateurs</h5>
//       <table className="min-w-full bg-white border border-gray-200 table-auto">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b border-gray-200 text-left">#</th>
//             <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
//             <th className="py-2 px-4 border-b border-gray-200 text-left">Email</th>
//             <th className="py-2 px-4 border-b border-gray-200 text-left">Date de création</th>
//             <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{user.created_at}</td>
//               <td className="py-2 px-4 border-b border-gray-200">
//                 <button className="mr-2" onClick={() => openModal(user.id)}>
//                   <Edit className="w-5 h-5 text-blue-500" />
//                 </button>
//                 <button>
//                   <Trash className="w-5 h-5 text-red-500" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Edit User"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         {currentUser && (
//           <div>
//             <h2>Edit User</h2>
//             <form>
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   defaultValue={currentUser.name}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   defaultValue={currentUser.email}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mt-4">
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
//                 <button type="button" onClick={closeModal} className="bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
//               </div>
//             </form>
//           </div>
//         )}
//       </Modal>
//     </>


//   )
// }

// export default Page;

import React, { useEffect, useRef, useState } from 'react';
import { userService } from '../../../services/user';
import { Modal } from './Modal';
import { Edit, Trash } from 'lucide-react';

const Page = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openModal = (user) => {
    setCurrentUser(user);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentUser(null);
  };
  
  useEffect(() => {
    if (flag.current === false) {
      userService.getAllUsers()
        .then(res => {
          setUsers(res.data.users);
        })
        .catch(error => console.log(error));
    }
    return () => flag.current = true;
  }, []);

  return (
    <>
      <h5 className="text-lg font-semibold mb-4">Les Utilisateurs</h5>
      <table className="min-w-full bg-white border border-gray-200 table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-200 text-left">#</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Date de création</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.created_at}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="mr-2" onClick={() => openModal(user)}>
                  <Edit className="w-5 h-5 text-blue-500" />
                </button>
                <button>
                  <Trash className="w-5 h-5 text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="relative min-h-screen">
          {open ? (
              <Modal>
                <div className="flex flex-col gap-2 bg-white px-8 pb-6 rounded-lg w-[800px]">
                  <h1 className="text-lg text-black mt-2">Edit User</h1>
                  <hr />
                  <div className="mb-3">
                      <label className="block text-sm font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full mt-1 p-2 border rounded-md text-[#333] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full mt-1 p-2 border rounded-md text-[#333] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <hr />
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      onClick={() => setOpen(!open)}
                      className="py-3 px-6 bg-gray-500 hover:bg-gray-600 text-white font-bold text-sm rounded-md"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setOpen(!open)}
                      className="py-3 px-8 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Modal>
          ) : null}
      </div>  
    </>
    );
  };
  
  export default Page;
  