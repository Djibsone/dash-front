import { useEffect, useRef, useState } from 'react';
import { userService } from '../../../services/user';
import { Modal } from './Modal';
import { Edit, Trash } from 'lucide-react';
import Loader from '../../../utils/Loader';

const Page = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      userService.getAllUsers()
        .then(res => {
          setUsers(res.data.users);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      return () => flag.current = true;
    }
  }, []);

  return (
    <>
      <h5 className="text-lg font-semibold mb-4">Les Utilisateurs</h5>
      {loading ? (
        <Loader />
      ) : (
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
      )}

      <div className="relative min-h-screen">
        {open && (
          <Modal>
            <div className="flex flex-col gap-2 bg-white px-8 pb-6 rounded-lg w-[800px]">
              <h1 className="text-lg text-black mt-2">Edit User</h1>
              <hr />
              {currentUser && (
                <form>
                  <div className="mb-3">
                    <label className="block text-sm font-semibold">Name</label>
                    <input
                      type="text"
                      defaultValue={currentUser.name}
                      className="w-full mt-1 p-2 border rounded-md text-[#333] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                      type="email"
                      defaultValue={currentUser.email}
                      className="w-full mt-1 p-2 border rounded-md text-[#333] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <hr />
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="py-3 px-6 bg-gray-500 hover:bg-gray-600 text-white font-bold text-sm rounded-md"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="py-3 px-8 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Page;
