import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male');

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();  // Corrected to prevent default form submission

        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                gender
            });
            navigate('/');  // Redirect to the users list page or any page you want after successful save
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="columns">
                <div className="columns is-half">
                    <form onSubmit={saveUser}>
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
                                <button type='submit' className='button is-success'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddUser;
