import React, { useEffect, useRef, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import { userService } from '../../../services/user';
import Modal from './Modal';
import Header from '../../shared/Header';

const Page = () => {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            userService.getAllUsers()
                .then(res => {
                    setUsers(res.data.users);
                })
                .catch(error => {
                    console.log(error);
                });
            return () => flag.current = true;
        }
    }, []);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Header title='Page' />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-6">
                <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <p className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                        Liste des utilisateurs
                    </p>
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nom d'utilisateur
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Adresse e-mail
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date de création
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user, index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.created_at}
                                    </td>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700" onClick={toggleModal}>
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <Trash className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </>
    );
}

export default Page;


