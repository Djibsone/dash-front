import React, { useEffect, useState } from 'react'
import { userService } from '../../../services/user';

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {//niveau 25
    userService.getAllUsers()
    .then(res => {
      setUsers(res.data.users)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      Page
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <h5 className="card-header">Profile</h5>
                      <div className="card-body">
                          {users.map((user, index) => (
                            <div key={index}>
                              <p className="card-text"><strong>Name: </strong> {user.name}</p>
                              <p className="card-text"><strong>Email: </strong> {user.email}</p>
                              <p className="card-text"><strong>Date de création: </strong> {user.created_at}</p>
                            </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Page;
