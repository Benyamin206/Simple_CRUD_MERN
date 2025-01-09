import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'


const UserList = () => {
    // const navigate = useNavigate()
    const [users, setUser] = useState([])

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await axios('http://127.0.0.1:5000/users')
        // console.log(response.data)
        setUser(users => response.data)
    }
    // http://127.0.0.1:5000/users/677bb8ec35437c8b1189e82c
    const removeUser = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUser()
        }catch(e){
            console.log(e)
        }
    }

  return (  
    <>
        <Link to='/add' className='button is-success'>
            Add
        </Link>
        <div className="columns">
            <div className="columns is-half">
                <table className='table is-striped is-fulwidth mt-5'> 
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, ind) => {
                            return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>                                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link to={`edit/${user._id}`} className='button is-info is-small'>
                                        Edit
                                    </Link>
                                    <button onClick={() => removeUser(user._id)} className='button is-danger is-small'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
)
}

export default UserList