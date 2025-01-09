import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"



const EditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male');
    const {id} = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        setUser()
    }, [])

    const setUser = async () => {
        const fetchUser = await axios.get(`http://127.0.0.1:5000/user/${id}`)
        const user = fetchUser.data
        setName(name => user.name)
        setEmail(email => user.email)
        setGender(gender => user.gender)
    }

    const updateUser = async (e) => {
        e.preventDefault()
        try{
            await axios.patch(`http://127.0.0.1:5000/users/${id}`, {
                name,
                email,
                gender
            })
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <div className="columns">
                <div className="columns is-half">
                    <form onSubmit={updateUser}>
                        <div className="field">
                            <label htmlFor="" className="label">Nama</label>
                            <div className="control">
                                <input 
                                    value={name} 
                                    onChange={e => setName(e.target.value)} // Fixed the onChange
                                    type="text" 
                                    className='input' 
                                    placeholder='Name'
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} // Fixed the onChange
                                    type="email" 
                                    className='input' 
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="" className="label">Gender</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select 
                                        value={gender} 
                                        onChange={e => setGender(e.target.value)} // Fixed the onChange
                                        className='input'
                                        
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button type='submit' className='button is-success'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditUser